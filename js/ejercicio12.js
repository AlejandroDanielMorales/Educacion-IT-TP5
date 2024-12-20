let container = document.getElementById("container");

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinarNumero() {

    let intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

    if (intento === numeroAleatorio) {
        container.innerHTML += `<strong>¡Felicidades! Adivinaste el número: ${numeroAleatorio}.</strong><br>`;
    } else if (intento > numeroAleatorio) {
        container.innerHTML += `<strong>${intento} es mayor que el número secreto. Intenta de nuevo </strong><br>`;
        setTimeout(adivinarNumero, 0); 
    } else {
        container.innerHTML += `<strong>${intento} es menor que el número secreto. Intenta de nuevo </strong><br>`;
        setTimeout(adivinarNumero, 0); 
    }
}

adivinarNumero();
