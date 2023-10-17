console.log("Conversor y Simulador inicio");
console.log("----------");

const tasasDeCambio = {
    ars: 1,
    usd: 740,
    eur: 788,
};

let historialConversiones = [];
let historialPrestamos = [];

function mostrarHistorial() {
    const historialUl = document.getElementById('historial');
    historialUl.innerHTML = '';

    historialConversiones.forEach((conversion, index) => {
        const li = document.createElement('li');
        li.textContent = `Conversión ${index + 1}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`;
        historialUl.appendChild(li);
    });
}

function mostrarHistorialPrestamos() {
    const historialUl = document.getElementById('historialPrestamos');
    historialUl.innerHTML = '';

    historialPrestamos.forEach((prestamo, index) => {
        const li = document.createElement('li');
        li.textContent = `Préstamo ${index + 1}: Monto: $${prestamo.monto}, Tasa de Interés: ${prestamo.tasa}% Plazo: ${prestamo.plazo} meses`;
        historialUl.appendChild(li);
    });
}

function mostrarMensajeEnPaginaYConsola(mensaje, elementoId) {
    const resultadoDiv = document.getElementById(elementoId);
    resultadoDiv.textContent = mensaje;
    console.log(mensaje);
}

function imprimirHistorialYConversionesEnConsola() {
    console.group("Conversiones Realizadas");

    historialConversiones.forEach((conversion) => {
        const hora = new Date().toLocaleTimeString();
        console.log(`${hora}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`);
    });

    console.groupEnd();

    console.log("------------");
}

function convertir() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;
    const direccionConversion = document.getElementById('direccionConversion').value;

    if (!isNaN(cantidad) && tasasDeCambio.hasOwnProperty(monedaOrigen) && tasasDeCambio.hasOwnProperty(monedaDestino)) {
        let resultado;
        if (direccionConversion === "inversa") {
            resultado = (cantidad * (tasasDeCambio[monedaDestino] / tasasDeCambio[monedaOrigen])).toFixed(2);
        } else {
            resultado = (cantidad * (tasasDeCambio[monedaOrigen] / tasasDeCambio[monedaDestino])).toFixed(2);
        }

        const conversion = {
            cantidad: cantidad,
            monedaOrigen: monedaOrigen.toUpperCase(),
            monedaDestino: monedaDestino.toUpperCase(),
            resultado: resultado
        };
        historialConversiones.push(conversion);

        localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));

        mostrarHistorial();

        imprimirHistorialYConversionesEnConsola();

        mostrarMensajeEnPaginaYConsola(`Resultado de la conversión: ${resultado} ${monedaDestino}`, 'resultadoConversion');
    } else {
        mostrarMensajeEnPaginaYConsola("Por favor, ingrese una cantidad válida y seleccione monedas de origen y destino válidas.", 'resultadoConversion');
    }
}

function calcularPrestamo() {
    const montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value) / 100;
    const plazoPrestamo = parseInt(document.getElementById('plazoPrestamo').value);

    if (isNaN(montoPrestamo) || isNaN(plazoPrestamo)) {
        mostrarMensajeEnPaginaYConsola("Por favor, complete todos los campos.", 'resultadoPrestamo');
    } else {
        if (tasaInteres === 0) {
            mostrarMensajeEnPaginaYConsola("La tasa de interés es 0, por lo que no se generan intereses. Total a Pagar: 0", 'resultadoPrestamo');
        } else {
            const cuotaMensual = (montoPrestamo * tasaInteres * (Math.pow(1 + tasaInteres, plazoPrestamo))) / (Math.pow(1 + tasaInteres, plazoPrestamo) - 1);
            const totalAPagar = cuotaMensual * plazoPrestamo;

            mostrarMensajeEnPaginaYConsola(`Cuota Mensual: $${cuotaMensual.toFixed(2)}, Total a Pagar: $${totalAPagar.toFixed(2)}`, 'resultadoPrestamo');

            const prestamo = {
                monto: montoPrestamo.toFixed(2),
                tasa: tasaInteres,
                plazo: plazoPrestamo
            };
            historialPrestamos.push(prestamo);

            mostrarHistorialPrestamos();
        }
    }
}

const convertirBtn = document.getElementById('convertirBtn');
convertirBtn.addEventListener('click', convertir);

const calcularPrestamoBtn = document.getElementById('calcularPrestamoBtn');
calcularPrestamoBtn.addEventListener('click', calcularPrestamo);

window.addEventListener('DOMContentLoaded', () => {
    const historialGuardado = localStorage.getItem('historialConversiones');
    if (historialGuardado) {
        historialConversiones = JSON.parse(historialGuardado);
        mostrarHistorial();
    }

    const historialPrestamosGuardado = localStorage.getItem('historialPrestamos');
    if (historialPrestamosGuardado) {
        historialPrestamos = JSON.parse(historialPrestamosGuardado);
        mostrarHistorialPrestamos();
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));
    localStorage.setItem('historialPrestamos', JSON.stringify(historialPrestamos));
});












































