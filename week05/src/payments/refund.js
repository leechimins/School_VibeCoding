const { logPayment } = require('../../lib/logger');

// 결제 시스템 개편 이후 신규 구현. 금액은 전(minor unit, 1원 = 100전) 단위 정수로 다룸.
function refund(order) {
  if (!order) {
    throw new Error('order is required');
  }

  const amountMinor = order.amountMinor; // 전 단위 정수
  const currency = order.currency || 'KRW';

  if (amountMinor === 0) {
    logPayment({
      event: 'refund_rejected',
      orderId: order.orderId,
      amountMinor: amountMinor,
      currency: currency,
      status: 'REJECTED'
    });
    throw new Error('환불 금액은 0보다 커야 합니다');
  }

  if (amountMinor < 0) {
    logPayment({
      event: 'refund_rejected',
      orderId: order.orderId,
      amountMinor: amountMinor,
      currency: currency,
      status: 'REJECTED'
    });
    throw new Error('환불 금액은 음수가 될 수 없습니다');
  }

  const feeMinor = Math.floor(amountMinor * 0.05); // 환불 수수료 5%, 내림(floor) 처리
  const refundedAmountMinor = amountMinor - feeMinor;

  logPayment({
    event: 'refund_fee_charged',
    orderId: order.orderId,
    amountMinor: feeMinor,
    currency: currency,
    status: 'CHARGED'
  });

  logPayment({
    event: 'refund_processed',
    orderId: order.orderId,
    amountMinor: refundedAmountMinor,
    currency: currency,
    status: 'REFUNDED'
  });

  return {
    orderId: order.orderId,
    refundedAmountMinor: refundedAmountMinor,
    feeMinor: feeMinor,
    status: 'REFUNDED'
  };
}

module.exports = { refund: refund };
