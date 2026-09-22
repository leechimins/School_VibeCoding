# 프로젝트 헌법 (Project Constitution)

## 행동 원칙
- **Think Before Coding**: 불확실하면 임의로 추측하지 말고 질문하거나 명확한 가정을 먼저 제시한다.
- **Simplicity First**: 문제 해결에 필요한 최소한의 구현만 진행하며, 불필요한 과설계를 금지한다.
- **Surgical Changes**: 요청받은 범위에 집중하고, 범위 밖의 코드나 기존 주석은 절대 건드리지 않는다.
- **Goal-Driven**: 모든 작업은 검증 방법을 먼저 정의하고 작업 후 `npm test`로 정상 동작을 확인한다.

## 핵심 명령어
- 테스트 실행: `npm test`

## 프로젝트 구조
- `src/`: 핵심 애플리케이션 소스 코드
- `tests/`: 테스트 코드 디렉토리 (`*.test.js`)
- `scripts/hooks/`: 에이전트 자동화 훅 및 보조 스크립트
- `.claude/`: 에이전트 설정(`settings.json`), 스킬 및 커맨드

## 금지 및 주의사항
- 파괴적이거나 비가역적인 명령어(`rm -rf`, `git push --force` 등) 실행 금지
- 요청 범위 외 파일 임의 수정 및 무단 리팩터링 금지
- 절대 위반 금지 규칙은 @GOLDEN_RULES.md 참조

## Gotchas & Why
- **Why Test-First**: 에이전트의 퇴행(Regression) 방지 및 자율 검증 피드백 루프 보장
- **Gotcha (CLI)**: Windows 환경 실행 정책 제한 시 `cmd.exe /c` 또는 node 직접 실행 권장
- **Gotcha (Worktree)**: Git worktree 구조이므로 상위 경로 변경 없이 `week06/` 내부만 격리 수정

