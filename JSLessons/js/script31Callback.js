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