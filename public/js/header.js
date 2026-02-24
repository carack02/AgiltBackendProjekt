const hamburgerButton = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-menu');
const backdrop = document.querySelector('.backdrop');
const buttonbar1 = document.querySelector('.bar1');
const buttonbar2 = document.querySelector('.bar2');
const buttonbar3 = document.querySelector('.bar3');
const body = document.querySelector('body');

if (hamburgerButton && navMenu && backdrop) {
  hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
    body.classList.toggle('no-scroll');
    updateHamburgerButton();
  });
  backdrop.addEventListener('click', () => {
    navMenu.classList.remove('active');
    backdrop.classList.remove('active');
    body.classList.remove('no-scroll');
    updateHamburgerButton();
  });
}

function updateHamburgerButton() {
  if (navMenu.classList.contains('active')) {
    buttonbar1.classList.add('rotate1');
    buttonbar2.classList.add('fade');
    buttonbar3.classList.add('rotate2');
  } else {
    buttonbar1.classList.remove('rotate1');
    buttonbar2.classList.remove('fade');
    buttonbar3.classList.remove('rotate2');
  }
}
