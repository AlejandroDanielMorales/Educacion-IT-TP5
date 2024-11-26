const base = parseFloat(prompt("Ingresa la base del rectángulo:"));
const altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
    const area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
} 
else {
    console.error("Por favor, ingresa valores numéricos válidos para la base y la altura.");
}
