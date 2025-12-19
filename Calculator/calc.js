let inputStr = '';
let buttonData = document.querySelectorAll('input[type="button"]');

Array.from(buttonData).forEach((d) => {
    d.addEventListener('click', (e) => {
        let value = e.target.value;
        let display = document.querySelector('.display input');
        if (value === '=') {
            try {
                inputStr =calcuateValue(inputStr);
            } catch (error) {
                inputStr = 'error';

            }
        }
        else if (value === 'AC') {
            inputStr = "";
        }
        else if (value === 'DEL') {
            inputStr = inputStr.toString().slice(0, -1);
        }
        else if (value === '.' && inputStr.toString().split('').pop() === '.') {
            return;
        }
        else {
            inputStr += value;
        }
        display.value = inputStr;
    })
})

function calcuateValue(exp) {
    try {
        if (!/^[0-9+\-*/.()]+$/.test(exp)) {
            return 'Error';
        }
        const result = Function('"use strict"; return (' + exp + ') ')();
        if (!isFinite(result)) {
            return 'error';
        }
        else {
            return result;
        }
    }
    catch (error) {
        return 'error';
    }
}
