// Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin 
// embargo, solo debe mostrar los números pares. 

let container = document.getElementById("container");

const limit = 50;
for (let x = 1; x <= limit ; x++) { 
    if ( x % 2 === 0 ) {
        container.innerHTML += `<strong>${x}</strong> <br></br>`;
    }
}