'use strict';

// AJAX

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('change', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');     // (method, url, async (bool), login, password)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) { // if success
            //console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = +inputRub.value / data.current.usd;
        } else {
            inputUsd.value = 'Something went wrong';
        }
    });

    // status (404 like not found etc etc) 2xx is a success 4xx error
    // statusText -- just a description of the status
    // response -- the reply from the server from backend
    // readyState -- current state of the request (0-4)
});