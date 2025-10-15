'use strict';

// changing styles of elements with js
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px;'

btns[1].style.borderRadius = '100px';
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// creating/deleting elements on the page
const div = document.createElement('div');
//const text = document.createTextNode('xffing');
div.classList.add('black');

//wrapper.append(div);
//wrapper.prepend(div);
// hearts[0].before(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

//wrapper.insertBefore(div, hearts[1]);
