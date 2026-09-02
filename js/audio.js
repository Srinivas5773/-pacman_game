(function(root) {
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.masterGain = null;
      this.sirenOsc = null;
      this.sirenGain = null;
      this.wakaState = 0;
      this.lastWakaTime = 0;
      this.isSirenPlaying = false;
    }
    init() {
      if (this.ctx) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
          this.masterGain.connect(this.ctx.destination);
        }
      } catch (e) {}
    }
    resume() {
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    }
    toggleMute() {
      this.enabled = !this.enabled;
      if (!this.enabled) this.stopSiren();
      return this.enabled;
    }
    setMute(isMuted) {
      this.enabled = !isMuted;
      if (!this.enabled) this.stopSiren();
    }
    playChomp() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      if (now - this.lastWakaTime < 0.12) return;
      this.lastWakaTime = now;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      const f1 = this.wakaState === 0 ? 260 : 520;
      const f2 = this.wakaState === 0 ? 520 : 260;
      this.wakaState = 1 - this.wakaState;
      osc.frequency.setValueAtTime(f1, now);
      osc.frequency.exponentialRampToValueAtTime(f2, now + 0.08);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.11);
      osc.connect(gain); gain.connect(this.masterGain);
      osc.start(now); osc.stop(now + 0.12);
    }
    playEnergizer() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain); gain.connect(this.masterGain);
      osc.start(now); osc.stop(now + 0.2);
    }
    playEatGhost() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.3);
      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain); gain.connect(this.masterGain);
      osc.start(now); osc.stop(now + 0.35);
    }
    playEatFruit() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      [523, 659, 784, 1046].forEach((f, i) => {
        const now = this.ctx.currentTime + i * 0.06;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain); gain.connect(this.masterGain);
        osc.start(now); osc.stop(now + 0.11);
      });
    }
    playExtraLife() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      [659, 784, 1318, 1046, 1175, 1568].forEach((f, i) => {
        const now = this.ctx.currentTime + i * 0.08;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain); gain.connect(this.masterGain);
        osc.start(now); osc.stop(now + 0.13);
      });
    }
    playDeath() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      this.stopSiren();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.linearRampToValueAtTime(60, now + 1.2);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.3);
      osc.connect(gain); gain.connect(this.masterGain);
      osc.start(now); osc.stop(now + 1.3);
    }
    playGameStart() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      [494, 988, 740, 622, 988, 740, 622].forEach((f, i) => {
        const now = this.ctx.currentTime + i * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain); gain.connect(this.masterGain);
        osc.start(now); osc.stop(now + 0.11);
      });
    }
    playLevelClear() {
      if (!this.enabled) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      [523, 659, 784, 1046].forEach((f, i) => {
        const now = this.ctx.currentTime + i * 0.1;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain); gain.connect(this.masterGain);
        osc.start(now); osc.stop(now + 0.16);
      });
    }
    startSiren(speed = 1) {
      if (!this.enabled || this.isSirenPlaying) return;
      this.init(); this.resume();
      if (!this.ctx) return;
      this.isSirenPlaying = true;
      const now = this.ctx.currentTime;
      this.sirenOsc = this.ctx.createOscillator();
      this.sirenGain = this.ctx.createGain();
      this.sirenOsc.type = 'sine';
      this.sirenOsc.frequency.setValueAtTime(220 * speed, now);
      this.sirenGain.gain.setValueAtTime(0.06, now);
      this.sirenOsc.connect(this.sirenGain);
      this.sirenGain.connect(this.masterGain);
      this.sirenOsc.start(now);
    }
    stopSiren() {
      if (this.sirenOsc) {
        try { this.sirenOsc.stop(); this.sirenOsc.disconnect(); } catch (e) {}
        this.sirenOsc = null;
      }
      this.isSirenPlaying = false;
    }
  }
  const soundEngine = new SoundEngine();
  if (typeof module !== 'undefined' && module.exports) module.exports = soundEngine;
  else root.SoundEngine = soundEngine;
})(typeof window !== 'undefined' ? window : global);
