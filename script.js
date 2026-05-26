// ===========================================
// 모달 시스템
// ===========================================

// 자세히 보기 버튼 → 모달 열기
document.querySelectorAll('.detail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      document.body.classList.add('modal-open');
      // 모달 내부 스크롤 위치 초기화
      modal.scrollTop = 0;
    }
  });
});

// 닫기 버튼 / 오버레이 클릭 → 모달 닫기
document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', () => {
    const modal = el.closest('.modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  });
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal.open');
    if (openModal) {
      openModal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  }
});
