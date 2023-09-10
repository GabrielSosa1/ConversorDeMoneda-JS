alert("Bienvenido a nuestro conversor de moneda");
console.log("Conversor de moneda a iniciado");

function convertirPesos() {
    let opcion = "1";

    while (opcion === "1") {
        let cantidad = prompt("Ingrese la cantidad en pesos a convertir:");

        while (isNaN(cantidad)) {
            cantidad = prompt("¡Ingrese un número válido!");
            console.log("No es valido"); // suponiendo que usen letras repetidas veces
        }

        let dolares = cantidad / 700; // Suponiendo que 700 pesos equivale a 1 dolar

        console.log(cantidad + " pesos equivale a " + dolares + " dólares.");

        opcion = prompt("Ingrese una opción: 1 para convertir otra vez, 2 para salir.");
        console.log("----------------")
    }

    console.log("Saliendo del programa...");
    console.log("Conversor de moneda finalizo");
}


convertirPesos();


















