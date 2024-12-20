// Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el 
// usuario ingresa 12345, el programa debe devolver 54321. 

let container = document.getElementById("container"); 
let numero = prompt("Ingresa un número entero positivo:");

if (isNaN(numero) || parseInt(numero) < 0) {
    container.innerHTML = "<strong>Por favor, ingresa un número entero positivo válido.</strong>";
} else {

    let arrayNumero = numero.split('');
    let arrayInvertido = []; 
    
    for (let i = arrayNumero.length - 1; i >= 0; i--) {
        arrayInvertido.push(arrayNumero[i]); 
    }

    let numeroInvertido = arrayInvertido.join('');

    container.innerHTML = `<strong>El número invertido es: ${numeroInvertido}</strong>`;
}
