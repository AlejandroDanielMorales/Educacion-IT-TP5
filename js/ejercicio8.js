// Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos 
// números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total 
// acumulado. 

let container = document.getElementById("container");
let total = 0; 

function solicitarNumeros() {

    let num1 = parseInt(prompt("Ingresa un número entero (1):"));
    let num2 = parseInt(prompt("Ingresa otro número entero (2):"));
    total = num1 + num2;

    container.innerHTML += `<strong>La suma de ${num1} y ${num2} es: ${total}</strong><br>`;

    if (total >= 100) {
        container.innerHTML += `<strong>¡La suma supera los 100! Fin del programa.</strong><br>`;
        return; 
    }

    setTimeout(solicitarNumeros, 0);
}

solicitarNumeros();
