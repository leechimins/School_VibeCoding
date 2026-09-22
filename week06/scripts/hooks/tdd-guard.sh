#!/usr/bin/env bash
# TDD Guard Hook for PreToolUse
# Blocks editing/writing src/*.js files if corresponding test file does not exist.

# Read JSON from stdin
INPUT=$(cat)

# Extract tool_input.file_path (fallback to grep/sed if jq is not present)
if command -v jq >/dev/null 2>&1; then
  FILE_PATH=$(echo "$INPUT" | jq -r '(.tool_input.file_path // .file_path) // empty' 2>/dev/null)
else
  # Using grep & sed to extract file_path
  FILE_PATH=$(echo "$INPUT" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | head -n 1 | sed -E 's/.*"file_path"[[:space:]]*:[[:space:]]*"([^"]*)".*/\1/')
fi

# (a) 경로가 없거나, 파일명에 test/spec이 들어가거나, 확장자가 .md/.json/.yml이면 통과 (exit 0)
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Normalize path separators (\ to /)
FILE_PATH_NORM=$(echo "$FILE_PATH" | tr '\\' '/')
FILENAME=$(basename "$FILE_PATH_NORM")

# Check if filename or path contains test/spec
case "$FILENAME" in
  *test*|*spec*|*Test*|*Spec*)
    exit 0
    ;;
esac

case "$FILE_PATH_NORM" in
  */tests/*|*/test/*|*/specs/*|*/spec/*)
    exit 0
    ;;
esac

# Check extensions .md/.json/.yml/.yaml
case "$FILENAME" in
  *.md|*.json|*.yml|*.yaml)
    exit 0
    ;;
esac

# (b) src/ 아래 .js 파일이면 같은 이름의 테스트(tests/{이름}.test.js 또는 같은 폴더 {이름}.test.js)가 있는지 확인
if ! [[ "$FILE_PATH_NORM" =~ (^|/)src/.*\.js$ ]]; then
  exit 0
fi

NAME="${FILENAME%.js}"
PROJECT_ROOT="${CLAUDE_PROJECT_DIR:-.}"
FILE_DIR=$(dirname "$FILE_PATH_NORM")

# Candidate test file locations
CANDIDATES=(
  "${PROJECT_ROOT}/tests/${NAME}.test.js"
  "tests/${NAME}.test.js"
  "${FILE_DIR}/${NAME}.test.js"
)

# If file is nested under src/ (e.g. src/utils/foo.js -> tests/utils/foo.test.js)
REL_SRC="${FILE_PATH_NORM#*src/}"
REL_DIR=$(dirname "$REL_SRC")
if [ "$REL_DIR" != "." ]; then
  CANDIDATES+=(
    "${PROJECT_ROOT}/tests/${REL_DIR}/${NAME}.test.js"
    "tests/${REL_DIR}/${NAME}.test.js"
  )
fi

TEST_FOUND=0
for cand in "${CANDIDATES[@]}"; do
  if [ -f "$cand" ]; then
    TEST_FOUND=1
    break
  fi
done

# (d) 테스트 파일이 존재하면 조용히 통과 (exit 0)
if [ "$TEST_FOUND" -eq 1 ]; then
  exit 0
fi

# (c) 테스트 파일이 없으면 stdout으로 다음 JSON을 출력하고 exit 0:
# {"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"TDD GUARD: {이름} 테스트가 없습니다. 테스트를 먼저 작성하세요 (예: tests/{이름}.test.js)"}}
cat <<EOF
{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"TDD GUARD: ${NAME} 테스트가 없습니다. 테스트를 먼저 작성하세요 (예: tests/${NAME}.test.js)"}}
EOF

exit 0
