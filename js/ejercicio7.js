// Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, 
// imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime 
// "FizzBuzz". 

let container = document.getElementById("container");

const limit = 50;
for (let x = 1; x <= limit ; x++) { 
    if ( x % 3 === 0 &&  x % 5 === 0) {
        container.innerHTML += `<strong>${x} FizzBuzz</strong> <br></br>`;
    }
    else if ( x % 3 === 0) {
        container.innerHTML += `<strong>${x} Fizz</strong> <br></br>`;
    }
    else if ( x % 5 === 0) {
        container.innerHTML += `<strong>${x} Buzz</strong> <br></br>`;
    }
    else{
        container.innerHTML += `<strong>${x}</strong> <br></br>`;
    }

}