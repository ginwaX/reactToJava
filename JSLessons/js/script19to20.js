"use strict";

// LESSON 19: IF AND STUFF

if (4 == 4) {
    console.log('yessir');
} else {
    console.log('oh hell nah chief');
}

const num = 67;

if (num < 60) {
    console.log('nah');
} else if (num > 100) {
    console.log('nope');
} else {
    console.log('six sevennn');
}

(num === 69) ? console.log('yuh') : console.log('nah'); // cinema way to do stuff

switch (num) { // for direct comparison only
    case 69:
        console.log('not the 69');
        break;
    case 67:
        console.log('six sevennn');
        break;
};

// LESSON 20: LOGICAL OPERATORS

//const borger = true;
//const fries = true;

//if (borger && fries) {
//    console.log('full fr');
//};

const borger = 2;
const fries = 1;

if (borger == 3 && fries) {
    console.log('we eatin good');
};

