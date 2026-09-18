결제 기능을 추가할 때 따라야 하는 워크플로우입니다.

추가할 기능: $ARGUMENTS

다음 순서를 반드시 지켜서 진행하세요.

1. `CLAUDE.md`, `@GOLDEN_RULES.md`, `@docs/payment-rules.md`를 먼저 읽는다.
2. `src/payments/`에서만 작업한다. `src/billing/`, `src/old/`는 수정·참조하지 않는다.
3. 금액은 minor unit 정수로 다룬다.
4. 결제 관련 로그는 `logPayment()`로 남긴다.
5. `tests/`에 새 테스트를 추가한다.
6. `npm test`를 실행한다.
7. 실패하면 traceback을 읽고 수정한 뒤 다시 실행한다 — 통과할 때까지 반복한다.
8. 통과하면 변경 사항을 요약해 보고한다.
