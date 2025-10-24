'use strict';

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a+b;
    }

    console.log(sum());
}
showThis(4,6);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this); //undefined
        }
        shout();
    }
};
obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let brian = new User('Brian', 22);

// self made context
function sayName(surname) {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John'
};

sayName.call(user, ' Smith'); // these do practically the same but the syntaxis is different
sayName.apply(user, [' Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2); // binding the context here

// 1) in a normal function: this = window, but if we use strict - undefined
// 2) in an object: this = the object
// 3) this inside contructors and classes - new part of the class




