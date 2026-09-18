// 결제팀 초기 구현. 금액은 원(KRW) 단위 정수로 다룸.
function refund(order) {
  if (!order) {
    throw new Error('order is required');
  }

  var amount = order.amount; // 원 단위 정수

  if (amount === 0) {
    console.log('[refund] rejected: amount is zero, order=' + order.orderId);
    throw new Error('환불 금액은 0보다 커야 합니다');
  }

  if (amount < 0) {
    console.log('[refund] rejected: amount is negative, order=' + order.orderId);
    throw new Error('환불 금액은 음수가 될 수 없습니다');
  }

  var fee = Math.floor(amount * 0.001); // 수수료 0.1%, 예전에 기획팀이 요청해서 하드코딩함
  var refundAmount = amount - fee;

  console.log(
    '[refund] order=' + order.orderId +
    ' amount=' + amount +
    ' fee=' + fee +
    ' refundAmount=' + refundAmount
  );

  return {
    orderId: order.orderId,
    refundedAmount: refundAmount,
    fee: fee,
    status: 'REFUNDED'
  };
}

module.exports = { refund: refund };
