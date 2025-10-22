'use strict';

const box = document.querySelector('.box');
// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

console.log(box.getBoundingClientRect().width);

const style = window.getComputedStyle(box); // an object with all the styles on the element (from css)
