(() => {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const closeBtn = document.getElementById('lightbox-close');
  if (!box || !img || !title || !closeBtn) return;

  const close = () => {
    box.classList.remove('open');
    img.removeAttribute('src');
  };

  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-lightbox');
      const caption = btn.getAttribute('data-title') || 'Preview';
      if (!src) return;
      img.setAttribute('src', src);
      title.textContent = caption;
      box.classList.add('open');
    });
  });

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', (e) => {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
})();
