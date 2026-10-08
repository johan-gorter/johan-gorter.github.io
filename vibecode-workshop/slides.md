<!-- .slide: class="welkom" -->

# Welkom

<p class="subtitle">Vibecode Friday · Bouw met AI je eigen tool · The Innovative Lawyer · 9 oktober 2026</p>

<div class="example-box voorbereiding">

### Voorbereiding

- Download de app vanaf **claude.com/download**
- Log in of maak een account. Een Pro-account (24 euro) is prima
- Open **johangorter.com/vibecode-workshop**

</div>

---

## Johan Gorter

<div class="profile">
  <img src="johan-gorter.jpg" alt="Johan Gorter">
  <ul>
    <li>Software Architect bij AFAS Software</li>
    <li>AI-enthousiasteling</li>
    <li>Op vrijdag freelancer</li>
  </ul>
</div>

---

## Zo ziet de dag eruit

| Tijd | |
|---|---|
| 09:30 | Welkom en intro: wat is code? |
| 10:15 | Samen bouwen: Mail Chat in het demo-account |
| 11:15 | Claude ogen en handen geven |
| 11:45 | Uit de praktijk: Joyce Boonstra |
| 12:15 | Lunch (doorbouwen mag) |
| 12:45 | Breakout: automatisch testen |
| 13:15 | Doorbouwen: Mail Chat of je eigen project |
| 13:40 | Laten zien wat je gebouwd hebt |
| 14:00 | Einde |

<p class="fragment small">Extra onderwerpen op aanvraag: code onderhoudbaar houden, webserver, versiebeheer, uitrollen</p>

---

<!-- .slide: class="divider" -->
<p class="level">Intro</p>

## Waarom dit ertoe doet

---

<!-- .slide: class="screenshot" -->
![Geoffrey Hinton in 2016: "if you work as a radiologist you're like the coyote that's already over the edge"](screenshot-hinton-coyote.webp)

Note:
Video: https://www.youtube.com/watch?v=2HMPRXstSvQ (rond 0:22)

---

## Toronto, 2016

> "People should stop training radiologists now."

<p class="small">Geoffrey Hinton, "Godfather of AI", Creative Destruction Lab</p>

<p class="fragment">Radiologen zijn als de coyote die al over de rand van de klif is gerend,<br>maar nog niet naar beneden heeft gekeken.</p>

Note:
Video: https://www.youtube.com/watch?v=2HMPRXstSvQ
Hinton voorspelde dat deep learning binnen 5 jaar (hooguit 10) beter zou zijn dan radiologen.

---

## Tien jaar later

<div class="bars">
  <div class="bar-row"><span>2014</span><div class="bar muted" style="width: 85%">30.723</div></div>
  <div class="bar-row"><span>2023</span><div class="bar" style="width: 100%">36.024</div></div>
</div>

<p class="small">Radiologen in de VS die Medicare-patiënten behandelen (Neiman Health Policy Institute, AJR 2024)</p>

- Mayo Clinic: **+55%** radiologen sinds 2016
- Recordaantal opleidingsplekken: **1.208** in 2025
- Salaris **+48%** t.o.v. 2015, wereldwijd tekort

Note:
Bronnen: Works in Progress "AI isn't replacing radiologists" (sep 2025), Fortune (mei 2026),
Jeroen Teunisse (Sogyo) "De non-coder en de augmented engineer — Deel 1".

---

## Jevons-paradox

Wordt iets goedkoper, dan gebruiken we er **meer** van

- 1865: efficiëntere stoommachine → meer kolenverbruik <!-- .element: class="fragment" -->
- Goedkopere beeldanalyse → meer scans → meer radiologen <!-- .element: class="fragment" -->
- Goedkopere software → **meer vraag naar software** <!-- .element: class="fragment" -->

Note:
Zelfde redenering voor juristen: Mr. Online, "Intelligentie als grondstof" (aug 2026).

---

## Software die er vroeger nooit was gekomen

