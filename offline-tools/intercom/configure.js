// Load current configuration
function loadConfig() {
    const params = new URLSearchParams(window.location.search);
    const savedRoom = localStorage.getItem('intercomRoom');
    const savedRole = localStorage.getItem('intercomRole');
    
    // Determine current mode
    if (params.get('host')) {
        document.getElementById('mode').value = 'host';
        document.getElementById('roomId').value = params.get('host');
    } else if (params.get('join')) {
        document.getElementById('mode').value = 'join';
        document.getElementById('roomId').value = params.get('join');
    } else if (savedRole && savedRoom) {
        document.getElementById('mode').value = savedRole === 'host' ? 'host' : 'join';
        document.getElementById('roomId').value = savedRoom;
    }
    
    // Update room ID field based on mode
    updateRoomIdField();
}

// Update room ID field placeholder based on mode
function updateRoomIdField() {
    const mode = document.getElementById('mode').value;
    const roomIdField = document.getElementById('roomId');
    
    if (mode === 'host') {
        roomIdField.placeholder = 'Enter room ID or leave empty to generate';
    } else {
        roomIdField.placeholder = 'Enter room ID to join';
    }
}

// Test connection
async function testConnection() {
    const mode = document.getElementById('mode').value;
    let roomId = document.getElementById('roomId').value.trim();
    const testResult = document.getElementById('testResult');
    
    testResult.textContent = 'Testing connection...';
    testResult.className = '';
    testResult.style.display = 'block';
    
    try {
        if (mode === 'host') {
            // Test hosting capability
            if (!roomId) {
                // Generate a test room ID
                roomId = Array.from(crypto.getRandomValues(new Uint8Array(6)))
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            }
            
            const hostPeer = new Peer(roomId);
            
            await new Promise((resolve, reject) => {
                hostPeer.on('open', (id) => {
                    testResult.textContent = `Host connection successful! Room ID: ${id}`;
                    testResult.className = 'success';
                    hostPeer.destroy();
                    resolve();
                });
                
                hostPeer.on('error', (err) => {
                    let errorMsg = 'Host connection failed';
                    if (err.type === 'unavailable-id') {
                        errorMsg = 'Room ID already taken';
                    } else if (err.type === 'peer-unavailable') {
                        errorMsg = 'PeerJS service unavailable';
                    } else {
                        errorMsg = `Host error: ${err.type}`;
                    }
                    testResult.textContent = errorMsg;
                    testResult.className = 'error';
                    hostPeer.destroy();
                    reject(err);
                });
                
                setTimeout(() => {
                    testResult.textContent = 'Host connection timeout';
                    testResult.className = 'error';
                    hostPeer.destroy();
                    reject(new Error('Timeout'));
                }, 10000);
            });
            
        } else {
            // Test joining capability
            if (!roomId) {
                testResult.textContent = 'Please enter a room ID to test joining';
                testResult.className = 'error';
                return;
            }
            
            const clientPeer = new Peer();
            
            await new Promise((resolve, reject) => {
                clientPeer.on('open', (id) => {
                    // Try to connect to the host
                    const testConn = clientPeer.connect(roomId);
                    
                    testConn.on('open', () => {
                        testResult.textContent = `Successfully connected to room: ${roomId}`;
                        testResult.className = 'success';
                        testConn.close();
                        clientPeer.destroy();
                        resolve();
                    });
                    
                    testConn.on('error', (err) => {
                        testResult.textContent = `Failed to connect to room: ${roomId}`;
                        testResult.className = 'error';
                        clientPeer.destroy();
                        reject(err);
                    });
                    
                    // If no response after 5 seconds, assume room doesn't exist
                    setTimeout(() => {
                        if (testConn.open === false) {
                            testResult.textContent = `Room ${roomId} not found or host offline`;
                            testResult.className = 'error';
                            testConn.close();
                            clientPeer.destroy();
                            reject(new Error('Room not found'));
                        }
                    }, 5000);
                });
                
                clientPeer.on('error', (err) => {
                    testResult.textContent = `Client connection failed: ${err.type}`;
                    testResult.className = 'error';
                    clientPeer.destroy();
                    reject(err);
                });
                
                setTimeout(() => {
                    testResult.textContent = 'Client connection timeout';
                    testResult.className = 'error';
                    clientPeer.destroy();
                    reject(new Error('Timeout'));
                }, 10000);
            });
        }
    } catch (err) {
        console.error('Test connection error:', err);
    }
}

// Handle form submission
document.getElementById('configForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const mode = document.getElementById('mode').value;
    let roomId = document.getElementById('roomId').value.trim();
    
    // Generate room ID if needed
    if (mode === 'host' && !roomId) {
        roomId = Array.from(crypto.getRandomValues(new Uint8Array(6)))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }
    
    // Validate room ID for join mode
    if (mode === 'join' && !roomId) {
        alert('Please enter a room ID to join');
        return;
    }
    
    // Save to localStorage
    localStorage.setItem('intercomRoom', roomId);
    localStorage.setItem('intercomRole', mode === 'host' ? 'host' : 'client');
    
    // Redirect with appropriate query string
    const queryParam = mode === 'host' ? `host=${roomId}` : `join=${roomId}`;
    window.location.href = `index.html?${queryParam}`;
});

// Mode change handler
document.getElementById('mode').addEventListener('change', updateRoomIdField);

// Initialize
loadConfig();
