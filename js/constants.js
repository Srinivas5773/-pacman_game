(function(root) {
  const CONSTANTS = {
    TILE_SIZE: 16,
    COLS: 28,
    ROWS: 31,
    FPS: 60,
    TILES: { EMPTY: 0, WALL: 1, DOT: 2, ENERGIZER: 3, GHOST_DOOR: 4, GHOST_HOUSE: 5, WARP_TUNNEL: 6 },
    DIR: {
      NONE: { x: 0, y: 0, name: 'NONE', angle: 0 },
      UP: { x: 0, y: -1, name: 'UP', angle: 1.5 * Math.PI },
      LEFT: { x: -1, y: 0, name: 'LEFT', angle: Math.PI },
      DOWN: { x: 0, y: 1, name: 'DOWN', angle: 0.5 * Math.PI },
      RIGHT: { x: 1, y: 0, name: 'RIGHT', angle: 0 }
    },
    GHOST_MODE: { SCATTER: 'SCATTER', CHASE: 'CHASE', FRIGHTENED: 'FRIGHTENED', EATEN: 'EATEN', IN_HOUSE: 'IN_HOUSE' },
    POINTS: { DOT: 10, ENERGIZER: 50, GHOST_BASE: 200, EXTRA_LIFE_THRESHOLD: 10000 },
    FRUITS: [
      { level: 1, name: 'Cherry', symbol: '🍒', points: 100, color: '#ff2a4b' },
      { level: 2, name: 'Strawberry', symbol: '🍓', points: 300, color: '#ff3399' },
      { level: 3, name: 'Peach', symbol: '🍑', points: 500, color: '#ff9100' },
      { level: 5, name: 'Apple', symbol: '🍎', points: 700, color: '#ff2222' },
      { level: 7, name: 'Melon', symbol: '🍈', points: 1000, color: '#00ff88' },
      { level: 9, name: 'Galaxian', symbol: '🚀', points: 2000, color: '#00e5ff' },
      { level: 11, name: 'Bell', symbol: '🔔', points: 3000, color: '#ffe600' },
      { level: 13, name: 'Key', symbol: '🔑', points: 5000, color: '#00e5ff' }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = CONSTANTS;
  else root.CONSTANTS = CONSTANTS;
})(typeof window !== 'undefined' ? window : global);
