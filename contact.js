const modal = document.getElementById('contact__modal');
const btn = document.getElementById('menu__item--modal');
const x = document.getElementById('contact__close');

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = 'flex'
}

// When the user clicks on close button, close the modal
x.onclick = function() {
    modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
}

// When the user press Esc
window.addEventListener ('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none'
    }
  })