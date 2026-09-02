const { Pacman, DIR } = require('../js/pacman');
const { GhostCoordinator, GHOST_MODE } = require('../js/ghosts');
const { GameMap } = require('../js/map');
const { FruitManager } = require('../js/fruit');
const soundEngine = require('../js/audio');

let passed = 0;
function test(desc, fn) {
  try {
    fn();
    passed++;
    console.log(`✓ ${desc}`);
  } catch (e) {
    console.error(`✗ ${desc}:`, e);
    process.exit(1);
  }
}

const map = new GameMap(16);
const pacman = new Pacman(16);
const ghosts = new GhostCoordinator(16);
const fruit = new FruitManager();

test('Pac-man spawn', () => { if (!pacman.isAlive) throw new Error(); });
test('Pac-man direction', () => { pacman.setDirection(DIR.RIGHT); if (pacman.dir !== DIR.RIGHT) throw new Error(); });
test('Ghosts initialization', () => { if (ghosts.ghosts.length !== 4) throw new Error(); });
test('Map dot eating', () => { const p = map.eatPellet(1, 1); if (p !== 'DOT') throw new Error(); });
test('Fruit spawn', () => { fruit.spawn(1); if (!fruit.active) throw new Error(); });
test('Audio toggle', () => { soundEngine.setMute(false); if (!soundEngine.enabled) throw new Error(); });

console.log(`\nALL ${passed} TESTS PASSED!`);
