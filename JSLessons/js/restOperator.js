const log = function(a,b, ...rest) {
    console.log(a,b,rest); // rest will be an array
};

log('hello', 'me', 'xffing', 'cinema');

function callOrDouble(number, basis) {
    basis = basis || 2;     // this is just a convenient way to check 
    console.log(number*basis);
}

callOrDouble(3);