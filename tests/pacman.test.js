const { Pacman, DIR } = require('../js/pacman');
describe('Pacman', () => {
  test('initial properties', () => {
    const p = new Pacman(16);
    expect(p.isAlive).toBe(true);
    expect(p.dir).toBe(DIR.LEFT);
  });
});
