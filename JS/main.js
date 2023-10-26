/*console.log("Conversor y Simulador inicio");
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

function imprimirHistorialPrestamosEnConsola() {
    console.group("Préstamos Realizados");

    historialPrestamos.forEach((prestamo) => {
        const hora = new Date().toLocaleTimeString();
        console.log(`${hora}: Préstamo de $${prestamo.monto} con una tasa de interés del ${prestamo.tasa}% a ${prestamo.plazo} meses`);
    });

    console.groupEnd();
}

function convertir() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;
    const direccionConversion = document.getElementById('direccionConversion').value;

    if (!isNaN(cantidad) && tasasDeCambio.hasOwnProperty(monedaOrigen) && tasasDeCambio.hasOwnProperty(monedaDestino)) {
        let resultado;
        let monedaOrigenFinal, monedaDestinoFinal;

        if (direccionConversion === "inversa") {
            resultado = (cantidad * (tasasDeCambio[monedaDestino] / tasasDeCambio[monedaOrigen])).toFixed(2);
            monedaOrigenFinal = monedaDestino.toUpperCase();
            monedaDestinoFinal = monedaOrigen.toUpperCase();
        } else {
            resultado = (cantidad * (tasasDeCambio[monedaOrigen] / tasasDeCambio[monedaDestino])).toFixed(2);
            monedaOrigenFinal = monedaOrigen.toUpperCase();
            monedaDestinoFinal = monedaDestino.toUpperCase();
        }

        const conversion = {
            cantidad: cantidad,
            monedaOrigen: monedaOrigenFinal,
            monedaDestino: monedaDestinoFinal,
            resultado: resultado
        };
        historialConversiones.push(conversion);

        localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));

        mostrarHistorial();

        imprimirHistorialYConversionesEnConsola();

        mostrarMensajeEnPaginaYConsola(`Resultado de la conversión: ${resultado} ${monedaDestinoFinal}`, 'resultadoConversion');
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

            localStorage.setItem('historialPrestamos', JSON.stringify(historialPrestamos));

            mostrarHistorialPrestamos();
            imprimirHistorialPrestamosEnConsola(); // Imprimir el historial de préstamos en la consola
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
        imprimirHistorialYConversionesEnConsola();
    }

    const historialPrestamosGuardado = localStorage.getItem('historialPrestamos');
    if (historialPrestamosGuardado) {
        historialPrestamos = JSON.parse(historialPrestamosGuardado);
        mostrarHistorialPrestamos();
        imprimirHistorialPrestamosEnConsola(); // Imprimir el historial de préstamos en la consola
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));
    localStorage.setItem('historialPrestamos', JSON.stringify(historialPrestamos));
});*/

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

function imprimirHistorialPrestamosEnConsola() {
    console.group("Préstamos Realizados");

    historialPrestamos.forEach((prestamo) => {
        const hora = new Date().toLocaleTimeString();
        console.log(`${hora}: Préstamo de $${prestamo.monto} con una tasa de interés del ${prestamo.tasa}% a ${prestamo.plazo} meses`);
    });

    console.groupEnd();
}

async function convertir() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;
    const direccionConversion = document.getElementById('direccionConversion').value;

    if (!isNaN(cantidad) && tasasDeCambio.hasOwnProperty(monedaOrigen) && tasasDeCambio.hasOwnProperty(monedaDestino)) {
        let resultado;
        let monedaOrigenFinal, monedaDestinoFinal;

        if (direccionConversion === "inversa") {
            resultado = (cantidad * (tasasDeCambio[monedaDestino] / tasasDeCambio[monedaOrigen])).toFixed(2);
            monedaOrigenFinal = monedaDestino.toUpperCase();
            monedaDestinoFinal = monedaOrigen.toUpperCase();
        } else {
            resultado = (cantidad * (tasasDeCambio[monedaOrigen] / tasasDeCambio[monedaDestino])).toFixed(2);
            monedaOrigenFinal = monedaOrigen.toUpperCase();
            monedaDestinoFinal = monedaDestino.toUpperCase();
        }

        const conversion = {
            cantidad: cantidad,
            monedaOrigen: monedaOrigenFinal,
            monedaDestino: monedaDestinoFinal,
            resultado: resultado,
            hora: new Date().toLocaleTimeString()
        };
        historialConversiones.push(conversion);

        localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));

        mostrarHistorial();

        imprimirHistorialYConversionesEnConsola();

        mostrarMensajeEnPaginaYConsola(`Resultado de la conversión: ${resultado} ${monedaDestinoFinal}`, 'resultadoConversion');
    } else {
        mostrarMensajeEnPaginaYConsola("Por favor, ingrese una cantidad válida y seleccione monedas de origen y destino válidas.", 'resultadoConversion');
        return Promise.reject("Error en la conversión");
    }
}

async function calcularPrestamo() {
    const montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value) / 100;
    const plazoPrestamo = parseInt(document.getElementById('plazoPrestamo').value);

    if (isNaN(montoPrestamo) || isNaN(plazoPrestamo)) {
        mostrarMensajeEnPaginaYConsola("Por favor, complete todos los campos.", 'resultadoPrestamo');
        return Promise.reject("Campos incompletos");
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
                plazo: plazoPrestamo,
                hora: new Date().toLocaleTimeString()
            };
            historialPrestamos.push(prestamo);

            localStorage.setItem('historialPrestamos', JSON.stringify(historialPrestamos));

            mostrarHistorialPrestamos();
            imprimirHistorialPrestamosEnConsola();
        }
    }
}

const convertirBtn = document.getElementById('convertirBtn');
convertirBtn.addEventListener('click', async () => {
    try {
        await convertir();
    } catch (error) {
        console.error("Error en la conversión: " + error);
    }
});

const calcularPrestamoBtn = document.getElementById('calcularPrestamoBtn');
calcularPrestamoBtn.addEventListener('click', async () => {
    try {
        await calcularPrestamo();
    } catch (error) {
        console.error("Error en el cálculo del préstamo: " + error);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const historialGuardado = localStorage.getItem('historialConversiones');
    if (historialGuardado) {
        historialConversiones = JSON.parse(historialGuardado);
        mostrarHistorial();
        imprimirHistorialYConversionesEnConsola();
    }

    const historialPrestamosGuardado = localStorage.getItem('historialPrestamos');
    if (historialPrestamosGuardado) {
        historialPrestamos = JSON.parse(historialPrestamosGuardado);
        mostrarHistorialPrestamos();
        imprimirHistorialPrestamosEnConsola();
    }
});

window.addEventListener('beforeunload', () => {
    const guardarConversiones = new Promise((resolve) => {
        localStorage.setItem('historialConversiones', JSON.stringify(historialConversiones));
        resolve();
    });

    const guardarPrestamos = new Promise((resolve) => {
        localStorage.setItem('historialPrestamos', JSON.stringify(historialPrestamos));
        resolve();
    });

    Promise.all([guardarConversiones, guardarPrestamos]).then(() => {
        console.log("Datos guardados antes de la salida.");
    });
});



















































