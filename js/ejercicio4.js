// Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas 
// vocales tiene. Usa condicionales para verificar si cada letra es una vocal. 

let palabra = prompt('Escriba una palabra');

let counter = 0;

for (let x = 0; x < palabra.length; x++) {
    switch (palabra[x].toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            counter++;
            break;
    }
}

document.write(`<h2>La palabra tiene ${counter} vocales</h2>`);