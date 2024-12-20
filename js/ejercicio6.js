// Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente 
// forma, donde el número de filas lo elija el usuario:

let container = document.getElementById("container");

const row = '*****';
let texto = row;

for (let x = 0 ; x <= row.length ; x++) {
    container.innerHTML += `<strong>${texto}</strong> <br></br>`;  
    texto = texto.slice(0, -1);
        
}  