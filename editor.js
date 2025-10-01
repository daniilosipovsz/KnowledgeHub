document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Quill
  const quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Начни печатать...'
  });


  // Глобальная переменная для проверки
  window.quill = quill;
});
