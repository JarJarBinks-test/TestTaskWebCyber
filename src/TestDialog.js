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
  // TODO: Need rework this. For now we ignore duplicated ids.
  const dialogContent = document.querySelector('.test-dialog-item-content')
  showDialog(dialogContent.outerHTML)
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.demo-version button');
  button.addEventListener('click', onTryFreeClick)
});