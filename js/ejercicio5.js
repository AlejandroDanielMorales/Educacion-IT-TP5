const minutos = parseFloat(prompt("Ingresa un número de minutos:"));

if (!isNaN(minutos) && minutos >= 0) {
    const segundos = minutos * 60; 
    const horas = minutos / 60;   

    alert(`En ${minutos} minutos hay:\n${segundos} segundos\n${horas.toFixed(2)} horas`);
} else {
    alert("Por favor, ingresa un número válido de minutos.");
}


