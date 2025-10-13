'use strict';

// LESSON 39: dynamic types

// to string
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) concat
console.log(typeof(5 + ''));

// examples why it's useful

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


// to number
// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'3'));

// 3)
console.log(typeof(parseInt('15px', 10)));