- Deze presentatie <!-- .element: class="fragment" -->
- Mijn huis automatiseren <!-- .element: class="fragment" -->
- Een script dat saai werk doet <!-- .element: class="fragment" -->
- Een website of webapp <!-- .element: class="fragment" -->
- Een Chrome-extensie <!-- .element: class="fragment" -->

Note:
Allemaal dingen die niemand voor mij zou bouwen: te klein, te persoonlijk.

---

<!-- .slide: class="screenshot" -->
## 11-jarigen doen het al

<div class="photo-pair">
  <img src="boys-vibe-coding.jpg" alt="Jongens vibe coden een spel bij AFAS">
  <img src="girls-vibe-coding.jpg" alt="Meiden vibe coden een spel bij AFAS">
</div>

Note:
Kinderen bouwden bij AFAS zelf een spel, zonder programmeerkennis.
Als zij het kunnen, kunt u het ook.

---

<!-- .slide: class="screenshot" -->
## Het resultaat

![Koekiemonster in de Snoepwereld, gebouwd door kinderen](cookie-game.png)

Note:
Een platformspel met koekjes, lollies en knoppen.

---

<!-- .slide: class="screenshot" -->
![Zes renders van een keuken en eetkamer, ontworpen met AI](screenshot-interieur-ontwerp.webp)

---

## Wat is vibe coding?

> "…fully give in to the vibes, embrace exponentials, and forget that the code even exists."

<p class="small">Andrej Karpathy, februari 2025</p>

<p class="fragment">Jij beschrijft <strong>wat</strong> je wilt. AI schrijft de code.</p>

---

## Wat is code?

Een map met tekstbestanden

<p class="todo">Inhoud volgt</p>

---

## Wat kan wel, wat (beter) niet?

<div class="two-col">
<div>

### <span class="ok">Goed</span>

- Persoonlijke tools
- Prototypes
- Scripts en automatisering
- Data omzetten en analyseren

</div>
<div>

### <span class="warn">Oppassen</span>

- Systemen voor andere gebruikers
- Gevoelige gegevens
- Alles wat nooit mag falen

</div>
</div>

---

## Valkuilen

- **Privacy**: geen cliëntgegevens naar AI in de cloud zonder afspraken <!-- .element: class="fragment" -->
- **Geheimhouding**: weet waar je data heen gaat <!-- .element: class="fragment" -->
- **Security**: wachtwoorden en API-sleutels nooit in de code <!-- .element: class="fragment" -->
- **Scrapen**: check voorwaarden en AVG <!-- .element: class="fragment" -->
- **Vertrouwen**: AI klinkt altijd zeker, ook als het fout zit <!-- .element: class="fragment" -->

---

<!-- .slide: class="divider" -->
<p class="level">10:15 · Samen bouwen</p>

## Mail Chat

---

## Wat gaan we bouwen?

<h1 class="demo">DEMO</h1>

Note:
Referentie: D:\github\fl-demo-walkthrough\mail-chat
Demo-account demo@johangorter.com met 15 fictieve mails. Inloggen via de 1Password-link (met 2FA).

---

## Chrome-extensie

- Bestaande websites (Gmail, outlook.com) uitbreiden
- Kan ook met jouw login andere websites raadplegen (dossier, rechtspraak)
- Koppelen aan lokale AI via LM Studio

---

## Wie doet wat?

<div class="overzicht">
  <div class="node mens fragment">Jij<small>beschrijft wat je wilt</small></div>
  <div class="pijl p1 fragment">↓ praat met</div>
  <div class="node claude fragment">Claude Code<small>schrijft code, kan fouten maken</small></div>
  <div class="pijl p2 fragment">↓ schrijft</div>
  <div class="node map fragment">Code<small>mappen met tekstbestanden</small></div>
  <div class="pijl p3 fragment">↑ voert uit</div>
  <div class="node gmail fragment">Gmail</div>
  <div class="pijl p4 fragment">⇄ leest mail</div>
  <div class="node computer fragment">Computer<small>snel, foutloos, voorspelbaar</small></div>
  <div class="pijl p5 fragment">⇄ vraagt AI</div>
  <div class="node lokaal fragment">Lokale AI<small>LM Studio</small></div>
  <div class="node db optioneel fragment">Database<small>optioneel</small></div>
