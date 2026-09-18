const test = require('node:test');
const assert = require('node:assert/strict');
const { refund } = require('../src/payments/refund');

test('정상 환불 시 수수료 5%를 제외한 금액을 반환한다', () => {
  const result = refund({ orderId: 'ORD-1', amountMinor: 10000 });
  assert.equal(result.status, 'REFUNDED');
  assert.equal(result.feeMinor, 500);
  assert.equal(result.refundedAmountMinor, 9500);
});

test('수수료 계산은 반올림 없이 내림(floor) 처리한다', () => {
  const result = refund({ orderId: 'ORD-4', amountMinor: 333 });
  assert.equal(result.feeMinor, 16); // floor(333 * 0.05) = floor(16.65) = 16
  assert.equal(result.refundedAmountMinor, 317);
});

test('환불 금액이 0이면 거부한다', () => {
  assert.throws(
    () => refund({ orderId: 'ORD-2', amountMinor: 0 }),
    /0보다 커야/
  );
});

test('환불 금액이 음수이면 거부한다', () => {
  assert.throws(
    () => refund({ orderId: 'ORD-3', amountMinor: -100 }),
    /음수/
  );
});
