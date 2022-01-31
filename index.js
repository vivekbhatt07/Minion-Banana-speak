'use strict';
const btnTranslate = document.querySelector('#btn-translate');
const btnTxt = document.querySelector('#btn-txt');


const clickHandler = function () {
    console.log(btnTxt.value)
}
btnTranslate.addEventListener('click', clickHandler);