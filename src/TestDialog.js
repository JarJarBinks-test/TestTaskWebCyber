
function showDialog(dialogHtmlContent) {
  const dialog = document.querySelector('.test-dialog-item');
  dialog.innerHTML = dialogHtmlContent;
  dialog.classList.add('show');
}

function hideDialog() {
  const dialog = document.querySelector('.test-dialog-item');
  dialog.classList.remove('show');
}

function onTryFreeClick() {
  showDialog('<span>123</span>')
}

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.demo-version button');
    button.addEventListener('click', onTryFreeClick)
  });
})()