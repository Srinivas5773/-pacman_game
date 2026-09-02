(function(root) {
  const STORAGE_KEYS = { HIGH_SCORE: 'pacman_arcade_highscore', STATS: 'pacman_arcade_stats' };
  const Storage = {
    getHighScore() {
      try {
        const val = localStorage.getItem(STORAGE_KEYS.HIGH_SCORE);
        return val ? parseInt(val, 10) : 10000;
      } catch (e) { return 10000; }
    },
    saveHighScore(score) {
      try {
        const current = this.getHighScore();
        if (score > current) {
          localStorage.setItem(STORAGE_KEYS.HIGH_SCORE, score.toString());
          return true;
        }
      } catch (e) {}
      return false;
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Storage;
  else root.Storage = Storage;
})(typeof window !== 'undefined' ? window : global);
