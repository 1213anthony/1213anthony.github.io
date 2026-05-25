# KOAI 올림피아드 포트폴리오

KOAI 올림피아드 참가자용 개인 포트폴리오 웹사이트입니다.

## 섹션 구성

1. **Hero** — 간략한 소개
2. **Courses** — 수강 과목
3. **Skills** — 기술 및 역량
4. **Projects** — 프로젝트
5. **Achievements** — 개인 성취 (타임라인)
6. **Interests & Focus** — 관심사 및 현재 포커스
7. **Contact** — 연락처

## 파일 구조

```
koai-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## GitHub Pages 배포

1. GitHub에 새 레포지토리 생성 (예: `username.github.io`)
2. 파일 푸시
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   git push -u origin main
   ```
3. 레포 → **Settings → Pages** → Source: `main` 브랜치, `/(root)` 선택
4. 몇 분 후 `https://USERNAME.github.io` 접속

## 채워야 할 부분 체크리스트

### Hero
- [ ] 이름
- [ ] 한 줄 태그라인
- [ ] 소속 / 학년
- [ ] 자기소개 문구

### Courses (수강 과목)
- [ ] 카테고리별 과목명 / 수강 학기 수정

### Skills
- [ ] 본인이 사용하는 기술 / 도구로 수정

### Projects
- [ ] 프로젝트 제목, 연도, 분야
- [ ] 설명, 사용 기술, GitHub/Demo 링크

### Achievements
- [ ] 대회 수상, 자격증, 활동 등 시간순으로 작성

### Interests & Focus
- [ ] 현재 집중 중인 것 (큰 카드)
- [ ] 관심 분야들 (작은 카드)

### Contact
- [ ] 이메일
- [ ] GitHub 링크
- [ ] LinkedIn 등

## 색상 커스터마이징

`style.css` 상단의 `:root` 변수만 수정하면 전체 톤이 바뀝니다.

```css
:root {
  --color-bg: #ffffff;         /* 메인 배경 */
  --color-bg-alt: #fafafa;     /* 보조 배경 */
  --color-text: #18181b;       /* 메인 텍스트 */
  --color-text-light: #71717a; /* 보조 텍스트 */
  --color-border: #e4e4e7;     /* 테두리 */
}
```

포인트 컬러를 넣고 싶다면 `--color-accent`를 원하는 색으로 바꾸세요.
