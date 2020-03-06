const radius = document.querySelector('#radius');
const height = document.querySelector('#height');
const result = document.querySelector('#result');
const button = document.querySelector('#btn');

button.addEventListener("click",math);

function math() {
    let x = Math.PI * radius.value * radius.value * height.value;
    result.textContent='Result: '+x;
}