</div>

<p class="fragment">Claude Code <strong>bouwt</strong> de tool · de lokale AI <strong>leest</strong> de mail</p>

Note:
Code = een map met tekstbestanden. Leesbaar voor mens, AI en computer.
Computer: voert code uit, snel, foutloos, altijd hetzelfde.
Claude Code: leest en schrijft code en voert taken uit, maar kan fouten maken. Draait in de cloud (VS).
Lokale AI: dommer dan Claude, maar de mail verlaat je laptop niet.
Een database hebben we vandaag niet nodig.

---

<!-- .slide: class="grote-prompt" -->

## Aan de slag

1. **Claude desktop-app** → Code → nieuwe map `mail-chat`
2. Geef deze eerste prompt:

<div class="example-box prompt">

Maak een chrome extensie die een chat paneel toont als ik in gmail een e-mail open heb. De chat begint met een bericht van AI "Ik zal de mail voor je samenvatten". De gebruiker kan onderin een nieuw chat bericht toevoegen. De aansluiting doen we in een volgende stap.

</div>

Note:
Deze slide blijft staan terwijl iedereen aan de slag gaat.
LM Studio en het model komen later, via de USB-stick (na de AGENTS.md-uitleg).
Inloggen op het demo-account (1Password-link) staat nu niet meer op een slide.

---

## Hoe communiceert AI?

- Als menselijke software ontwikkelaar?
- Vriendelijk?
- Behulpzaam?
- Technisch?

Note:
Interactie: vraag de zaal wat ze zien in de antwoorden van Claude.

---

## AGENTS.md

<p class="small">voorheen CLAUDE.md</p>

<div class="example-box prompt">

maak een AGENTS.md bestand voor dit project. Schrijf erin dat ik advocaat ben en zelf geen code kan lezen.

</div>

---

## Nieuwe chat = Nieuwe ontwikkelaar

<p class="subtitle">Wanneer begin je een nieuwe chat?</p>

- Je begint aan een **nieuwe taak** of een ander onderwerp
- Een stap is **af en werkt**
- Claude **draait rondjes**: dezelfde fout, of vergeet wat je zei
- Het geheugen (context) is **15–40%** vol: best practice

<p class="small">Een nieuwe chat begint leeg, maar leest AGENTS.md altijd opnieuw.<br>Wat Claude moet onthouden: laat het in AGENTS.md zetten.</p>

---

## De USB-sticks

Start een **nieuwe, losse chat** met deze prompt:

<div class="example-box prompt">

installeer LM-studio en het model van de usb stick

</div>

Geef de USB-stick door wanneer je klaar bent

Note:
LM Studio-server: Developer-tab → Start Server (localhost:1234).
LM Studio laat zien welke variant van Gemma 4 op jouw laptop past.
Lukt het lokale model niet? Fallback: Claude Sonnet in de cloud, mag hier omdat het demo-data is.

---

## Skill hypes

<svg class="hypes" viewBox="0 0 1140 380" role="img" aria-label="Hype-curves van juni 2025 tot juni 2026">
  <defs>
    <linearGradient id="hype-fill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#64b5f6" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#64b5f6" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g class="curves">
    <path d="M95,330 C120,330 125,200 140,200 C165,200 185,328 290,330 Z"/>
    <path d="M171,330 C196,330 201,90 216,90 C241,90 261,328 366,330 Z"/>
    <path d="M399,330 C424,330 429,140 444,140 C469,140 489,328 594,330 Z"/>
    <path d="M627,330 C652,330 657,60 672,60 C697,60 717,328 822,330 Z"/>
    <path d="M855,330 C880,330 885,150 900,150 C925,150 945,328 1050,330 Z"/>
    <path d="M969,330 C994,330 999,110 1014,110 C1039,110 1059,300 1130,322 L1130,330 Z"/>
  </g>
  <g class="labels">
    <text x="140" y="168">Context</text><text x="140" y="188">engineering</text>
    <text x="216" y="74">Beast Mode</text>
    <text x="444" y="124">Superpowers</text>
    <text x="672" y="44">OpenClaw</text>
    <text x="900" y="134">Caveman</text>
    <text x="1014" y="94">Grill-me</text>
  </g>
  <line class="as" x1="80" y1="330" x2="1120" y2="330"/>
  <g class="maanden">
    <text x="140" y="360">jun 2025</text>
    <text x="444" y="360">okt 2025</text>
    <text x="672" y="360">jan 2026</text>
    <text x="900" y="360">apr 2026</text>
  </g>
