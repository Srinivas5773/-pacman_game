(function(root) {
  const DIR = (typeof CONSTANTS !== 'undefined') ? CONSTANTS.DIR : {
    NONE: { x: 0, y: 0, name: 'NONE', angle: 0 },
    UP: { x: 0, y: -1, name: 'UP', angle: 1.5 * Math.PI },
    LEFT: { x: -1, y: 0, name: 'LEFT', angle: Math.PI },
    DOWN: { x: 0, y: 1, name: 'DOWN', angle: 0.5 * Math.PI },
    RIGHT: { x: 1, y: 0, name: 'RIGHT', angle: 0 }
  };

  class PacmanGame {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.state = 'READY';
      this.score = 0;
      this.highScore = 10000;
      this.lives = 3;
      this.level = 1;
      this.extraLifeAwarded = false;
      this.dotsEatenThisRound = 0;
      this.deathTimer = 0;
      this.levelClearTimer = 0;
      this.floatingScores = [];
      this.loop = this.loop.bind(this);
    }
    init() {
      this.canvas = document.getElementById('gameCanvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      const MapC = window.GameMap || (typeof require !== 'undefined' && require('./map').GameMap);
      const PacC = window.Pacman || (typeof require !== 'undefined' && require('./pacman').Pacman);
      const GhstC = window.GhostCoordinator || (typeof require !== 'undefined' && require('./ghosts').GhostCoordinator);
      const FrtC = window.FruitManager || (typeof require !== 'undefined' && require('./fruit').FruitManager);
      this.map = new MapC(16);
      this.pacman = new PacC(16);
      this.ghosts = new GhstC(16);
      this.fruit = new FrtC();
      if (window.Storage) this.highScore = window.Storage.getHighScore();
      this.updateHUD();
      this.setupControls();
      requestAnimationFrame(this.loop);
    }
    updateHUD() {
      const s = document.getElementById('scoreDisplay');
      const hs = document.getElementById('highScoreDisplay');
      const lt = document.getElementById('livesTray');
      const sf = document.getElementById('stageFruit');
      if (s) s.textContent = this.score > 0 ? this.score.toString().padStart(2, '0') : '00';
      if (hs) hs.textContent = this.highScore.toString();
      if (lt) {
        lt.innerHTML = '';
        for (let i = 0; i < Math.max(0, this.lives); i++) {
          const ic = document.createElement('span');
          ic.className = 'life-icon';
          lt.appendChild(ic);
        }
      }
      if (sf && this.fruit) {
        const cf = this.fruit.getFruitForLevel(this.level);
        sf.textContent = cf ? cf.symbol : '🍒';
      }
    }
    startPlaying(dir = null) {
      if (this.state === 'READY' || this.state === 'GAME_OVER') {
        if (this.state === 'GAME_OVER') {
          this.score = 0;
          this.lives = 3;
          this.level = 1;
          this.extraLifeAwarded = false;
          this.map.resetPellets();
        }
        this.resetEntities();
        this.state = 'RUNNING';
        if (dir && this.pacman) this.pacman.setDirection(dir);
        if (window.SoundEngine) {
          window.SoundEngine.resume();
          window.SoundEngine.playGameStart();
          window.SoundEngine.startSiren();
        }
        this.updateHUD();
      }
    }
    resetEntities() {
      if (this.pacman) this.pacman.reset();
      if (this.ghosts) this.ghosts.reset();
      if (this.fruit) this.fruit.reset();
      this.floatingScores = [];
    }
    nextLevel() {
      this.level++;
      this.dotsEatenThisRound = 0;
      this.map.resetPellets();
      this.resetEntities();
      this.state = 'READY';
      this.updateHUD();
    }
    togglePause() {
      if (this.state === 'RUNNING') {
        this.state = 'PAUSED';
        if (window.SoundEngine) window.SoundEngine.stopSiren();
      } else if (this.state === 'PAUSED') {
        this.state = 'RUNNING';
        if (window.SoundEngine) window.SoundEngine.startSiren();
      }
    }
    addScore(pts) {
      this.score += pts;
      if (this.score > this.highScore) {
        this.highScore = this.score;
        if (window.Storage) window.Storage.saveHighScore(this.highScore);
      }
      if (!this.extraLifeAwarded && this.score >= 10000) {
        this.extraLifeAwarded = true;
        this.lives++;
        if (window.SoundEngine) window.SoundEngine.playExtraLife();
      }
      this.updateHUD();
    }
    update() {
      for (let i = this.floatingScores.length - 1; i >= 0; i--) {
        const fs = this.floatingScores[i];
        fs.y -= 0.5; fs.life--;
        if (fs.life <= 0) this.floatingScores.splice(i, 1);
      }
      if (this.state === 'RUNNING') {
        this.map.update();
        if (this.fruit) this.fruit.update();
        if (this.fruit && !this.fruit.active && (this.dotsEatenThisRound === 70 || this.dotsEatenThisRound === 170)) {
          this.fruit.spawn(this.level, this.map.tileSize);
        }
        this.pacman.update(this.map, 1.0);
        const col = Math.floor(this.pacman.x / this.map.tileSize);
        const row = Math.floor(this.pacman.y / this.map.tileSize);
        const pellet = this.map.eatPellet(col, row);
        if (pellet === 'DOT') {
          this.addScore(10);
          this.dotsEatenThisRound++;
          if (window.SoundEngine) window.SoundEngine.playChomp();
        } else if (pellet === 'ENERGIZER') {
          this.addScore(50);
          this.dotsEatenThisRound++;
          this.ghosts.triggerEnergizer(360);
          if (window.SoundEngine) window.SoundEngine.playEnergizer();
        }
        if (this.fruit) {
          const ef = this.fruit.checkCollision(this.pacman.x, this.pacman.y);
          if (ef) {
            this.addScore(ef.points);
            this.floatingScores.push({ x: this.pacman.x, y: this.pacman.y, text: ef.points.toString(), color: '#ff3399', life: 50, maxLife: 50 });
            if (window.SoundEngine) window.SoundEngine.playEatFruit();
          }
        }
        if (this.map.dotsRemaining <= 0) {
          this.state = 'LEVEL_CLEARED';
          this.levelClearTimer = 100;
          if (window.SoundEngine) window.SoundEngine.playLevelClear();
          return;
        }
        this.ghosts.update(this.map, this.pacman, this.dotsEatenThisRound, 1.0);
        const collisions = this.ghosts.checkCollisions(this.pacman);
        for (let c of collisions) {
          if (c.type === 'GHOST_EATEN') {
            this.addScore(c.points);
            this.floatingScores.push({ x: c.ghost.x, y: c.ghost.y, text: c.points.toString(), color: '#00e5ff', life: 50, maxLife: 50 });
            if (window.SoundEngine) window.SoundEngine.playEatGhost();
          } else if (c.type === 'PACMAN_KILLED') {
            this.state = 'PACMAN_DYING';
            this.deathTimer = 80;
            if (this.pacman) this.pacman.startDeathAnimation();
            if (window.SoundEngine) window.SoundEngine.playDeath();
            return;
          }
        }
      } else if (this.state === 'PACMAN_DYING') {
        this.pacman.update(this.map);
        this.deathTimer--;
        if (this.deathTimer <= 0) {
          this.lives--;
          this.updateHUD();
          if (this.lives > 0) { this.resetEntities(); this.state = 'READY'; }
          else { this.state = 'GAME_OVER'; }
        }
      } else if (this.state === 'LEVEL_CLEARED') {
        this.levelClearTimer--;
        if (this.levelClearTimer <= 0) this.nextLevel();
      }
    }
    render() {
      if (!this.ctx || !this.canvas) return;
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.map) this.map.draw(this.ctx);
      if (this.fruit) this.fruit.draw(this.ctx);
      if (this.pacman) this.pacman.draw(this.ctx);
      if (this.ghosts && this.state !== 'PACMAN_DYING') this.ghosts.draw(this.ctx);
      for (let fs of this.floatingScores) {
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, fs.life / fs.maxLife);
        this.ctx.fillStyle = fs.color;
        this.ctx.font = '10px "Press Start 2P", monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(fs.text, fs.x, fs.y);
        this.ctx.restore();
      }
      this.ctx.save();
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      const cx = this.canvas.width / 2;
      const cy = 276;
      if (this.state === 'READY') {
        this.ctx.fillStyle = '#ffe600';
        this.ctx.font = '14px "Press Start 2P", monospace';
        this.ctx.fillText('READY!', cx, cy);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = '8px "Press Start 2P", monospace';
        this.ctx.fillText('PRESS ANY KEY TO PLAY', cx, cy + 24);
      } else if (this.state === 'PAUSED') {
        this.ctx.fillStyle = '#00e5ff';
        this.ctx.font = '14px "Press Start 2P", monospace';
        this.ctx.fillText('PAUSED', cx, cy);
      } else if (this.state === 'GAME_OVER') {
        this.ctx.fillStyle = '#ff2222';
        this.ctx.font = '14px "Press Start 2P", monospace';
        this.ctx.fillText('GAME OVER', cx, cy);
        this.ctx.fillStyle = '#ffe600';
        this.ctx.font = '8px "Press Start 2P", monospace';
        this.ctx.fillText('PRESS ANY KEY TO RESTART', cx, cy + 24);
      } else if (this.state === 'LEVEL_CLEARED') {
        this.ctx.fillStyle = '#00ff88';
        this.ctx.font = '12px "Press Start 2P", monospace';
        this.ctx.fillText('STAGE CLEARED!', cx, cy);
      }
      this.ctx.restore();
    }
    loop() {
      this.update();
      this.render();
      requestAnimationFrame(this.loop);
    }
    setupControls() {
      const handleDir = (dir) => {
        if (this.state === 'READY' || this.state === 'GAME_OVER') this.startPlaying(dir);
        else if (this.state === 'RUNNING' && this.pacman) this.pacman.setDirection(dir);
      };
      window.addEventListener('keydown', (e) => {
        if (window.SoundEngine) window.SoundEngine.resume();
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') { e.preventDefault(); handleDir(DIR.UP); }
        else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') { e.preventDefault(); handleDir(DIR.LEFT); }
        else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') { e.preventDefault(); handleDir(DIR.DOWN); }
        else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') { e.preventDefault(); handleDir(DIR.RIGHT); }
        else if (e.key === ' ' || e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          if (this.state === 'READY' || this.state === 'GAME_OVER') this.startPlaying();
          else this.togglePause();
        }
      });
      if (this.canvas) {
        this.canvas.addEventListener('click', () => {
          if (this.state === 'READY' || this.state === 'GAME_OVER') this.startPlaying();
        });
      }
      const btnSound = document.getElementById('btnSound');
      if (btnSound) {
        btnSound.addEventListener('click', () => {
          if (window.SoundEngine) {
            const en = window.SoundEngine.toggleMute();
            btnSound.textContent = en ? '🔊 SOUND ON' : '🔇 SOUND OFF';
          }
        });
      }
      const btnRestart = document.getElementById('btnRestart');
      if (btnRestart) {
        btnRestart.addEventListener('click', () => {
          this.state = 'GAME_OVER';
          this.startPlaying();
        });
      }
      const u = document.getElementById('btnUp');
      const l = document.getElementById('btnLeft');
      const d = document.getElementById('btnDown');
      const r = document.getElementById('btnRight');
      if (u) u.addEventListener('click', () => handleDir(DIR.UP));
      if (l) l.addEventListener('click', () => handleDir(DIR.LEFT));
      if (d) d.addEventListener('click', () => handleDir(DIR.DOWN));
      if (r) r.addEventListener('click', () => handleDir(DIR.RIGHT));
    }
  }
  const game = new PacmanGame();
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => game.init());
    root.PacmanGame = PacmanGame;
    root.game = game;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { PacmanGame, game };
})(typeof window !== 'undefined' ? window : global);
