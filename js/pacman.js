(function(root) {
  const DIR = (typeof CONSTANTS !== 'undefined') ? CONSTANTS.DIR : {
    NONE: { x: 0, y: 0, name: 'NONE', angle: 0 },
    UP: { x: 0, y: -1, name: 'UP', angle: 1.5 * Math.PI },
    LEFT: { x: -1, y: 0, name: 'LEFT', angle: Math.PI },
    DOWN: { x: 0, y: 1, name: 'DOWN', angle: 0.5 * Math.PI },
    RIGHT: { x: 1, y: 0, name: 'RIGHT', angle: 0 }
  };
  class Pacman {
    constructor(tileSize = 16) {
      this.tileSize = tileSize;
      this.spawnTile = { col: 13.5, row: 23 };
      this.reset();
    }
    reset() {
      this.x = this.spawnTile.col * this.tileSize;
      this.y = (this.spawnTile.row + 0.5) * this.tileSize;
      this.dir = DIR.LEFT;
      this.nextDir = DIR.LEFT;
      this.speed = 1.6;
      this.radius = 7.5;
      this.mouthAngle = 0.25;
      this.mouthSpeed = 0.035;
      this.isDying = false;
      this.deathProgress = 0;
      this.isAlive = true;
      this.stopped = false;
    }
    setDirection(newDir) {
      if (!newDir) return;
      if (newDir.x === -this.dir.x && newDir.y === -this.dir.y && this.dir !== DIR.NONE) {
        this.dir = newDir;
        this.nextDir = newDir;
        return;
      }
      this.nextDir = newDir;
    }
    update(map, speedMultiplier = 1.0) {
      if (this.isDying) {
        this.deathProgress += 0.025;
        if (this.deathProgress >= 1.0) this.isAlive = false;
        return;
      }
      const curSpeed = this.speed * speedMultiplier;
      const ts = this.tileSize;
      const curCol = Math.floor(this.x / ts);
      const curRow = Math.floor(this.y / ts);
      const centerX = (curCol + 0.5) * ts;
      const centerY = (curRow + 0.5) * ts;

      if (this.nextDir !== this.dir) {
        if (map.isPassableForPacman(curCol + this.nextDir.x, curRow + this.nextDir.y)) {
          if (Math.abs(this.x - centerX) <= curSpeed + 1 && Math.abs(this.y - centerY) <= curSpeed + 1) {
            this.x = centerX;
            this.y = centerY;
            this.dir = this.nextDir;
          }
        }
      }

      const canForward = map.isPassableForPacman(curCol + this.dir.x, curRow + this.dir.y);
      if (!canForward) {
        if (this.dir === DIR.RIGHT && this.x >= centerX) { this.x = centerX; this.stopped = true; }
        else if (this.dir === DIR.LEFT && this.x <= centerX) { this.x = centerX; this.stopped = true; }
        else if (this.dir === DIR.DOWN && this.y >= centerY) { this.y = centerY; this.stopped = true; }
        else if (this.dir === DIR.UP && this.y <= centerY) { this.y = centerY; this.stopped = true; }
        else { this.x += this.dir.x * curSpeed; this.y += this.dir.y * curSpeed; this.stopped = false; }
      } else {
        this.x += this.dir.x * curSpeed;
        this.y += this.dir.y * curSpeed;
        this.stopped = false;
      }

      const totalWidth = map.cols * ts;
      if (this.x < -ts / 2) this.x = totalWidth + ts / 2;
      else if (this.x > totalWidth + ts / 2) this.x = -ts / 2;

      if (!this.stopped) {
        this.mouthAngle += this.mouthSpeed;
        if (this.mouthAngle > 0.45 || this.mouthAngle < 0.03) this.mouthSpeed = -this.mouthSpeed;
      }
    }
    startDeathAnimation() {
      this.isDying = true;
      this.deathProgress = 0;
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      if (this.isDying) {
        const start = this.deathProgress * Math.PI;
        const end = (2 - this.deathProgress) * Math.PI;
        ctx.fillStyle = '#ffe600';
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.radius * (1 - this.deathProgress * 0.3)), start, end);
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.restore();
        return;
      }
      ctx.rotate(this.dir.angle);
      ctx.fillStyle = '#ffe600';
      const open = Math.PI * this.mouthAngle;
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, open, Math.PI * 2 - open);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.restore();
    }
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { Pacman, DIR };
  else root.Pacman = Pacman;
})(typeof window !== 'undefined' ? window : global);
