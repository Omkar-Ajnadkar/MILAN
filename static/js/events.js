const panels = document.querySelectorAll('.panel');
const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');

function toggleOpen() {
  if (this === panel1) {
    if (panel2.classList.contains('open')) {
      panel2.classList.remove('open');
    }
  };
  if (this === panel2) {
    if (panel1.classList.contains('open')) {
      panel1.classList.remove('open');
    }
  };
  this.classList.toggle('open');
}

function toggleActve(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActve));