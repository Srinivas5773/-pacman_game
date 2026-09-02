const soundEngine = require('../js/audio');
describe('Audio', () => {
  test('mute toggle', () => {
    soundEngine.setMute(false);
    expect(soundEngine.enabled).toBe(true);
  });
});