</svg>

Note:
Vraag: herkent u iets? Wie heeft van een van deze gehoord?
Daarna naar beneden voor de details.

--

## Skill hypes

<p class="subtitle">de hypes die vibe-coders voorbij zagen komen</p>

<div class="tijdlijn">
  <div class="punt fragment"><span class="datum">jun 2025</span><strong>Context engineering</strong><span>Niet de formulering, maar wat je in de context stopt</span></div>
  <div class="punt fragment"><span class="datum">jul 2025</span><strong>Beast Mode</strong><span>Copilot-chatmode die autonoom doorwerkt tot de taak af is</span></div>
  <div class="punt fragment"><span class="datum">okt 2025</span><strong>Superpowers</strong><span>Keten van skills: brainstorm → spec → plan → TDD</span></div>
  <div class="punt fragment"><span class="datum">jan 2026</span><strong>OpenClaw</strong><span>Open-source persoonlijke agent met skill-marktplaats</span></div>
  <div class="punt fragment"><span class="datum">apr 2026</span><strong>Caveman</strong><span>Antwoorden in telegramstijl, tot 75% minder output-tokens</span></div>
  <div class="punt fragment"><span class="datum">mei–jun 2026</span><strong>Grill-me</strong><span>De agent ondervraagt je, één vraag per keer</span></div>
</div>

<p class="small">Elke hype volgt hetzelfde patroon: viraal via X en YouTube, binnen weken tienduizenden GitHub-sterren, daarna deels ingebouwd in de tools zelf.</p>

Note:
1. Juni 2025 – Context engineering: opvolger van "prompt engineering": het gaat om wat je in de context stopt, niet om de formulering. Aangejaagd door Tobi Lütke en Andrej Karpathy.
2. Juli 2025 – Beast Mode: custom chat mode van Burke Holland voor GitHub Copilot in VS Code, die GPT-4.1 autonoom laat doorwerken tot de taak af is.
3. Oktober 2025 – Superpowers: plugin van Jesse Vincent (obra) voor Claude Code: een keten van skills van brainstorm via spec en plan naar TDD.
4. Januari 2026 – OpenClaw: open-source persoonlijke agent (begonnen als Clawdbot, eind 2025), viraal in januari, met eigen skill-marktplaats ClawHub.
5. April 2026 – Caveman: skill van Julius Brussee: antwoorden in telegramstijl, met een geclaimde besparing tot 75% op output-tokens.
6. Mei–juni 2026 – Grill-me: skill van Matt Pocock (bestond al sinds februari 2026): de agent ondervraagt je, één vraag per keer, tot je plan volledig is uitgewerkt.

---

<!-- .slide: class="grote-prompt" -->

## Laat je interviewen

<div class="example-box prompt">

/grill-me ik wil de ai aansluiten op lokale lm studio. Ook wil ik knoppen om AI te laten zoeken in e-mail historie en een knop om een mail te anonimiseren naar donald duck personages.

</div>

- AI stelt de vragen, jij neemt de beslissingen <!-- .element: class="fragment" -->
- Skill: aihero.dev/skills-grill-me <!-- .element: class="fragment" -->

---

<!-- .slide: class="divider" -->
<p class="level">11:15</p>

## Claude ogen en handen geven

--

