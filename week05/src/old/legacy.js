// 2019년경 결제 모듈. 신규 결제 시스템(src/payments)으로 교체된 뒤 삭제 예정이었으나
// 아무도 지우지 않고 방치됨. 현재 어디에서도 import되지 않음.
var DEFAULT_FEE_RATE = 0.02;

function calculateRefund(amount, rate) {
  rate = rate || DEFAULT_FEE_RATE;
  return amount - amount * rate;
}

function legacyRefundHandler(req, res) {
  var amount = req.body.amount;
  var result = calculateRefund(amount);
  console.log('legacy refund: ' + result);
  res.send({ result: result });
}

module.exports = {
  calculateRefund: calculateRefund,
  legacyRefundHandler: legacyRefundHandler
};
