
function vol(x,y) {
const a = document.getElementById(1).value;
const b = document.getElementById(2).value;
   
document.getElementById('result').textContent="Volume is: "+math(a,b);
}

function math(a,b) {
    let x = Math.PI * a * a * b;
    return x;
}
