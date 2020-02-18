const { sleep } = require('./');

test('1 + 2', async () => {
  await sleep(300);
  expect(1 + 2).toEqual(3);
});

describe('faa', () => {
  test('boor', async () => {
    await sleep(300);
    expect(true).toBeTruthy();
  })
});

describe('foo', () => {
  describe('bar', () => {
    test('baz', async () => {
      await sleep(300);
      expect(true).toBeTruthy();
    })
  });
});

