// Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa 
// que recorra el array con un bucle e imprima únicamente los números positivos.
let container = document.getElementById("container");

let numbers = [12, -5, 7, -3, 1, 15, 3, -25, 40, -42]; 

for (let x = 0; x < numbers.length; x++) { 
    if (numbers[x] > 0) {
        container.innerHTML +=`<strong>${numbers[x]}</strong> <br></br>`;
    }
}