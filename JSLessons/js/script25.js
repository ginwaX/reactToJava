"use strict";

// LESSON 25: functions

// FUNC DECLARATION -- exist before the code runs through

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('wassup');

function calc(a, b) {
    return (a+b);
}

calc(4, 2);

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();

// FUNC EXPRESSION -- works only when reaching it

const logger = function() {
    console.log('aloo');
};

logger();

// ARROW FUNCTIONS -- no context function

const calcers = (a, b) => a + b;


// LESSON 26 + 27: about args

const usdCurr = 20;
const discount = 0.9;

function convert (amount, currencyConv) {
    return currencyConv*amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));

// LESSON 28: methods

const str = 'test';
console.log(str.length);