<div class="overzicht focus">
  <div class="node mens">Jij</div>
  <div class="pijl p1">↓ praat met</div>
  <div class="node claude aan">Claude Code</div>
  <div class="pijl p2">↓ schrijft</div>
  <div class="node map">Code</div>
  <div class="pijl p3">↑ voert uit</div>
  <div class="node gmail aan">Gmail<small>demo-account</small></div>
  <div class="pijl p4 aan">⇄ leest mail</div>
  <div class="node computer aan">Computer</div>
  <div class="pijl p5">⇄ vraagt AI</div>
  <div class="node lokaal">Lokale AI</div>
  <div class="node db optioneel">Database</div>
</div>

--

<!-- .slide: class="grote-prompt" -->

## Claude opent zelf de browser

<div class="example-box prompt">

Installeer chrome-devtools-mcp met extensietools en test hiermee de extensie zelf.

</div>

<div class="inlog">

<img class="qr" src="qr-demo-account.png" alt="QR-code naar de inloggegevens van het demo-account">

<div>

**Inloggegevens demo-account**<br>
<a href="https://share.1password.com/s#4sNeSZkw-dMqmp49XYCdi1DPH6aavxBdIYpGkP59314">share.1password.com/s#4sNeSZkw-<br>dMqmp49XYCdi1DPH6aavxBdIYpGkP59314</a>

</div>

</div>

Note:
Claude in Chrome werkt hier niet: daarin kan de extensie niet geladen worden.


---

<!-- .slide: class="divider" -->
<p class="level">11:45 · Uit de praktijk</p>

## Joyce Boonstra

<p class="subtitle">Vibe code-projecten uit de praktijk</p>

Note:
Voor de lunch: voorbeelden uit de praktijk, als inspiratie voor wat je zelf kunt bouwen.

---

<!-- .slide: class="divider" -->
<p class="level">12:45 · Breakout</p>

## Automatisch testen

--

## Werkende functies mogen niet kapot gaan

### Hoe?

Professionele software-ontwikkelaars gebruiken hier **geautomatiseerde tests** voor

<p class="small">(Weer meer software dus)</p>

--

<!-- .slide: class="grote-prompt" -->

## De prompt

<div class="example-box prompt">

Schrijf geautomatiseerde tests die bestaande functionaliteit bewaken. Zorg dat ze zo snel mogelijk uitgevoerd worden.

</div>

Note:
Iedereen geeft dezelfde prompt. Daarna vergelijken: wie kreeg een nep-Gmail, wie een nep-LM Studio, en waarom?

--

## Geef AI een feedbackloop

<div class="flow">
  <div class="box">AI wijzigt code</div><span class="arrow">→</span>
  <div class="box">Tests draaien</div><span class="arrow">→</span>
  <div class="box">AI ziet wat stuk is</div><span class="arrow">→</span>
  <div class="box">AI herstelt</div>
</div>

- Zonder feedback gokt AI <!-- .element: class="fragment" -->
- Tests bewaken wat al werkte <!-- .element: class="fragment" -->

--

## Resultaat

- Dummy Gmail
- Dummy LM Studio
- Test-code toegevoegd
- AI snapt dat hij na ingrijpende wijzigingen hiermee kan controleren of alles nog werkt
- Professionals gebruiken tests om te voorkomen dat iemand uit het team iets stukmaakt

---

## Daarna: jouw eigen project

- Na de lunch kies je: **Mail Chat** afmaken of **je eigen project** <!-- .element: class="fragment" -->
- Begin weer met het interview <!-- .element: class="fragment" -->
- Een legal & factual matrix, een analyse van rechtspraak, slim zoeken in je eigen documenten, een eigen CRM… <!-- .element: class="fragment" -->

---

<!-- .slide: class="divider" -->
<p class="level">Extra</p>

## Code onderhoudbaar houden

--

