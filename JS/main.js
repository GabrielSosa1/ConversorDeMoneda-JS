/*alert("Bienvenido a nuestro conversor de moneda");
console.log("Conversor de moneda a iniciado");

function convertirPesos() {
    let opcion = "1";

    while (opcion === "1") {
        let cantidad = prompt("Ingrese la cantidad en pesos a convertir:");

        while (isNaN(cantidad)) {
            cantidad = prompt("¡Ingrese un número válido!");
            console.log("No es valido"); // suponiendo que usen letras repetidas veces
            console.log("----------------")
        }

        let dolares = cantidad / 700; // Suponiendo que 700 pesos equivale a 1 dolar

        console.log(cantidad + " pesos equivale a " + dolares + " dólares.");

        opcion = prompt("Ingrese una opción: 1 para otra conversion, 2 para salir.");

        if (opcion === "2") {
            console.log("Saliendo del programa..."); 
            console.log("Conversor de moneda finalizó."); 
        } else if (opcion !== "1") {
            console.log("Opción no válida. Saliendo del programa...");
            console.log("Conversor de moneda finalizó.");
        }
        
        console.log("----------------");
    }
}

convertirPesos();*/

alert("Bienvenido a nuestro conversor de moneda");
console.log("Conversor de moneda a iniciado");

// Objeto para manejar las tasas de cambio
const tasasDeCambio = {
    arg: 1, 
    usd: 730, // 1 USD equivale a 730 pesos argentinos
    eur: 780, // 1 EUR  equivale a 780 pesos argentinos
};

function convertirPesos() {
    let opcion = "1";

    while (opcion === "1") {
        let cantidad = prompt("Ingrese la cantidad en pesos a convertir:");

        while (isNaN(cantidad)) {
            cantidad = prompt("¡Ingrese un número válido!");
            console.log("No es válido");
            console.log("----------------");
        }

        // Selecciona la moneda a la que se convertirá
        const monedaDestino = prompt("Elija una moneda a la que desea convertir (usd, eur,):").toLowerCase();

        if (tasasDeCambio.hasOwnProperty(monedaDestino)) {
            let resultado = cantidad / tasasDeCambio[monedaDestino];
            console.log(`${cantidad} pesos equivale a ${resultado} ${monedaDestino}.`);
        } else {
            console.log("Moneda no válida.");
        }

        opcion = prompt("Ingrese una opción: 1 para otra conversión, 2 para salir.");

        if (opcion === "2") {
            console.log("Saliendo del programa...");
            console.log("Conversor de moneda finalizado.");
        } else if (opcion !== "1") {
            console.log("Opción no válida. Saliendo del programa...");
            console.log("Conversor de moneda finalizado.");
        }

        console.log("----------------");
    }
}

convertirPesos();




















