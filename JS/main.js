console.log("Conversor inicio");
console.log("----------");
// Objeto para manejar las tasas de cambio
const tasasDeCambio = {
    ars: 1,
    usd: 740, // 1 USD equivale a 740 pesos argentinos
    eur: 788, // 1 EUR equivale a 788 pesos argentinos
};

// Array para almacenar el historial de conversiones
let historialConversiones = [];

// Función para mostrar el historial en la página
function mostrarHistorial() {
    const historialUl = document.getElementById('historial');
    historialUl.innerHTML = ''; // Limpiamos el contenido anterior

    historialConversiones.forEach((conversion, index) => {
        const li = document.createElement('li');
        li.textContent = `Conversión ${index + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`;
        historialUl.appendChild(li);
    });
}

// Función para mostrar un mensaje en la página web y en la consola
function mostrarMensajeEnPaginaYConsola(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
    console.log(mensaje); // Imprimir mensaje en la consola
}

// Función para imprimir las conversiones realizadas en la consola
function imprimirHistorialYConversionesEnConsola() {
    console.group("Conversiones Realizadas");

    historialConversiones.forEach((conversion, index) => {
        console.log(`${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
    });

    console.groupEnd();

    console.log("------------");
}

// Función para realizar la conversión
function convertir() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;

    if (!isNaN(cantidad) && tasasDeCambio.hasOwnProperty(monedaOrigen) && tasasDeCambio.hasOwnProperty(monedaDestino)) {
        const resultado = (cantidad * (tasasDeCambio[monedaOrigen] / tasasDeCambio[monedaDestino])).toFixed(2);

        mostrarMensajeEnPaginaYConsola(`${cantidad} ${monedaOrigen.toUpperCase()} equivale a ${resultado} ${monedaDestino.toUpperCase()}.`);

        // Agrega la conversión al historial
        const conversion = {
            cantidad: cantidad,
            monedaOrigen: monedaOrigen.toUpperCase(),
            monedaDestino: monedaDestino.toUpperCase(),
            resultado: resultado
        };
        historialConversiones.push(conversion);

        // Actualiza el historial en el almacenamiento local (localStorage)
        localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));

        mostrarHistorial();

        // Llama a la función para imprimir las conversiones realizadas en la consola
        imprimirHistorialYConversionesEnConsola();
    } else {
        mostrarMensajeEnPaginaYConsola("Por favor, ingrese una cantidad válida y seleccione monedas de origen y destino válidas.");
    }
}

// Manejo de eventos
const convertirBtn = document.getElementById('convertirBtn');
convertirBtn.addEventListener('click', convertir);

// Cargar el historial al cargar la página
window.addEventListener('load', () => {
    // Verifica si el historial existe en el almacenamiento local
    const historialGuardado = localStorage.getItem('historialConversiones');
    if (historialGuardado) {
        historialConversiones = JSON.parse(historialGuardado);
        mostrarHistorial();
    }
});

// Borra el historial al recargar la página
window.addEventListener('beforeunload', () => {
    localStorage.removeItem('historialConversiones');
});






















