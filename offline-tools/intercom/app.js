// Keep screen awake
if ('wakeLock' in navigator) {
    navigator.wakeLock.request('screen').catch(err => {
        console.log('Wake lock error:', err);
    });
}

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// State management
let peer = null;
let roomId = null;
let isHost = false;
let connections = new Map();
let localStream = null;
let isCallActive = false;

// Generate secure random room ID
function generateRoomId() {
    return Array.from(crypto.getRandomValues(new Uint8Array(6)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Initialize the app
function init() {
    const params = new URLSearchParams(window.location.search);
    const hostId = params.get('host');
    const joinId = params.get('join');
    
    // Check localStorage for saved room
    const savedRoom = localStorage.getItem('intercomRoom');
    const savedRole = localStorage.getItem('intercomRole');

    if (hostId) {
        // Returning host
        roomId = hostId;
        isHost = true;
        localStorage.setItem('intercomRoom', roomId);
        localStorage.setItem('intercomRole', 'host');
        startPeer(roomId);
    } else if (joinId) {
        // Client joining
        roomId = joinId;
        isHost = false;
        localStorage.setItem('intercomRoom', roomId);
        localStorage.setItem('intercomRole', 'client');
        startPeer();
    } else if (savedRoom && savedRole) {
        // Restored from localStorage (PWA launch)
        roomId = savedRoom;
        isHost = savedRole === 'host';
        startPeer(isHost ? roomId : undefined);
    } else {
        // New room
        roomId = generateRoomId();
        isHost = true;
        localStorage.setItem('intercomRoom', roomId);
        localStorage.setItem('intercomRole', 'host');
        window.history.replaceState({}, '', `?host=${roomId}`);
        startPeer(roomId);
    }
    
    // Initialize fullscreen functionality
    initFullscreen();
}

// Start PeerJS
function startPeer(id = null) {
    peer = id ? new Peer(id) : new Peer();

    peer.on('open', (peerId) => {
        updateStatus(isHost ? 
            `Room: ${roomId}<br>Share: ${window.location.origin}${window.location.pathname}?join=${roomId}` : 
            `Connecting to room: ${roomId}`
        );

        if (!isHost) {
            // Client connects to host
            connectToHost();
        }
    });

    peer.on('connection', handleConnection);
    peer.on('call', handleIncomingCall);

    peer.on('error', (err) => {
        console.error('Peer error:', err);
        updateStatus(`Error: ${err.type}`);
    });
}

// Connect to host as client
function connectToHost() {
    const conn = peer.connect(roomId);
    setupConnection(conn, roomId);
}

// Handle new connections
function handleConnection(conn) {
    setupConnection(conn, conn.peer);
}

// Setup connection handlers
function setupConnection(conn, peerId) {
    conn.on('open', () => {
        connections.set(peerId, { dataConn: conn });
        updateStatus(isHost ? `${connections.size} client(s) connected` : 'Connected to host');
        
        // Send current call state
        conn.send({ type: 'callState', active: isCallActive });
    });

    conn.on('data', (data) => {
        handleMessage(data, peerId);
    });

    conn.on('close', () => {
        connections.delete(peerId);
        removeVideoElement(peerId);
        updateStatus(isHost ? `${connections.size} client(s) connected` : 'Disconnected');
    });
}

// Handle messages
function handleMessage(data, peerId) {
    if (data.type === 'toggleCall') {
        toggleCall();
    } else if (data.type === 'callState') {
        if (data.active && !isCallActive) {
            toggleCall();
        } else if (!data.active && isCallActive) {
            toggleCall();
        }
    }
}

// Toggle call button click
document.getElementById('callButton').addEventListener('click', () => {
    toggleCall();
    // Broadcast to all connections
    connections.forEach((conn) => {
        conn.dataConn.send({ type: 'toggleCall' });
    });
});

// Fullscreen functionality
function initFullscreen() {
    const fullscreenButton = document.getElementById('fullscreenButton');
    
    // Handle fullscreen button click
    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Fullscreen error:', err);
            });
        }
    });
    
    // Listen for fullscreen changes
    document.addEventListener('fullscreenchange', updateFullscreenButton);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
    document.addEventListener('mozfullscreenchange', updateFullscreenButton);
    document.addEventListener('msfullscreenchange', updateFullscreenButton);
    
    // Initial button state
    updateFullscreenButton();
}

function updateFullscreenButton() {
    const fullscreenButton = document.getElementById('fullscreenButton');
    const isFullscreen = !!(document.fullscreenElement || 
                           document.webkitFullscreenElement || 
                           document.mozFullScreenElement || 
                           document.msFullscreenElement);
    
    if (isFullscreen) {
        fullscreenButton.classList.add('hidden');
    } else {
        fullscreenButton.classList.remove('hidden');
    }
}

// Toggle call state
async function toggleCall() {
    const button = document.getElementById('callButton');
    const grid = document.getElementById('videoGrid');

    if (!isCallActive) {
        // Start call
        try {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            
            // Add local video
            addVideoElement('local', localStream);
            
            // Call all connected peers
            if (isHost) {
                connections.forEach((conn, peerId) => {
                    const call = peer.call(peerId, localStream);
                    setupCall(call, peerId);
                });
            } else {
                // Client calls host
                const call = peer.call(roomId, localStream);
                setupCall(call, roomId);
            }

            button.classList.add('active');
            grid.classList.add('active');
            isCallActive = true;
        } catch (err) {
            console.error('Failed to get media:', err);
            updateStatus('Camera/microphone access denied');
        }
    } else {
        // End call
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
            localStream = null;
        }

        // Clear all videos
        document.getElementById('videoGrid').innerHTML = '';
        
        button.classList.remove('active');
        grid.classList.remove('active');
        isCallActive = false;
    }
}

// Handle incoming calls
function handleIncomingCall(call) {
    if (localStream && isCallActive) {
        call.answer(localStream);
        setupCall(call, call.peer);
    }
}

// Setup call handlers
function setupCall(call, peerId) {
    call.on('stream', (remoteStream) => {
        addVideoElement(peerId, remoteStream);
    });

    call.on('close', () => {
        removeVideoElement(peerId);
    });

    // Store call reference
    const conn = connections.get(peerId);
    if (conn) {
        conn.call = call;
    }
}

// Add video element to grid
function addVideoElement(id, stream) {
    const grid = document.getElementById('videoGrid');
    let wrapper = document.getElementById(`video-${id}`);
    
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = `video-${id}`;
        wrapper.className = 'videoWrapper';
        
        const video = document.createElement('video');
        video.autoplay = true;
        video.playsInline = true;
        video.muted = (id === 'local');
        
        wrapper.appendChild(video);
        grid.appendChild(wrapper);
    }
    
    const video = wrapper.querySelector('video');
    video.srcObject = stream;
}

// Remove video element
function removeVideoElement(id) {
    const element = document.getElementById(`video-${id}`);
    if (element) {
        element.remove();
    }
}

// Update status text
function updateStatus(text) {
    document.getElementById('status').innerHTML = text;
}

// Start the app
init();
