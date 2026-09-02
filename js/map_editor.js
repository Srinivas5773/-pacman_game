/**
 * PAC-MAN ARCADE: CYBER-MAZE EDITION
 * Interactive Custom Maze Designer & Editor
 * Allows players to draw custom symmetrical mazes, paint pellets, and play them instantly
 */

(function(root) {
  class MapEditor {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.cols = 28;
      this.rows = 31;
      this.tileSize = 16;
      this.currentBrush = 1; // 1: Wall, 2: Dot, 3: Energizer, 0: Path, 4: Ghost Gate
      this.isMouseDown = false;
      this.grid = [];
      this.initEmptyGrid();
    }

    initEmptyGrid() {
      this.grid = [];
      for (let r = 0; r < this.rows; r++) {
        this.grid[r] = [];
        for (let c = 0; c < this.cols; c++) {
          if (r === 0 || r === this.rows - 1 || c === 0 || c === this.cols - 1) {
            this.grid[r][c] = 1; // Outer wall
          } else {
            this.grid[r][c] = 2; // Default dots
          }
        }
      }
      // Reserved ghost house center
      for (let r = 12; r <= 15; r++) {
        for (let c = 10; c <= 17; c++) {
          if (r === 12 && (c === 13 || c === 14)) {
            this.grid[r][c] = 4; // Gate
          } else if (r === 12 || r === 15 || c === 10 || c === 17) {
            this.grid[r][c] = 1; // Ghost house wall
          } else {
            this.grid[r][c] = 5; // Ghost house interior
          }
        }
      }
    }

    attach(canvasElement) {
      this.canvas = canvasElement;
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.canvas.addEventListener('mousedown', (e) => {
        this.isMouseDown = true;
        this.paintTile(e);
      });

      window.addEventListener('mouseup', () => {
        this.isMouseDown = false;
      });

      this.canvas.addEventListener('mousemove', (e) => {
        if (this.isMouseDown) {
          this.paintTile(e);
        }
      });

      this.render();
    }

    setBrush(brushId) {
      this.currentBrush = parseInt(brushId, 10);
    }

    paintTile(e) {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const mouseX = (e.clientX - rect.left) * scaleX;
      const mouseY = (e.clientY - rect.top) * scaleY;

      const col = Math.floor(mouseX / this.tileSize);
      const row = Math.floor(mouseY / this.tileSize);

      if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
        // Protect ghost house interior
        if (this.grid[row][col] === 5) return;
        this.grid[row][col] = this.currentBrush;
        this.render();
      }
    }

    applySymmetry() {
      // Mirror left half to right half
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < Math.floor(this.cols / 2); c++) {
          const mirrorCol = this.cols - 1 - c;
          this.grid[r][mirrorCol] = this.grid[r][c];
        }
      }
      this.render();
    }

    clear() {
      this.initEmptyGrid();
      this.render();
    }

    getMatrix() {
      return JSON.parse(JSON.stringify(this.grid));
    }

    loadMatrix(matrix) {
      if (matrix && matrix.length === this.rows && matrix[0].length === this.cols) {
        this.grid = JSON.parse(JSON.stringify(matrix));
        this.render();
      }
    }

    render() {
      if (!this.ctx) return;
      const ts = this.tileSize;
      this.ctx.fillStyle = '#050713';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          const tile = this.grid[r][c];
          const x = c * ts;
          const y = r * ts;

          if (tile === 1) {
            this.ctx.fillStyle = '#1e3094';
            this.ctx.fillRect(x + 1, y + 1, ts - 2, ts - 2);
          } else if (tile === 4) {
            this.ctx.fillStyle = '#ff3399';
            this.ctx.fillRect(x, y + ts / 2 - 2, ts, 4);
          } else if (tile === 2) {
            this.ctx.fillStyle = '#ffe6b8';
            this.ctx.beginPath();
            this.ctx.arc(x + ts / 2, y + ts / 2, 2.5, 0, Math.PI * 2);
            this.ctx.fill();
          } else if (tile === 3) {
            this.ctx.fillStyle = '#00ff88';
            this.ctx.beginPath();
            this.ctx.arc(x + ts / 2, y + ts / 2, 5, 0, Math.PI * 2);
            this.ctx.fill();
          } else if (tile === 5) {
            this.ctx.fillStyle = '#121633';
            this.ctx.fillRect(x, y, ts, ts);
          }

          // Grid lines
          this.ctx.strokeStyle = '#0f1430';
          this.ctx.lineWidth = 0.5;
          this.ctx.strokeRect(x, y, ts, ts);
        }
      }
    }
  }

  const mapEditor = new MapEditor();

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MapEditor, mapEditor };
  } else {
    root.MapEditor = MapEditor;
    root.mapEditor = mapEditor;
  }
})(typeof window !== 'undefined' ? window : global);
