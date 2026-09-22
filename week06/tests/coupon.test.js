const { test, describe } = require('node:test');
const assert = require('node:assert');
const { applyCoupon } = require('../src/payments/coupon');

describe('applyCoupon', () => {
  test('정상 할인 (10000원, 0.1(10%) -> 9000원)', () => {
    const result = applyCoupon(10000, 0.1);
    assert.strictEqual(result, 9000);
  });

  test('rate가 0 이하이면 에러', () => {
    assert.throws(
      () => applyCoupon(10000, 0),
      /rate/i
    );
    assert.throws(
      () => applyCoupon(10000, -0.1),
      /rate/i
    );
  });

  test('rate가 1 초과(100%)이면 에러', () => {
    assert.throws(
      () => applyCoupon(10000, 1.1),
      /rate/i
    );
  });
});
