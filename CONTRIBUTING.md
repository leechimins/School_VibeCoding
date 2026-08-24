# 🤝 Contribution & Git Commit Guide

## 📌 Commit Message Convention

### 1. 기본 구조

```text
<Type>: <Subject>

예시)
feat: 방명록 실시간 작성 기능 추가
fix: 프로필 모달 닫기 버튼 오작동 수정
docs: README 기술 스택 업데이트
```

---

### 2. Commit Types

| Type | 설명 | 사용 예시 |
| :--- | :--- | :--- |
| **`feat`** | 새로운 기능 추가 | `feat: 자기소개 페이지 hello.html 추가` |
| **`fix`** | 버그 및 오류 수정 | `fix: 모바일 화면에서 카드 레이아웃 깨짐 현상 수정` |
| **`docs`** | 문서 추가 및 수정 | `docs: CONTRIBUTING.md 커밋 컨벤션 추가` |
| **`style`** | 코드 스타일/디자인 변경 (로직 변경 X) | `style: 파스텔 테마 색상 및 여백 조정` |
| **`refactor`** | 코드 리팩토링 (기능 변경 X) | `refactor: 스크립트 모달 로직 함수 분리` |
| **`chore`** | 설정 파일, 빌드, 패키지 관련 잡무 | `chore: 범용 .gitignore 규칙 업데이트` |

---

### 3. 작성 규칙 (Guidelines)

1. **간결한 개조식 문장**: `~추가`, `~수정`, `~삭제` 등의 간결한 명사형/명령조로 작성합니다.
2. **마침표 생략**: 제목(Subject) 끝에는 마침표(`.`)를 붙이지 않습니다.
3. **타입 소문자 유지**: `feat:`, `fix:`, `docs:`와 같이 접두어는 소문자로 작성합니다.

---

## 🌿 Git Branch Convention (권장)

- **`main`**: 상시 배포 및 완제품 브랜치
- **`feat/<기능명>`**: 새로운 기능 개발 (예: `feat/profile-edit`)
- **`fix/<버그명>`**: 오류 수정 (예: `fix/layout-issue`)

---

## 🚀 Pull Request 가이드

1. 브랜치에서 작업을 완료하고 커밋합니다.
2. 원격 저장소에 푸시 후 `main` 브랜치로 Pull Request를 생성합니다.
3. 변경 내용에 대해 명확한 설명과 스크린샷(UI 변경 시)을 첨부합니다.
