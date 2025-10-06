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