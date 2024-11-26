const precioDolares = parseFloat(prompt("Ingresa el precio del producto en dólares:"));

const tipoCambio = 1130; 
const iva = 0.21;

if (!isNaN(precioDolares) && precioDolares > 0) {
    const precioPesos = precioDolares * tipoCambio;
    const precioFinal = precioPesos * (1 + iva);

    alert(`El precio final del producto en pesos (incluyendo IVA) es: $${precioFinal.toFixed(2)}`);
} else {
    alert("Por favor, ingresa un valor numérico válido.");
}
