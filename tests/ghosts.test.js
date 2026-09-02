const { GhostCoordinator } = require('../js/ghosts');
describe('Ghosts', () => {
  test('initial count', () => {
    const gc = new GhostCoordinator(16);
    expect(gc.ghosts.length).toBe(4);
  });
});
