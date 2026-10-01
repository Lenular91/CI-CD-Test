const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/index.js');

test('add additionne deux nombres', () => {
  assert.strictEqual(add(2, 3), 5);
});
