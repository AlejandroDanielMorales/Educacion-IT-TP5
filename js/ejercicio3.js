const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const operacion = prompt("Ingresa la operación (+, -, *, /):");

if (!isNaN(num1) && !isNaN(num2)) {
    let resultado;
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: No se puede dividir por 0.");
                resultado = "Error";
            }
            break;
        default:
            alert("Operación no válida.");
            resultado = "Error";
    }

    if (resultado !== "Error") {
        alert(`El resultado de la operación es: ${resultado}`);
    }
} else {
    alert("Por favor, ingresa valores numéricos válidos.");
}
