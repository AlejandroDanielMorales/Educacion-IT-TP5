// Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir 
// la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número 
// mayor a 1000, detén el bucle. 

let container = document.getElementById("container");

let selectedNumber = parseInt(prompt('ingrese un numero del 1 al 100'))

let product = 0;
for( let x = 0 ; x <= 10 ; x++ ){
    if(x * selectedNumber >1000){
        break
    }
    container.innerHTML += `<strong>${( x * selectedNumber )}</strong> <br></br>`;
}