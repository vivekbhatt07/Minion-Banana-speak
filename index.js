'use strict';
const btnTranslate = document.querySelector('#btn-translate');
const btnTxt = document.querySelector('#btn-txt');
const outBox = document.querySelector('.outputBox');

const urlL = `https://api.funtranslations.com/translate/minion.json`;

function addTextUrl(text) {
    return urlL + '?' + 'text=' + text;

}

function catchError(error) {
    alert(`Something wrong with server ! try again after sometime.`)
}

const clickHandler = function () {
    const inputTxt = btnTxt.value;
    fetch(addTextUrl(inputTxt))
        .then(function (request) {
            return request.json()
        })
        .then(function (data) {
            outBox.innerHTML = data.contents.translated;
        })
        .catch(catchError)
}
btnTranslate.addEventListener('click', clickHandler);