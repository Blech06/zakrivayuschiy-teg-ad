document.addEventListener('DOMContentLoaded', () => {
  // Обработчик лайка
  const likeButtons = document.querySelectorAll('.button--like');

  likeButtons.forEach(button => {
    const icon = button.querySelector('.like-icon');
    if (!icon) return;

    button.addEventListener('click', () => {
      icon.classList.toggle('is-liked');
    });
  });

  // Модальное окно "Сохранить на память"
  const saveButtons = document.querySelectorAll('.button--save');
  const modal = document.getElementById('save-modal');
  const closeButton = document.getElementById('close-modal');

  saveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.showModal();
    });
  });

  closeButton.addEventListener('click', () => {
    modal.close();
  });

  // Закрытие по клику на backdrop (необязательно, но удобно)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
});
