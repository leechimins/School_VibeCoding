# GOLDEN RULES — 절대 위반 금지

1. **Test-First**: 테스트가 없는 기능 코드는 작성하지 않는다.
2. **Safety**: 파괴적이거나 비가역적인 위험 명령어(`rm -rf`, `git push --force` 등)는 실행하지 않는다.
3. **Scope**: 요청 범위를 벗어난 임의의 리팩터링이나 파일 수정을 금지한다.
4. **Validation**: 코드 변경 후에는 반드시 `npm test`를 실행하여 통과를 확인한다.
