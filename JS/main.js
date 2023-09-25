alert("Bienvenido a nuestro conversor de moneda");
console.log("Conversor de moneda a iniciado");

// Objeto para manejar las tasas de cambio
const tasasDeCambio = {
    arg: 1,
    usd: 740, // 1 USD equivale a 730 pesos argentinos
    eur: 788, // 1 EUR equivale a 780 pesos argentinos
    usdToArs: 740 / 1, // Agrega la tasa de cambio inversa para USD a ARS
    eurToArs: 788 / 1,  // Agrega la tasa de cambio inversa para EUR a ARS
};

// Array para almacenar el historial de conversiones
const historialConversiones = [];

function mostrarHistorial() {
    console.log("Historial de Conversiones:");
    for (let i = 0; i < historialConversiones.length; i++) {
        const conversion = historialConversiones[i];
        console.log(`Conversión ${i + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
    }
}

function convertirPesos() {
    let opcion = "1";

    while (opcion === "1" || opcion === "2" || opcion === "3" || opcion === "4") {
        if (opcion === "1") {
            let cantidad = prompt("Ingrese la cantidad en pesos a convertir:");

            while (isNaN(cantidad)) {
                cantidad = prompt("¡Ingrese un número válido!");
                console.log("No es válido");
                console.log("----------------");
            }

            // Selecciona la moneda a la que se convertirá
            const monedaDestino = prompt("Elija una moneda a la que desea convertir (usd, eur):").toLowerCase();

            if (tasasDeCambio.hasOwnProperty(monedaDestino)) {
                let resultado = cantidad / tasasDeCambio[monedaDestino];
                resultado = resultado.toFixed(2); //Redondea a 2 decimales
                console.log(`${cantidad} pesos equivale a ${resultado} ${monedaDestino}.`);

                // Agrega la conversión al historial
                const conversion = {
                    cantidad: cantidad,
                    monedaOrigen: "ARS",
                    monedaDestino: monedaDestino,
                    resultado: resultado
                };
                historialConversiones.push(conversion);
            } else {
                console.log("Moneda no válida.");
            }
        } else if (opcion === "2") {
            let cantidadUSD = prompt("Ingrese la cantidad en dólares a convertir:");

            while (isNaN(cantidadUSD)) {
                cantidadUSD = prompt("¡Ingrese un número válido!");
                console.log("No es válido");
                console.log("----------------");
            }

            let resultadoARS = cantidadUSD * tasasDeCambio.usdToArs;
            console.log(`${cantidadUSD} dólares equivale a ${resultadoARS} pesos argentinos.`);

            // Agrega la conversión al historial
            const conversion = {
                cantidad: cantidadUSD,
                monedaOrigen: "USD",
                monedaDestino: "ARS",
                resultado: resultadoARS
            };
            historialConversiones.push(conversion);
        } else if (opcion === "3") {
            let cantidadEUR = prompt("Ingrese la cantidad en euros a convertir:");

            while (isNaN(cantidadEUR)) {
                cantidadEUR = prompt("¡Ingrese un número válido!");
                console.log("No es válido");
                console.log("----------------");
            }

            let resultadoARS = cantidadEUR * tasasDeCambio.eurToArs;
            console.log(`${cantidadEUR} euros equivale a ${resultadoARS} pesos argentinos.`);

            // Agrega la conversión al historial
            const conversion = {
                cantidad: cantidadEUR,
                monedaOrigen: "EUR",
                monedaDestino: "ARS",
                resultado: resultadoARS
            };
            historialConversiones.push(conversion);
        } else if (opcion === "4") {
            mostrarHistorial();
        }

        opcion = prompt("Ingrese una opción: 1 para otra conversión, 2 para convertir desde dólares a pesos, 3 para convertir desde euros a pesos, 4 para ver historial, 5 para salir.");

        if (opcion === "5") {
            console.log("Saliendo del programa...");
            console.log("Conversor de moneda finalizado.");
        } else if (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4") {
            console.log("Opción no válida. Saliendo del programa...");
            console.log("Conversor de moneda finalizado.");
        }

        console.log("----------------");
    }
}

convertirPesos();



















