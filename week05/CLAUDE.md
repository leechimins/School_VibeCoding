# CLAUDE.md

이 저장소에서 작업할 때 반드시 지켜야 할 규칙입니다.

절대 위반 금지 규칙은 @GOLDEN_RULES.md 참조.

## 결제 코드 위치

- 활성 결제 코드는 `src/payments/` 뿐입니다.
- `src/billing/`, `src/old/`는 **폐기 예정(DEPRECATED)** 코드입니다. 절대 수정하거나 참조하지 마세요.

## 금액 단위

- 금액은 항상 **전(minor unit)** 정수로 다룹니다. 원 단위 소수나 float을 사용하지 마세요.

## 로깅

- 결제 관련 로그는 `lib/logger.js`의 `logPayment()`만 사용합니다. `console.log`나 다른 로깅 방식을 쓰지 마세요.

## 테스트

- 코드 변경 후에는 반드시 `npm test`를 실행해 통과를 확인합니다.

## 상세 규칙

환불 수수료 계산·검증·에러 처리 등 자세한 결제 규칙은 @docs/payment-rules.md 참조.
