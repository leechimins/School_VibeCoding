# GOLDEN RULES — 절대 위반 금지

1. 활성 결제 코드는 `src/payments/` 뿐이다. `src/billing/`, `src/old/`는 수정·참조 금지.
2. 금액은 항상 전(minor unit) 정수로 다룬다. float/소수 금지.
3. 결제 관련 로그는 `lib/logger.js`의 `logPayment()`만 사용한다.
4. 코드 변경 후에는 반드시 `npm test`를 실행해 통과를 확인한다.
