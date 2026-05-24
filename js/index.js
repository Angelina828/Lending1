// ============================================================
//  ПРЕЛОАДЕР
//  window.onload срабатывает, когда страница полностью загружена.
//  После этого добавляем класс hide-preloader — CSS его скрывает.
// ============================================================

window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
}


// ============================================================
//  МОДАЛЬНАЯ ФОРМА
//  openForm()  — показывает модальное окно (добавляет класс show-modal)
//  closeForm() — скрывает модальное окно (убирает класс show-modal)
//  closeFormOnOverlay() — закрывает по клику на тёмную подложку,
//                         но НЕ закрывает при клике внутри окна
// ============================================================

function openForm() {
  let overlay = document.getElementById('modal-overlay');
  overlay.classList.add('show-modal');
}

function closeForm() {
  let overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('show-modal');
}

// Закрытие по клику вне окна формы (на затемнённый фон)
function closeFormOnOverlay(event) {
  if (event.target === document.getElementById('modal-overlay')) {
    closeForm();
  }
}
