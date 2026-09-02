/**
 * PAC-MAN ARCADE: CYBER-MAZE EDITION
 * User Interface & HUD Coordinator
 * Manages Score display, High Score updates, Life Counters, Modals & Touch Events
 */

(function(root) {
  class UIManager {
    constructor() {
      this.hudScore = null;
      this.hudHighScore = null;
      this.hudLevel = null;
      this.hudDotsLeft = null;
      this.livesContainer = null;
      this.fruitsTray = null;
      this.currentFruitDisplay = null;
      
      // Overlays
      this.overlayReady = null;
      this.overlayPaused = null;
      this.overlayGameOver = null;
      this.overlayVictory = null;
      this.crtOverlay = null;

      // Stats Elements
      this.finalScoreVal = null;
      this.finalDotsVal = null;
      this.finalGhostsVal = null;
    }

    init() {
      this.hudScore = document.getElementById('hudScore');
      this.hudHighScore = document.getElementById('hudHighScore');
      this.hudLevel = document.getElementById('hudLevel');
      this.hudDotsLeft = document.getElementById('hudDotsLeft');
      this.livesContainer = document.getElementById('livesContainer');
      this.fruitsTray = document.getElementById('fruitsTray');
      this.currentFruitDisplay = document.getElementById('currentFruitDisplay');

      this.overlayReady = document.getElementById('overlayReady');
      this.overlayPaused = document.getElementById('overlayPaused');
      this.overlayGameOver = document.getElementById('overlayGameOver');
      this.overlayVictory = document.getElementById('overlayVictory');
      this.crtOverlay = document.getElementById('crtOverlay');

      this.finalScoreVal = document.getElementById('finalScoreVal');
      this.finalDotsVal = document.getElementById('finalDotsVal');
      this.finalGhostsVal = document.getElementById('finalGhostsVal');

      this.setupDialogListeners();
      this.loadLoreContent();
    }

    updateScore(score, highScore) {
      if (this.hudScore) {
        this.hudScore.textContent = score > 0 ? score.toString().padStart(2, '0') : '00';
      }
      if (this.hudHighScore) {
        this.hudHighScore.textContent = highScore.toString();
      }
    }

    updateStage(level, dotsLeft) {
      if (this.hudLevel) {
        this.hudLevel.textContent = `ROUND ${level}`;
      }
      if (this.hudDotsLeft) {
        this.hudDotsLeft.textContent = dotsLeft.toString();
      }
    }

    updateLives(livesCount) {
      if (!this.livesContainer) return;
      this.livesContainer.innerHTML = '';
      for (let i = 0; i < Math.max(0, livesCount); i++) {
        const icon = document.createElement('div');
        icon.className = 'life-icon';
        this.livesContainer.appendChild(icon);
      }
    }

    updateFruitDisplay(fruit) {
      if (this.currentFruitDisplay && fruit) {
        this.currentFruitDisplay.textContent = fruit.symbol;
      }
    }

    showReadyOverlay(show = true) {
      if (this.overlayReady) {
        this.overlayReady.classList.toggle('hidden', !show);
      }
    }

    showPauseOverlay(show = true) {
      if (this.overlayPaused) {
        this.overlayPaused.classList.toggle('hidden', !show);
      }
    }

    showGameOverOverlay(show = true, stats = {}) {
      if (this.overlayGameOver) {
        if (show) {
          if (this.finalScoreVal) this.finalScoreVal.textContent = stats.score || 0;
          if (this.finalDotsVal) this.finalDotsVal.textContent = stats.dots || 0;
          if (this.finalGhostsVal) this.finalGhostsVal.textContent = stats.ghosts || 0;
        }
        this.overlayGameOver.classList.toggle('hidden', !show);
      }
    }

    showVictoryOverlay(show = true) {
      if (this.overlayVictory) {
        this.overlayVictory.classList.toggle('hidden', !show);
      }
    }

    toggleCRT(enabled) {
      if (this.crtOverlay) {
        this.crtOverlay.style.display = enabled ? 'block' : 'none';
      }
    }

    setupDialogListeners() {
      // Close buttons
      document.querySelectorAll('.btn-close-dialog').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetId = btn.getAttribute('data-target');
          if (targetId) {
            const dialog = document.getElementById(targetId);
            if (dialog) dialog.classList.add('hidden');
          }
        });
      });

      // Header button triggers
      const btnLore = document.getElementById('btnLore');
      if (btnLore) {
        btnLore.addEventListener('click', () => {
          const m = document.getElementById('modalLore');
          if (m) m.classList.remove('hidden');
        });
      }

      const btnHelp = document.getElementById('btnHelp');
      if (btnHelp) {
        btnHelp.addEventListener('click', () => {
          const m = document.getElementById('modalHelp');
          if (m) m.classList.remove('hidden');
        });
      }

      const btnMapEditor = document.getElementById('btnMapEditor');
      if (btnMapEditor) {
        btnMapEditor.addEventListener('click', () => {
          const m = document.getElementById('modalMapEditor');
          if (m) {
            m.classList.remove('hidden');
            if (window.mapEditor) {
              const canvas = document.getElementById('editorCanvas');
              window.mapEditor.attach(canvas);
            }
          }
        });
      }

      // Map editor brush tools
      document.querySelectorAll('.editor-toolbar .tool-btn[data-brush]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.editor-toolbar .tool-btn[data-brush]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const brush = btn.getAttribute('data-brush');
          if (window.mapEditor) {
            window.mapEditor.setBrush(brush);
          }
        });
      });

      const btnEditorClear = document.getElementById('btnEditorClear');
      if (btnEditorClear) {
        btnEditorClear.addEventListener('click', () => {
          if (window.mapEditor) window.mapEditor.clear();
        });
      }

      const btnEditorGenerate = document.getElementById('btnEditorGenerate');
      if (btnEditorGenerate) {
        btnEditorGenerate.addEventListener('click', () => {
          if (window.mapEditor) window.mapEditor.applySymmetry();
        });
      }
    }

    loadLoreContent() {
      const container = document.getElementById('loreContentContainer');
      if (!container) return;

      if (window.ArcadeLoreDB && window.ArcadeLoreDB.articles) {
        let html = '';
        window.ArcadeLoreDB.articles.forEach(article => {
          html += `
            <div style="margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
              <h3 style="color: #ffe600; margin-bottom: 4px;">${article.title}</h3>
              <div style="font-size: 0.65rem; color: #00e5ff; margin-bottom: 8px;">Date: ${article.date} // Category: ${article.category}</div>
              <p style="color: #d1d5db; line-height: 1.6;">${article.content}</p>
            </div>
          `;
        });
        container.innerHTML = html;
      } else {
        container.innerHTML = `
          <h3>ARCADE ARCHIVES</h3>
          <p>Pac-Man was first released in 1980 by Toru Iwatani at Namco. It became a global cultural phenomenon, pioneering the maze-action genre with distinct ghost AI routines!</p>
        `;
      }
    }
  }

  const uiManager = new UIManager();

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UIManager, uiManager };
  } else {
    root.UIManager = UIManager;
    root.uiManager = uiManager;
  }
})(typeof window !== 'undefined' ? window : global);