<div class="overzicht focus">
  <div class="node mens">Jij</div>
  <div class="pijl p1">↓ praat met</div>
  <div class="node claude">Claude Code</div>
  <div class="pijl p2 aan">↓ schrijft</div>
  <div class="node map aan">Code<small>opgeruimd</small></div>
  <div class="pijl p3">↑ voert uit</div>
  <div class="node gmail">Gmail</div>
  <div class="pijl p4">⇄ leest mail</div>
  <div class="node computer">Computer</div>
  <div class="pijl p5">⇄ vraagt AI</div>
  <div class="node lokaal">Lokale AI</div>
  <div class="node db optioneel">Database</div>
</div>

--

## Code wordt vanzelf rommelig

- AI bouwt steeds iets bij, maar ruimt niet uit zichzelf op <!-- .element: class="fragment" -->
- Vergelijk: een contract met tien addenda. Klopt nog wel, maar niemand kan het meer lezen <!-- .element: class="fragment" -->
- Opruimen = een geconsolideerde versie maken: dezelfde werking, beter leesbaar <!-- .element: class="fragment" -->

<p class="fragment small">Programmeurs noemen dit refactoren</p>

Note:
Rommelige code is niet alleen lelijk: AI moet dan meer lezen, ziet verbanden over het hoofd en maakt vaker iets stuk.

--

## Wanneer opruimen?

- Een bestand heeft **meer dan 500 regels** <!-- .element: class="fragment" -->
- Een kleine wijziging maakt iets anders stuk <!-- .element: class="fragment" -->
- AI heeft meerdere pogingen nodig voor iets simpels <!-- .element: class="fragment" -->

Note:
500 regels is een vuistregel, geen wet. Het punt is dat je een grens afspreekt die AI zelf kan controleren.

--

<!-- .slide: class="grote-prompt" -->

## AI meldt wanneer opruimen nodig is

<div class="example-box prompt">

Voeg aan CLAUDE.md toe: als een bestand meer dan 500 regels heeft, meld dat en stel voor om op te ruimen. Draai de tests voor en na het opruimen.

</div>

- Niet wachten? Typ `/simplify` <!-- .element: class="fragment" -->

Note:
CLAUDE.md leest Claude bij elk gesprek, dus de afspraak blijft gelden. /simplify is ingebouwd in Claude Code en ruimt de laatste wijzigingen op.

---

<!-- .slide: class="divider" -->
<p class="level">Extra</p>

## Wat is een webserver?

--

<div class="overzicht focus">
  <div class="node mens">Jij</div>
  <div class="pijl p1">↓ praat met</div>
  <div class="node claude">Claude Code</div>
  <div class="pijl p2">↓ schrijft</div>
  <div class="node map">Code</div>
  <div class="pijl p3">↑ voert uit</div>
  <div class="node gmail aan">Gmail<small>webserver</small></div>
  <div class="pijl p4 aan">⇄ leest mail</div>
  <div class="node computer aan">Computer<small>browser</small></div>
  <div class="pijl p5 aan">⇄ vraagt AI</div>
  <div class="node lokaal aan">Lokale AI<small>webserver</small></div>
  <div class="node db optioneel">Database</div>
</div>

--

## Browser ↔ webserver

<div class="flow">
  <div class="box">Browser</div><span class="arrow">⇄</span>
  <div class="box">Webserver</div>
</div>

- De browser vraagt, de server antwoordt <!-- .element: class="fragment" -->
- `localhost` = een server op je eigen laptop <!-- .element: class="fragment" -->
- Alleen jij kunt erbij, veilig om te proberen <!-- .element: class="fragment" -->

--

## Je laptop draait er nu al drie

| Adres | Wat |
|---|---|
| `localhost:1234` | LM Studio: het lokale AI-model |
| `localhost:3001` | De nep-Gmail |
| `localhost:3000` | Deze presentatie |

<p class="fragment small">Het getal na de dubbele punt is de poort: één deur per server</p>

---

<!-- .slide: class="divider" -->
<p class="level">Extra</p>

## Versiebeheer en backups

--

