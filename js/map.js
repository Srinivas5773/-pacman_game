(function(root) {
  const DEFAULT_MAZE_MATRIX = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,3,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,3,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,0,1,1,0,1,1,1,1,1,2,1,1,1,1,1,1],
    [0,0,0,0,0,1,2,1,1,1,1,1,0,1,1,0,1,1,1,1,1,2,1,0,0,0,0,0],
    [0,0,0,0,0,1,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0],
    [0,0,0,0,0,1,2,1,1,0,1,1,1,4,4,1,1,1,0,1,1,2,1,0,0,0,0,0],
    [1,1,1,1,1,1,2,1,1,0,1,5,5,5,5,5,5,1,0,1,1,2,1,1,1,1,1,1],
    [6,0,0,0,0,0,2,0,0,0,1,5,5,5,5,5,5,1,0,0,0,2,0,0,0,0,0,6],
    [1,1,1,1,1,1,2,1,1,0,1,5,5,5,5,5,5,1,0,1,1,2,1,1,1,1,1,1],
    [0,0,0,0,0,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,0,0,0,0,0],
    [0,0,0,0,0,1,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0],
    [0,0,0,0,0,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,0,0,0,0,0],
    [1,1,1,1,1,1,2,1,1,0,1,1,1,1,1,1,1,1,0,1,1,2,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,3,2,2,1,1,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,1,1,2,2,3,1],
    [1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1],
    [1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];

  class GameMap {
    constructor(tileSize = 16) {
      this.tileSize = tileSize;
      this.rows = 31;
      this.cols = 28;
      this.grid = [];
      this.initialGrid = [];
      this.totalDots = 0;
      this.dotsRemaining = 0;
      this.energizerFlashes = 0;
      this.wallColor = '#2121ff';
      this.loadMatrix(DEFAULT_MAZE_MATRIX);
    }
    loadMatrix(matrix) {
      this.rows = matrix.length;
      this.cols = matrix[0].length;
      this.grid = [];
      this.initialGrid = [];
      this.totalDots = 0;
      for (let r = 0; r < this.rows; r++) {
        this.grid[r] = [];
        this.initialGrid[r] = [];
        for (let c = 0; c < this.cols; c++) {
          const val = matrix[r][c];
          this.grid[r][c] = val;
          this.initialGrid[r][c] = val;
          if (val === 2 || val === 3) this.totalDots++;
        }
      }
      this.dotsRemaining = this.totalDots;
    }
    resetPellets() {
      this.totalDots = 0;
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          const val = this.initialGrid[r][c];
          this.grid[r][c] = val;
          if (val === 2 || val === 3) this.totalDots++;
        }
      }
      this.dotsRemaining = this.totalDots;
    }
    isWall(col, row) {
      if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) return false;
      return this.grid[row][col] === 1;
    }
    isPassableForPacman(col, row) {
      if (row < 0 || row >= this.rows) return false;
      if (col < 0 || col >= this.cols) return true;
      const tile = this.grid[row][col];
      return tile !== 1 && tile !== 4 && tile !== 5;
    }
    isPassableForGhost(col, row, canPassGate = false) {
      if (row < 0 || row >= this.rows) return false;
      if (col < 0 || col >= this.cols) return true;
      const tile = this.grid[row][col];
      if (tile === 1) return false;
      if (tile === 4) return canPassGate;
      return true;
    }
    eatPellet(col, row) {
      if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) return null;
      const tile = this.grid[row][col];
      if (tile === 2) {
        this.grid[row][col] = 0;
        this.dotsRemaining--;
        return 'DOT';
      } else if (tile === 3) {
        this.grid[row][col] = 0;
        this.dotsRemaining--;
        return 'ENERGIZER';
      }
      return null;
    }
    update() {
      this.energizerFlashes++;
    }
    draw(ctx) {
      const ts = this.tileSize;
      const showEnergizer = Math.floor(this.energizerFlashes / 12) % 2 === 0;
      ctx.save();
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          const tile = this.grid[r][c];
          const x = c * ts;
          const y = r * ts;
          if (tile === 1) {
            ctx.fillStyle = '#000000';
            ctx.fillRect(x, y, ts, ts);
            ctx.strokeStyle = this.wallColor;
            ctx.lineWidth = 2;
            ctx.strokeRect(x + 1, y + 1, ts - 2, ts - 2);
          } else if (tile === 4) {
            ctx.fillStyle = '#ffb8de';
            ctx.fillRect(x, y + ts / 2 - 2, ts, 4);
          } else if (tile === 2) {
            ctx.fillStyle = '#ffb8ae';
            ctx.beginPath();
            ctx.arc(x + ts / 2, y + ts / 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          } else if (tile === 3 && showEnergizer) {
            ctx.fillStyle = '#ffb8ae';
            ctx.beginPath();
            ctx.arc(x + ts / 2, y + ts / 2, 6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.restore();
    }
  }
  const gameMap = new GameMap();
  if (typeof module !== 'undefined' && module.exports) module.exports = { GameMap, DEFAULT_MAZE_MATRIX, gameMap };
  else { root.GameMap = GameMap; root.DEFAULT_MAZE_MATRIX = DEFAULT_MAZE_MATRIX; root.gameMap = gameMap; }
})(typeof window !== 'undefined' ? window : global);
