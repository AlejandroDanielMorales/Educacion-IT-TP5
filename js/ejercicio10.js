// Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un 
// bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad 
// con su clasificación.

let container = document.getElementById("container");
const edades = [18, 25, 14, 32, 16, 40];

for (let i = 0; i < edades.length; i++) {
    const edad = edades[i];
    let clasificacion;

    if (edad >= 18) {
        clasificacion = "Mayor de edad";
    } else {
        clasificacion = "Menor de edad";
    }


    container.innerHTML += `<strong>${edad} años: ${clasificacion}</strong><br>`;
}
