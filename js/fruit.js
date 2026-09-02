(function(root) {
  class FruitManager {
    constructor() {
      this.currentFruit = null;
      this.active = false;
      this.timer = 0;
      this.lifespan = 600;
      this.spawnTile = { col: 13.5, row: 17 };
      this.fruitsEaten = 0;
      this.x = 13.5 * 16;
      this.y = 17.5 * 16;
    }
    reset() { this.currentFruit = null; this.active = false; this.timer = 0; }
    getFruitForLevel(level) {
      const fruits = [
        { level: 1, name: 'Cherry', symbol: '🍒', points: 100 },
        { level: 2, name: 'Strawberry', symbol: '🍓', points: 300 },
        { level: 3, name: 'Peach', symbol: '🍑', points: 500 },
        { level: 5, name: 'Apple', symbol: '🍎', points: 700 },
        { level: 7, name: 'Melon', symbol: '🍈', points: 1000 },
        { level: 9, name: 'Galaxian', symbol: '🚀', points: 2000 },
        { level: 11, name: 'Bell', symbol: '🔔', points: 3000 },
        { level: 13, name: 'Key', symbol: '🔑', points: 5000 }
      ];
      for (let i = fruits.length - 1; i >= 0; i--) {
        if (level >= fruits[i].level) return fruits[i];
      }
      return fruits[0];
    }
    spawn(level, tileSize = 16) {
      this.currentFruit = this.getFruitForLevel(level);
      this.active = true;
      this.timer = this.lifespan;
      this.x = this.spawnTile.col * tileSize;
      this.y = (this.spawnTile.row + 0.5) * tileSize;
    }
    update() {
      if (!this.active) return;
      this.timer--;
      if (this.timer <= 0) { this.active = false; this.currentFruit = null; }
    }
    checkCollision(pacmanX, pacmanY, radius = 10) {
      if (!this.active || !this.currentFruit) return null;
      const dx = pacmanX - this.x;
      const dy = pacmanY - this.y;
      if (Math.hypot(dx, dy) < radius + 8) {
        const eaten = this.currentFruit;
        this.active = false;
        this.currentFruit = null;
        this.fruitsEaten++;
        return eaten;
      }
      return null;
    }
    draw(ctx) {
      if (!this.active || !this.currentFruit) return;
      ctx.save();
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.currentFruit.symbol, this.x, this.y);
      ctx.restore();
    }
  }
  const fruitManager = new FruitManager();
  if (typeof module !== 'undefined' && module.exports) module.exports = { FruitManager, fruitManager };
  else { root.FruitManager = FruitManager; root.fruitManager = fruitManager; }
})(typeof window !== 'undefined' ? window : global);
