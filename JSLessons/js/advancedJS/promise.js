'use strict';

const requestHere = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('getting data...');
        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

requestHere.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('An error happened');
}).finally(() => {   
    console.log('Finally stuff here');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('it worked with 1 sec'));