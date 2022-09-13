"use strict";

const dropDown = document.querySelector('.drop-down-menu');
const headRightEl = document.querySelector('.header-right');

headRightEl.addEventListener('click', ({target}) => {
  if (target.closest('.menu-button')) {
    dropDown.classList.toggle('none');
  }
});

document.querySelector('.menu-close-btn').addEventListener('click', () => {
dropDown.classList.toggle('none');
});
