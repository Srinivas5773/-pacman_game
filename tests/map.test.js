const { GameMap } = require('../js/map');
describe('Map', () => {
  test('initial dimensions', () => {
    const m = new GameMap(16);
    expect(m.rows).toBe(31);
    expect(m.cols).toBe(28);
  });
});
