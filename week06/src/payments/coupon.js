/**
 * 쿠폰 할인을 적용하여 최종 금액을 계산합니다.
 * @param {number} price - 원래 가격
 * @param {number} rate - 할인율 (0 초과 1 이하)
 * @returns {number} 할인 적용 후 가격
 */
function applyCoupon(price, rate) {
  if (typeof rate !== 'number' || rate <= 0 || rate > 1) {
    throw new Error('Rate must be greater than 0 and less than or equal to 1');
  }

  return price * (1 - rate);
}

module.exports = {
  applyCoupon,
};
