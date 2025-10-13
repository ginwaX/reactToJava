const arr = [1, 2, 3];

console.log(arr[1]);

const obj = {
    Anna: 500,
    Alice: 800
};

obj.Nik = 900;
//console.log(obj[Nik]); error BUT:
console.log(obj['Nik']); // no error because string
console.log(obj.Nik); // this also works tho

// 14: OPERATORS 

console.log('arr' + " - string")
console.log(5 + '5');

let incr = 10,
    dcr = 10;

incr++;
--dcr;

console.log(incr--); // wont change in the print because it changes the value after the command
console.log(++dcr); // will change because its in the prefix form

console.log(2*4 == 8); // true

const widePeepo = true,
    smolPeepo = true;

console.log(widePeepo && smolPeepo);

