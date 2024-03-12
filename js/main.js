// Algoritmo con un condicional
function calcularConCondicional(monto) {
    if (isNaN(monto)) {
        alert("Por favor, ingresa el monto que cobraste por tus honorarios.");
        return;
    }

    var aumento = monto * 0.1375;
    var valorBruto = monto + aumento;
    var valorNeto = monto - aumento;

    alert("El valor bruto que debes escribir en la boleta es: $" + Math.floor(valorBruto) + "\nEl valor líquido que debes escribir en la boleta es: $" + Math.floor(valorNeto));
}

// Pedir al usuario el nombre
var nombre = prompt("¡Hola! ¿Cuál es tu nombre?");

// Saludar al usuario
alert("Hola, " + nombre + "! Bienvenido a la Calculadora Freelance.");

// Recordar la retención de impuestos según SII
alert("Recuerda que según SII, desde el 1 de enero de 2024, cada vez que emitas una boleta de honorarios la retención será de 13,75%.");

// Pedir al usuario el monto
var monto = prompt("Por favor, ingresa el monto que cobraste por tus honorarios.");

// Llamar a la función de cálculo con condicional
calcularConCondicional(parseFloat(monto));

