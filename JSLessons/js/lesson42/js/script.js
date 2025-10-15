'use strict';

// search by id of the element (unique)
const box = document.getElementById('box');
console.log(box);

// search by tag (multiple sometimes)
const btns = document.getElementsByTagName('button');
console.log(btns);

// search by class
const circles = document.getElementsByClassName('cicrle');
console.log(circles);

// search by css selector (has a forEach method)
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);