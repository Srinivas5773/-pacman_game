(function(root) {
  const DIR = (typeof CONSTANTS !== 'undefined') ? CONSTANTS.DIR : {
    NONE: { x: 0, y: 0, name: 'NONE', angle: 0 },
    UP: { x: 0, y: -1, name: 'UP', angle: 1.5 * Math.PI },
    LEFT: { x: -1, y: 0, name: 'LEFT', angle: Math.PI },
    DOWN: { x: 0, y: 1, name: 'DOWN', angle: 0.5 * Math.PI },
    RIGHT: { x: 1, y: 0, name: 'RIGHT', angle: 0 }
  };
  const GHOST_MODE = { SCATTER: 'SCATTER', CHASE: 'CHASE', FRIGHTENED: 'FRIGHTENED', EATEN: 'EATEN', IN_HOUSE: 'IN_HOUSE' };

  class Ghost {
    constructor(name, color, scatterTile, homeTile, releaseDotCount, tileSize = 16) {
      this.name = name;
      this.color = color;
      this.scatterTile = scatterTile;
      this.homeTile = homeTile;
      this.releaseDotCount = releaseDotCount;
      this.tileSize = tileSize;
      this.radius = 7.5;
      this.houseExitTile = { col: 13.5, row: 11 };
      this.reset();
    }
    reset() {
      this.x = this.homeTile.col * this.tileSize;
      this.y = (this.homeTile.row + 0.5) * this.tileSize;
      this.dir = DIR.UP;
      this.mode = (this.name === 'Blinky') ? GHOST_MODE.SCATTER : GHOST_MODE.IN_HOUSE;
      this.targetTile = { col: this.scatterTile.col, row: this.scatterTile.row };
      this.speed = 1.45;
      this.frightenedTimer = 0;
      this.animationTimer = 0;
      this.houseBounceDir = 1;
      this.released = (this.name === 'Blinky');
    }
    setFrightened(duration = 360) {
      if (this.mode === GHOST_MODE.EATEN) return;
      this.mode = GHOST_MODE.FRIGHTENED;
      this.frightenedTimer = duration;
      this.dir = this.getOppositeDir(this.dir);
    }
    setEaten() { this.mode = GHOST_MODE.EATEN; this.frightenedTimer = 0; }
    getOppositeDir(dir) {
      if (dir === DIR.UP) return DIR.DOWN;
      if (dir === DIR.DOWN) return DIR.UP;
      if (dir === DIR.LEFT) return DIR.RIGHT;
      if (dir === DIR.RIGHT) return DIR.LEFT;
      return DIR.NONE;
    }
    calculateTarget(pacman, blinky, map) {
      if (this.mode === GHOST_MODE.EATEN) {
        this.targetTile = { col: 13.5, row: 11 };
        return;
      }
      if (this.mode === GHOST_MODE.SCATTER) {
        this.targetTile = { col: this.scatterTile.col, row: this.scatterTile.row };
        return;
      }
      if (this.mode === GHOST_MODE.FRIGHTENED) return;

      const pacCol = Math.floor(pacman.x / this.tileSize);
      const pacRow = Math.floor(pacman.y / this.tileSize);

      if (this.name === 'Blinky') {
        this.targetTile = { col: pacCol, row: pacRow };
      } else if (this.name === 'Pinky') {
        this.targetTile = { col: pacCol + pacman.dir.x * 4, row: pacRow + pacman.dir.y * 4 };
      } else if (this.name === 'Inky') {
        const pivX = pacCol + pacman.dir.x * 2;
        const pivY = pacRow + pacman.dir.y * 2;
        const blkX = Math.floor(blinky.x / this.tileSize);
        const blkY = Math.floor(blinky.y / this.tileSize);
        this.targetTile = { col: pivX + (pivX - blkX), row: pivY + (pivY - blkY) };
      } else if (this.name === 'Clyde') {
        const myCol = Math.floor(this.x / this.tileSize);
        const myRow = Math.floor(this.y / this.tileSize);
        if ((myCol - pacCol) ** 2 + (myRow - pacRow) ** 2 > 64) {
          this.targetTile = { col: pacCol, row: pacRow };
        } else {
          this.targetTile = { col: this.scatterTile.col, row: this.scatterTile.row };
        }
      }
    }
    update(map, pacman, blinky, dotsEaten, globalMode, speedMult = 1.0) {
      this.animationTimer++;
      if (this.mode === GHOST_MODE.IN_HOUSE) {
        if (!this.released && (dotsEaten >= this.releaseDotCount || this.animationTimer > 300)) {
          this.released = true;
        }
        if (this.released) {
          const exitX = this.houseExitTile.col * this.tileSize;
          const exitY = (this.houseExitTile.row + 0.5) * this.tileSize;
          if (Math.abs(this.x - exitX) > 1) {
            this.x += Math.sign(exitX - this.x) * 1.0;
          } else if (this.y > exitY) {
            this.y -= 1.0;
          } else {
            this.mode = globalMode;
            this.dir = DIR.LEFT;
          }
        } else {
          this.y += this.houseBounceDir * 0.5;
          const homeY = (this.homeTile.row + 0.5) * this.tileSize;
          if (this.y > homeY + 4) this.houseBounceDir = -1;
          if (this.y < homeY - 4) this.houseBounceDir = 1;
        }
        return;
      }
      if (this.mode === GHOST_MODE.FRIGHTENED) {
        this.frightenedTimer--;
        if (this.frightenedTimer <= 0) this.mode = globalMode;
      }
      if (this.mode === GHOST_MODE.EATEN) {
        const exitX = this.houseExitTile.col * this.tileSize;
        const exitY = (this.houseExitTile.row + 0.5) * this.tileSize;
        if (Math.hypot(this.x - exitX, this.y - exitY) < 6) {
          this.mode = GHOST_MODE.IN_HOUSE;
          this.released = true;
          return;
        }
      }
      this.calculateTarget(pacman, blinky, map);
      let curSpeed = this.speed * speedMult;
      if (this.mode === GHOST_MODE.FRIGHTENED) curSpeed *= 0.6;
      else if (this.mode === GHOST_MODE.EATEN) curSpeed *= 2.3;

      const ts = this.tileSize;
      const curCol = Math.floor(this.x / ts);
      const curRow = Math.floor(this.y / ts);
      const centerX = (curCol + 0.5) * ts;
      const centerY = (curRow + 0.5) * ts;

      if (Math.abs(this.x - centerX) <= curSpeed / 2 + 0.5 && Math.abs(this.y - centerY) <= curSpeed / 2 + 0.5) {
        this.x = centerX;
        this.y = centerY;
        const dirs = [DIR.UP, DIR.LEFT, DIR.DOWN, DIR.RIGHT];
        const opp = this.getOppositeDir(this.dir);
        const valid = [];
        for (let d of dirs) {
          if (d === opp) continue;
          if (map.isPassableForGhost(curCol + d.x, curRow + d.y, this.mode === GHOST_MODE.EATEN)) {
            valid.push(d);
          }
        }
        if (valid.length > 0) {
          if (this.mode === GHOST_MODE.FRIGHTENED) {
            this.dir = valid[Math.floor(Math.random() * valid.length)];
          } else {
            let best = valid[0], bestDist = Infinity;
            for (let d of valid) {
              const tx = (curCol + d.x) - this.targetTile.col;
              const ty = (curRow + d.y) - this.targetTile.row;
              const dist = tx * tx + ty * ty;
              if (dist < bestDist) { bestDist = dist; best = d; }
            }
            this.dir = best;
          }
        }
      }
      this.x += this.dir.x * curSpeed;
      this.y += this.dir.y * curSpeed;

      const totalWidth = map.cols * ts;
      if (this.x < -ts / 2) this.x = totalWidth + ts / 2;
      else if (this.x > totalWidth + ts / 2) this.x = -ts / 2;
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      const r = this.radius;
      const isFright = (this.mode === GHOST_MODE.FRIGHTENED);
      const isEaten = (this.mode === GHOST_MODE.EATEN);
      const isFlash = isFright && (this.frightenedTimer < 120) && (Math.floor(this.frightenedTimer / 10) % 2 === 0);

      let color = isFright ? (isFlash ? '#ffffff' : '#2121ff') : this.color;
      if (!isEaten) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(0, -2, r, Math.PI, 0, false);
        ctx.lineTo(r, r - 2);
        const wave = Math.sin(this.animationTimer * 0.25) * 1.5;
        ctx.lineTo(r * 0.5, r - 4 + wave);
        ctx.lineTo(0, r - 2);
        ctx.lineTo(-r * 0.5, r - 4 - wave);
        ctx.lineTo(-r, r - 2);
        ctx.closePath();
        ctx.fill();
      }

      if (isFright && !isEaten) {
        ctx.fillStyle = isFlash ? '#ff0000' : '#ffb8de';
        ctx.fillRect(-4, -3, 2.5, 2.5);
        ctx.fillRect(2, -3, 2.5, 2.5);
      } else {
        const eyeX = this.dir.x * 2;
        const eyeY = this.dir.y * 2;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-3.5 + eyeX * 0.5, -2 + eyeY * 0.5, 3, 0, Math.PI * 2);
        ctx.arc(3.5 + eyeX * 0.5, -2 + eyeY * 0.5, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isEaten ? '#00e5ff' : '#2121ff';
        ctx.beginPath();
        ctx.arc(-3.5 + eyeX, -2 + eyeY, 1.5, 0, Math.PI * 2);
        ctx.arc(3.5 + eyeX, -2 + eyeY, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  class GhostCoordinator {
    constructor(tileSize = 16) {
      this.tileSize = tileSize;
      this.blinky = new Ghost('Blinky', '#ff0000', { col: 25, row: -3 }, { col: 13.5, row: 11 }, 0, tileSize);
      this.pinky  = new Ghost('Pinky',  '#ffb8de', { col: 2,  row: -3 }, { col: 13.5, row: 14 }, 0, tileSize);
      this.inky   = new Ghost('Inky',   '#00ffff', { col: 27, row: 31 }, { col: 11.5, row: 14 }, 30, tileSize);
      this.clyde  = new Ghost('Clyde',  '#ffb847', { col: 0,  row: 31 }, { col: 15.5, row: 14 }, 60, tileSize);
      this.ghosts = [this.blinky, this.pinky, this.inky, this.clyde];
      this.globalMode = GHOST_MODE.SCATTER;
      this.modeTimer = 0;
      this.eatenCount = 0;
    }
    reset() {
      this.globalMode = GHOST_MODE.SCATTER;
      this.modeTimer = 0;
      this.eatenCount = 0;
      for (let g of this.ghosts) g.reset();
    }
    triggerEnergizer(duration = 360) {
      this.eatenCount = 0;
      for (let g of this.ghosts) g.setFrightened(duration);
    }
    update(map, pacman, dotsEaten, speedMult = 1.0) {
      this.modeTimer++;
      if (this.globalMode === GHOST_MODE.SCATTER && this.modeTimer > 420) {
        this.globalMode = GHOST_MODE.CHASE;
        this.modeTimer = 0;
        for (let g of this.ghosts) if (g.mode === GHOST_MODE.SCATTER) g.mode = GHOST_MODE.CHASE;
      } else if (this.globalMode === GHOST_MODE.CHASE && this.modeTimer > 1200) {
        this.globalMode = GHOST_MODE.SCATTER;
        this.modeTimer = 0;
        for (let g of this.ghosts) if (g.mode === GHOST_MODE.CHASE) g.mode = GHOST_MODE.SCATTER;
      }
      for (let g of this.ghosts) g.update(map, pacman, this.blinky, dotsEaten, this.globalMode, speedMult);
    }
    checkCollisions(pacman) {
      const collisions = [];
      const hitR = pacman.radius + 4;
      for (let g of this.ghosts) {
        if (Math.hypot(pacman.x - g.x, pacman.y - g.y) < hitR) {
          if (g.mode === GHOST_MODE.FRIGHTENED) {
            this.eatenCount++;
            const points = 200 * Math.pow(2, this.eatenCount - 1);
            g.setEaten();
            collisions.push({ type: 'GHOST_EATEN', ghost: g, points });
          } else if (g.mode === GHOST_MODE.CHASE || g.mode === GHOST_MODE.SCATTER) {
            collisions.push({ type: 'PACMAN_KILLED', ghost: g });
          }
        }
      }
      return collisions;
    }
    draw(ctx) {
      for (let g of this.ghosts) g.draw(ctx);
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { Ghost, GhostCoordinator, GHOST_MODE };
  else { root.Ghost = Ghost; root.GhostCoordinator = GhostCoordinator; root.GHOST_MODE = GHOST_MODE; }
})(typeof window !== 'undefined' ? window : global);
