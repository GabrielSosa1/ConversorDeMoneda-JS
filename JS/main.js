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

function mostrarMensajeEnPagina(mensaje, elementoId) {
    const resultadoDiv = document.getElementById(elementoId);
    resultadoDiv.textContent = mensaje;
    Swal.fire({
        text: mensaje,
        icon: 'info',
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });
}

function resultadoDeConversion() {
    historialConversiones.forEach((conversion) => {
        const hora = new Date().toLocaleTimeString();
        const mensaje = `${hora}: ${conversion.cantidad} ${conversion.monedaOrigen} a ${conversion.resultado} ${conversion.monedaDestino}`;
        Swal.fire({
            title: 'Resultado de la Conversion',
            text: mensaje,
            icon: 'info'
        });
    });
}

function resultadoDePrestamo() {
    historialPrestamos.forEach((prestamo) => {
        const hora = new Date().toLocaleTimeString();
        const mensaje = `${hora}: Préstamo de $${prestamo.monto} con una tasa de interés del ${prestamo.tasa}% a ${prestamo.plazo} meses`;
        Swal.fire({
            title: 'Resultado del Préstamo',
            text: mensaje,
            icon: 'info'
        });
    });
}


async function cargarTasasDeCambioDesdeAPI() { 
    try {
        const response = await fetch('../data/datos.json'); // Reemplaza 'URL_DEL_JSON' con la URL real de tu JSON
        if (response.ok) {
            const tasasDeCambioJSON = await response.json();
            return tasasDeCambioJSON.tasasDeCambio;
        } else {
            throw new Error('No se pudo cargar el JSON.');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function convertir() {
    const tasasDeCambio = await cargarTasasDeCambioDesdeAPI(); // Cargamos las tasas de cambio desde la API

    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;
    const direccionConversion = document.getElementById('direccionConversion').value;

    if (tasasDeCambio && !isNaN(cantidad) && tasasDeCambio.hasOwnProperty(monedaOrigen) && tasasDeCambio.hasOwnProperty(monedaDestino)) {
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

        resultadoDeConversion();

        mostrarMensajeEnPagina(`Resultado de la conversión: ${resultado} ${monedaDestinoFinal}`, 'resultadoConversion');
    } else {
        mostrarMensajeEnPagina(`Por favor, ingrese una cantidad válida y seleccione monedas de origen y destino válidas`, 'resultadoConversion');
        return Promise.reject("Error en la conversión");
    }
}

async function calcularPrestamo() {
    const montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value) / 100;
    const plazoPrestamo = parseInt(document.getElementById('plazoPrestamo').value);

    if (isNaN(montoPrestamo) || isNaN(plazoPrestamo)) {
        mostrarMensajeEnPagina("Por favor, complete todos los campos.", 'resultadoPrestamo');
        return Promise.reject("Campos incompletos");
    } else {
        if (tasaInteres === 0) {
            mostrarMensajeEnPagina("La tasa de interés es 0, por lo que no se generan intereses. Total a Pagar: 0", 'resultadoPrestamo');
        } else {
            const cuotaMensual = (montoPrestamo * tasaInteres * (Math.pow(1 + tasaInteres, plazoPrestamo))) / (Math.pow(1 + tasaInteres, plazoPrestamo) - 1);
            const totalAPagar = cuotaMensual * plazoPrestamo;

            mostrarMensajeEnPagina(`Cuota Mensual: $${cuotaMensual.toFixed(2)}, Total a Pagar: $${totalAPagar.toFixed(2)}`, 'resultadoPrestamo');

            const prestamo = {
                monto: montoPrestamo.toFixed(2),
                tasa: tasaInteres,
                plazo: plazoPrestamo,
                hora: new Date().toLocaleTimeString()
            };
            historialPrestamos.push(prestamo);

            localStorage.setItem('historialPrestamos', JSON.stringify(historialPrestamos));

            mostrarHistorialPrestamos();
            resultadoDePrestamo();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Swal.fire({ // Muestra un SweetAlert de bienvenida
        title: 'Bienvenido a nuestro simulador',
        text: '¡Bienvenido a nuestro simulador de conversiones y préstamos!',
        icon: 'info'
    }).then(() => {
        const convertirBtn = document.getElementById('convertirBtn');
        convertirBtn.addEventListener('click', async () => {
            try {
                await convertir();
            } catch (error) {
                Swal.fire({
                    title: 'Error en la conversión',
                    text: error,
                    icon: 'error'
                });
            }
        });

        const calcularPrestamoBtn = document.getElementById('calcularPrestamoBtn');
        calcularPrestamoBtn.addEventListener('click', async () => {
            try {
                await calcularPrestamo();
            } catch (error) {
                Swal.fire({
                    title: 'Error en el cálculo del préstamo',
                    text: error,
                    icon: 'error'
                });
            }
        });

        const historialGuardado = localStorage.getItem('historialConversiones');
        if (historialGuardado) {
            historialConversiones = JSON.parse(historialGuardado);
            mostrarHistorial();
            resultadoDeConversion();
        }

        const historialPrestamosGuardado = localStorage.getItem('historialPrestamos');
        if (historialPrestamosGuardado) {
            historialPrestamos = JSON.parse(historialPrestamosGuardado);
            mostrarHistorialPrestamos();
            resultadoDePrestamo();
        }
    });
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
    });
});








