'use strict';

const person = {
    name: 'Alex',
    phone: '+79854444444',
    parents: {
        mother: 'Pepega',
        father: 'Peepo'
    }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mother = 'Xffer';
console.log(clone);
console.log(person); // nothing changes here since its not a reference

