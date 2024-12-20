// Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un 
// bucle para encontrar el número más grande. Usa condicionales para comparar los valores 

let numbers = [23, 45, 12, 67, 34, 89, 21];
let max = numbers[0];

for (let x = 1; x < numbers.length; x++) {
    if (numbers[x] > max) {
        max = numbers[x];
    }
}
document.write(`<h2>El numero mayor es ${max} </h2>`);