<div class="overzicht focus">
  <div class="node mens">Jij</div>
  <div class="pijl p1">↓ praat met</div>
  <div class="node claude">Claude Code</div>
  <div class="pijl p2 aan">↓ schrijft</div>
  <div class="node map aan">Code<small>met geschiedenis</small></div>
  <div class="pijl p3">↑ voert uit</div>
  <div class="node gmail">Gmail</div>
  <div class="pijl p4">⇄ leest mail</div>
  <div class="node computer">Computer</div>
  <div class="pijl p5">⇄ vraagt AI</div>
  <div class="node lokaal">Lokale AI</div>
  <div class="node db optioneel">Database</div>
</div>

--

<!-- .slide: class="grote-prompt" -->

## Je project staat alleen op je laptop

<div class="example-box prompt">

Hoeveel bestanden staan er in mijn projectmap?

</div>

Note:
Laat iedereen dit vragen. Het zijn er waarschijnlijk duizenden, terwijl ze zelf maar een handvol hebben laten schrijven.

--

## Niet elk bestand is geschreven

- **Geschreven**: door AI, op jouw verzoek <!-- .element: class="fragment" -->
- **Gedownload**: bouwstenen van anderen, vaak duizenden bestanden <!-- .element: class="fragment" -->
- **Gecompileerd**: automatisch gemaakt uit de geschreven bestanden <!-- .element: class="fragment" -->

<p class="fragment">Zo'n map rechtstreeks in OneDrive of Google Drive? Niet aan te raden: het synchroniseren van al die kleine bestanden gaat traag en loopt vast</p>

Note:
Alleen de geschreven bestanden zijn echt van jou. De rest kan AI altijd opnieuw downloaden of maken.

--

<!-- .slide: class="grote-prompt" -->

## Laat AI de backup maken

<div class="example-box prompt">

Voeg aan CLAUDE.md toe: als ik "backup" zeg, zet dan een zip van de projectmap in mijn OneDrive, zonder de gedownloade en gecompileerde bestanden.

</div>

- Daarna typ je gewoon: **backup** <!-- .element: class="fragment" -->

--

## Git met GitHub

- Code is een map met tekstbestanden <!-- .element: class="fragment" -->
- Git houdt de geschiedenis van die map bij <!-- .element: class="fragment" -->
- **Commit**: een versie opslaan, met een korte beschrijving <!-- .element: class="fragment" -->
- **Push**: je versies naar GitHub sturen, de backup in de cloud <!-- .element: class="fragment" -->
- **Pull request**: een wijzigingsvoorstel dat je eerst bekijkt en dan overneemt, net als een redline <!-- .element: class="fragment" -->

<p class="fragment small">Laat AI de commits en pushes voor je doen</p>

--

## Wat als je laptop kwijt is?

| Strategie | Impact |
|---|---|
| Niets | Alles weg |
| Backup naar OneDrive | Terug tot de laatste backup |
| Git + GitHub | Alles terug, elke versie |

---

<!-- .slide: class="divider" -->
<p class="level">Extra</p>

## Uitrollen

Note:
Onder voorbehoud. Uitleg op basis van een webapp, niet de extensie.

--

## VPS of cloud?

| | VPS | Cloudprovider |
|---|---|---|
| Voorbeeld | Hetzner, TransIP | Vercel, Azure, AWS |
| Kosten | Vast en laag | Per gebruik |
| Beheer | Zelf | Grotendeels geregeld |
| Data | Europa mogelijk | Vaak VS |

<p class="fragment">Soevereiniteit: onder welk recht valt jouw data?</p>

Note:
Amerikaanse providers vallen onder de CLOUD Act, ook met datacenter in Europa.

---

## Laten zien!

Wat heb jij gebouwd?

---

<h2 class="final-question">Vragen?</h2>

---

## Bronnen

<div class="small">

- Hinton, 2016: youtube.com/watch?v=2HMPRXstSvQ
- Works in Progress, "AI isn't replacing radiologists" (sep 2025)
- Jeroen Teunisse, "De non-coder en de augmented engineer — Deel 1" (mei 2026)
- Fortune, "A decade after the 'Godfather of AI' said radiologists were obsolete…" (mei 2026)
- Mr. Online, "Intelligentie als grondstof" (aug 2026)

</div>
