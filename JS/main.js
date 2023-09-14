alert("Bienvenido a nuestro conversor de moneda");
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

convertirPesos();


















