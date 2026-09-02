const { FruitManager } = require('../js/fruit');
describe('Fruit', () => {
  test('spawn fruit', () => {
    const f = new FruitManager();
    f.spawn(1);
    expect(f.active).toBe(true);
  });
});
