"use strict";

// LESSON 31: CALLBACK FUNCS

function first() {
    // something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}


// they start at the same time but may not end in the same order as they started
first();
second();


function learnJS(lang, callback) {
    console.log('i am learning: ${lang}');
    callback();
}

function done() {
    console.log('i am done with this lesson');
}

learnJS('JS', done);

// LESSON 32: objects and destruct

// const obj = new Object();  usually not used this way

const options = {
    name: 'test',
    width: 100,
    height: 200,
    colors: {
        border: 'black',
        bg: 'red',
    },
};

console.log(options.colors.bg);

delete options.name;

for (let key in options) {
    console.log(key);
}

// LESSON 33: ARRAYS

const arr = [2, 3, 4, 5, 6];

// arr[99] = 100; this will make the length to 100 AND the 'empty elements' will be a list of empty

arr.forEach(function(item, i, arr) { // it takes a callback function
    console.log('${i}: ${item} inside ${arr}');
});

// .map and .filter RETURN a new array which is modified within the methods 

const str = prompt('', '');
const products = str.split('', '');
products.sort();
const str2 = products.join('; '); // returns a STRING


// LESSON 35: referenfces vs linked

let a = 5,
    b= a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10;

console.log(copy);
console.log(a); // SAME OUTPUT because it references the original object, not a copy of it

// to save a copy NOT reference you can do loops and stuff
// if there is an object within an object it STILL saves as a reference of the one inside
// the function below is a SURFACE copy (there are deep ccopies too but later)

function copyObj(mainObj) {
    let objCopy = {};
    for (let item in mainObj) {
        objCopy[item] = mainObj[item];
    }
    return objCopy;
}

// second method

const add = {
    d: 17,
    e: 20
};

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

console.log(Object.assign({}, add));

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[1] = 'aloo';

console.log(newArr);
console.log(oldArr);

// another method

const video = ['youtube', 'twitch', 'twitter'],
    blogs = ['tumblr', 'ao3', 'x'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nummers = [2, 5, 7];
log(...nummers);

// LESSON 36: OOP

let stringe = 'some';
let str_obj = new String(stringe);

console.log(typeof(stringe));  // string
console.log(typeof(str_obj));  // object



