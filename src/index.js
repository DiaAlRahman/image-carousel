import './style.css';

const slides = document.querySelectorAll('.slide');
const nav_dots = document.querySelectorAll('.nav-dot');

let i = 0;
let curr = slides[i];
curr.classList.toggle('hide');

function next() {
  curr.classList.toggle('hide');
  i = (i + 1) % slides.length;
  curr = slides[i]
  curr.classList.toggle('hide');
}

function prev() {
  curr.classList.toggle('hide');
  i = (i - 1 + slides.length) % slides.length;
  curr = slides[i]
  curr.classList.toggle('hide');
}

function jump(jump_to) {
  curr.classList.toggle('hide');
  i = jump_to;
  curr = slides[i];
  curr.classList.toggle('hide');
}

document.querySelector('button.next').addEventListener('click', next);
document.querySelector('button.prev').addEventListener('click', prev);

nav_dots.forEach((dot, index) => { dot.addEventListener('click', () => jump(index)) });

setTimeout(() => {
  setInterval(next, 5000);
});