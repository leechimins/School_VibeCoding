# 결제 규칙 (환불)

`src/payments/refund.js` 구현 기준.

## 금액 단위

- 모든 금액은 **전(minor unit)** 정수로 표현합니다. (예: 1원 = 100전)
- 소수점이나 float 연산을 사용하지 않습니다.

## 수수료 계산 원칙

- 수수료율: 환불 금액의 **5%**
- 계산식: `feeMinor = floor(amountMinor * 0.05)`
  - 반올림 없이 내림(floor) 처리하여 전 단위 이하 소수가 남지 않도록 합니다.
- 환불 금액: `refundedAmountMinor = amountMinor - feeMinor`

## 검증

환불 요청은 처리 전에 다음을 검증합니다.

- `order` 객체 필수. 없으면 즉시 에러.
- `amountMinor === 0` → 환불 불가 (0보다 커야 함).
- `amountMinor < 0` → 환불 불가 (음수 불가).

## 에러 처리

- 검증 실패 시 `Error`를 throw하고, 처리를 중단합니다.
- 거부(reject)된 요청도 `logPayment()`로 로그를 남깁니다 (`event: refund_rejected`, `status: REJECTED`).
- 정상 처리된 요청은 `logPayment()`로 두 줄의 로그를 남깁니다:
  - `event: refund_fee_charged` — `amount_minor`에 수수료(`feeMinor`), `status: CHARGED`
  - `event: refund_processed` — `amount_minor`에 실환불액(`refundedAmountMinor`), `status: REFUNDED`

## 반환값

성공 시 다음 형태의 객체를 반환합니다.

```js
{
  orderId,
  refundedAmountMinor,
  feeMinor,
  status: 'REFUNDED'
}
```
