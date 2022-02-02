let opCount = 0;
let numCount = 0;

const buttons = Array.from(document.querySelectorAll('#buttons > button'));
const display = document.querySelector('#viewport');

buttons.forEach(btn => btn.addEventListener("click", displayValue));
document.querySelector('#clear').addEventListener("click", clearDisplay);
document.querySelector('#equals').addEventListener("click", evaluate);

function displayValue(e) {
    if (e.target.className === "oper"  && !numCount) return;
    if (e.target.className === "oper") opCount++;
    if (e.target.className === "num") numCount++;
    if (e.target.className === "oper" && opCount >= 1) evaluate();
    display.innerHTML += e.target.innerHTML;
}

function evaluate() {
    const result = eval(display.innerHTML);
    display.innerHTML = result;
}

function clearDisplay() {
    display.innerHTML = '';
    opCount = 0;
    numCount = 0;
}