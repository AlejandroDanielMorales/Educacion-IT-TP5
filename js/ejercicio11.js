// Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa 
// un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra 
// es palíndroma si se lee igual al derecho y al revés.

let container = document.getElementById("container"); 
let palabrasInput = prompt("Ingresa una lista de palabras separadas por comas:");

let palabras = []; 
let palabraTemporal = ""; 
//Aca separo las palabras
for (let i = 0; i < palabrasInput.length; i++) {
    let caracter = palabrasInput[i];
    if (caracter === ',') {
        palabras.push(palabraTemporal.trim()); 
        palabraTemporal = ""; 
    } else {
        palabraTemporal += caracter; 
    }
}

palabras.push(palabraTemporal.trim());

let palindromos = []; 
//busco  palindromos
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let palabraInvertida = "";
//invierto la palabra y comparo
    for (let j = palabra.length - 1; j >= 0; j--) {
        palabraInvertida += palabra[j];
    }

    if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
        palindromos.push(palabra);
    }
}
//muestro
if (palindromos.length > 0) {
    container.innerHTML = `<strong>Palabras palíndromas encontradas:</strong><br>`;
    for (let i = 0; i < palindromos.length; i++) {
        container.innerHTML += `${palindromos[i]}<br>`;
    }
} else {
    container.innerHTML = `<strong>No se encontraron palabras palíndromas.</strong>`;
}
