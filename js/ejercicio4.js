let a = prompt("Ingresa el valor de a:");
let b = prompt("Ingresa el valor de b:");

/*
A la antigua : 
let temp = null 
temp = a
a = b 
b = tepm
*/

[a, b] = [b, a];

document.write(`<p>Después del intercambio:</p>`);
document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
