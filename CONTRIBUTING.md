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
- **`Week##`**: 주차별 과제 및 실습 브랜치 (예: `Week02`, `Week03`)

---

## 🚀 Pull Request 가이드

1. 주차별 브랜치(`Week##`)에서 작업을 완료하고 커밋합니다.
2. 원격 저장소에 푸시 후 `main` 브랜치로 Pull Request를 생성합니다.
3. 아래의 **PR 템플릿** 양식을 준수하여 명확한 설명과 확인 사항을 작성합니다.

### 📝 Pull Request 템플릿

```markdown
[Week ##] 설명

## 📌 개요
간단 설명

## 🛠️ 주요 변경 사항

### 1. <이모지> 설명 `파일명`
- [] 한 일들

## 🔍 검증 및 확인 사항
- [] 한 일들
```
