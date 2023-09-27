alert("Bienvenido a nuestro conversor de moneda");
console.log("Conversor de moneda a iniciado");
console.log("----------------")

// Objeto para manejar las tasas de cambio
const tasasDeCambio = {
    arg: 1,
    usd: 740, // 1 USD equivale a 740 pesos argentinos
    eur: 788, // 1 EUR equivale a 788 pesos argentinos
    usdToArs: 740 / 1, // Agrega la tasa de cambio inversa para USD a ARS
    eurToArs: 788 / 1  // Agrega la tasa de cambio inversa para EUR a ARS
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

function buscarPorCantidad(cantidad) {
    const resultados = historialConversiones.filter(conversion => conversion.cantidad == cantidad);
    return resultados;
}

function buscarPorMonedaOrigen(moneda) {
    const resultados = historialConversiones.filter(conversion => conversion.monedaOrigen.toLowerCase() === moneda.toLowerCase());
    return resultados;
}

function buscarPorMonedaDestino(moneda) {
    const resultados = historialConversiones.filter(conversion => conversion.monedaDestino.toLowerCase() === moneda.toLowerCase());
    return resultados;
}

function filtrarPorRango(min, max) {
    const resultados = historialConversiones.filter(conversion => {
        const resultadoNum = parseFloat(conversion.resultado);
        return resultadoNum >= min && resultadoNum <= max;
    });
    return resultados;
}

function convertirPesos() {
    let opcion = "1";

    while (opcion === "1" || opcion === "2" || opcion === "3" || opcion === "4" || opcion === "5" || opcion === "6" || opcion === "7" || opcion === "8") {
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
                resultado = resultado.toFixed(2); // Redondea a 2 decimales
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
            resultadoARS = resultadoARS.toFixed(2); // Redondea a 2 decimales
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
            resultadoARS = resultadoARS.toFixed(2); // Redondea a 2 decimales
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
        } else if (opcion === "5") {
            // Buscar por cantidad
            const cantidadBusqueda = prompt("Ingrese la cantidad a buscar:");
            const resultados = buscarPorCantidad(cantidadBusqueda);
            if (resultados.length === 0) {
                console.log("No se encontraron conversiones con esa cantidad.");
            } else {
                console.log("Resultados de la búsqueda por cantidad:");
                resultados.forEach((conversion, index) => {
                    console.log(`Conversión ${index + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
                });
            }
        } else if (opcion === "6") {
            // Buscar por moneda de origen
            const monedaOrigenBusqueda = prompt("Ingrese la moneda de origen a buscar (usd, eur, ars, etc.):");
            const resultados = buscarPorMonedaOrigen(monedaOrigenBusqueda);
            if (resultados.length === 0) {
                console.log("No se encontraron conversiones con esa moneda de origen.");
            } else {
                console.log("Resultados de la búsqueda por moneda de origen:");
                resultados.forEach((conversion, index) => {
                    console.log(`Conversión ${index + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
                });
            }
        } else if (opcion === "7") {
            // Buscar por moneda de destino
            const monedaDestinoBusqueda = prompt("Ingrese la moneda de destino a buscar (usd, eur, ars, etc.):");
            const resultados = buscarPorMonedaDestino(monedaDestinoBusqueda);
            if (resultados.length === 0) {
                console.log("No se encontraron conversiones con esa moneda de destino.");
            } else {
                console.log("Resultados de la búsqueda por moneda de destino:");
                resultados.forEach((conversion, index) => {
                    console.log(`Conversión ${index + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
                });
            }
        } else if (opcion === "8") {
            // Filtrar por rango de resultados
            const minResultado = parseFloat(prompt("Ingrese el valor mínimo del resultado:"));
            const maxResultado = parseFloat(prompt("Ingrese el valor máximo del resultado:"));
            const resultados = filtrarPorRango(minResultado, maxResultado);
            if (resultados.length === 0) {
                console.log("No se encontraron conversiones en ese rango de resultados.");
            } else {
                console.log("Resultados del filtro por rango:");
                resultados.forEach((conversion, index) => {
                    console.log(`Conversión ${index + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
                });
            }
        }

        opcion = prompt("Ingrese una opción: 1 para otra conversión, 2 para convertir desde dólares a pesos, 3 para convertir desde euros a pesos, 4 para ver historial, 5 para buscar por cantidad, 6 para buscar por moneda de origen, 7 para buscar por moneda de destino, 8 para filtrar por rango de resultados, 9 para salir.");

        if (opcion === "9") {
            console.log("Saliendo del programa...");
            console.log("Conversor de moneda finalizado.");
        } else if (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4" && opcion !== "5" && opcion !== "6" && opcion !== "7" && opcion !== "8") {
            console.log("Opción no válida. Saliendo del programa...");
            console.log("Conversor de moneda finalizado.");
        }

        console.log("----------------");
    }
}

convertirPesos();




















