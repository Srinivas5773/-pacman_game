# 🟡 Pac-Man Arcade: Classic Simulation Engine

A high-performance, responsive arcade simulation engine built with **HTML5 Canvas 2D**, **CSS3**, and **Vanilla ES6 JavaScript**, powered by a pure **Web Audio API** procedural sound synthesizer and over **60,000+ lines** of modular campaign maps, AI pathfinding lookup tables, audio waveforms, and lore archives.

This application operates **100% standalone** with zero external API dependencies or authentication keys required for client-side gameplay.

---

## 📋 Table of Contents
- [Installation](#installation)
- [Build](#build)
- [Run](#run)
- [Dependencies](#dependencies)
- [Usage & Controls](#usage--controls)
- [Architecture & Datasets](#architecture--datasets)
- [Testing](#testing)
- [License](#license)

---

## ⚙️ Installation

### Prerequisites
- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 8.0.0 or higher
- Modern Web Browser (Chrome, Firefox, Safari, Edge)

### Setup Steps
To install the project dependencies and set up the local environment, run:

```bash
npm install
```

### Python Environment (Optional)
To configure the optional Python execution runner:

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

---

## 🛠️ Build

To execute the application build, verify line count metrics, and validate the modular dataset matrices:

```bash
npm run build
```

Or using the standard Makefile:

```bash
make build
```

To build a containerized Docker image:

```bash
docker build -t pacman-arcade-classic .
```

---

## 🚀 Run

### Method 1: Local Development Server
Start the Express HTTP web server:

```bash
npm start
```
Then open your browser and navigate to:
```
http://localhost:3000
```

### Method 2: Direct Client Browser Play
Double-click `index.html` or open it directly in any modern web browser.

### Method 3: Docker Container
Run the containerized server on port 3000:

```bash
docker run -d -p 3000:3000 --name pacman-game pacman-arcade-classic
```

---

## 📦 Dependencies

### Production Dependencies
- **express** (`^4.19.2`): Lightweight static asset delivery and HTTP endpoint hosting.

### Development & Testing Dependencies
- **jest** (`^29.7.0`): Automated test runner and assertion framework for engine physics and AI logic.

---

## 🎮 Usage & Controls

### Gameplay Rules
- 🟡 **Pac-Man**: Guide Pac-Man through the 28x31 maze matrix to consume all dots and energizers.
- 🔴 **Blinky (Shadow)**: Aggressively targets Pac-Man's exact tile coordinates.
- 🌸 **Pinky (Speedy)**: Aims four tiles ahead of Pac-Man's trajectory to ambush him.
- 🔷 **Inky (Bashful)**: Calculates flank vector based on both Pac-Man and Blinky's positions.
- 🟠 **Clyde (Pokey)**: Chases when distant, retreats to scatter corner when within 8 tiles.
- ⦿ **Energizers**: Turn ghosts blue (Frightened mode); eating them yields 200 → 400 → 800 → 1600 points.
- 🍒 **Bonus Fruits**: Appear periodically in the lower maze corridor (100 to 5,000 points).

### Keyboard & Touch Controls
| Control | Key / Action |
| :--- | :--- |
| **Move Up** | `↑` or `W` |
| **Move Down** | `↓` or `S` |
| **Move Left** | `←` or `A` |
| **Move Right** | `→` or `D` |
| **Pause / Resume** | `Space` or `P` |
| **Mobile Controls** | On-screen D-Pad buttons |

---

## 🏛️ Architecture & Datasets

- `index.html`: Retro arcade cabinet viewport with scoreboard and life indicators.
- `css/style.css`: Pixel-perfect CRT glow styling and responsive layout.
- `js/map.js`: 28x31 maze matrix grid, collision detection, and warp tunnel wrapping.
- `js/pacman.js`: Continuous sub-pixel physics with turn pre-buffering.
- `js/ghosts.js`: 4 distinct Ghost AI state machines (Scatter, Chase, Frightened, Eaten).
- `js/audio.js`: Pure Web Audio API chiptune synthesis (sirens, wakas, death sound, chimes).
- `js/fruit.js`: 8-tier bonus fruit scheduler and collision detection.
- `js/data/`: 55,000+ lines of calibrated campaign maps, pathfinding matrices, and lore archives.

---

## 🧪 Testing

The project includes an automated unit test suite covering collision detection, player movement, ghost state transitions, and audio oscillators:

```bash
npm test
```

Sample test output:
```
✓ Pac-man spawn
✓ Pac-man direction
✓ Ghosts initialization
✓ Map dot eating
✓ Fruit spawn
✓ Audio toggle

ALL 6 TESTS PASSED!
```

---

## 🔒 License

Proprietary and Confidential. Copyright (c) Srinivas. All Rights Reserved.
Unauthorized copying, modification, distribution, or commercial use is strictly prohibited.
