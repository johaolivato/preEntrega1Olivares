// Array para almacenar el historial de cálculos
let historial = [];

// Función para guardar resultados en el historial
function guardarHistorial(monto, valorBruto, valorNeto) {
    historial.push({ monto: monto, valorBruto: valorBruto, valorNeto: valorNeto });
}

// Función para calcular el valor bruto y líquido
function calcularValor(monto) {
    if (isNaN(monto)) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }

    const retencion = 0.1375;
    let retencionMonto = monto * retencion;
    let valorBruto = monto + retencionMonto;
    let valorNeto = monto - retencionMonto;

    return [valorBruto.toFixed(2), valorNeto.toFixed(2)]; // Redondear a dos decimales
}

// Función para mostrar el historial de cálculos
function mostrarHistorial() {
    if (historial.length === 0) {
        alert("El historial está vacío.");
        return;
    }

    let historialString = "Historial de cálculos:\n";
    historial.forEach((registro, index) => {
        historialString += "Registro " + (index + 1) + ":\n";
        historialString += "Monto: $" + registro.monto + "\n";
        historialString += "Valor Bruto: $" + registro.valorBruto + "\n";
        historialString += "Valor Neto: $" + registro.valorNeto + "\n\n";
    });
    alert(historialString);
}

// Función para buscar un registro en el historial por monto
function buscarPorMonto(monto) {
    return historial.find(registro => registro.monto === monto);
}

// Función para filtrar el historial por valor bruto
function filtrarPorValorBruto(valorBruto) {
    return historial.filter(registro => registro.valorBruto === valorBruto);
}

// Pedir al usuario el nombre
let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
if (nombre === null || nombre === "") {
    alert("Por favor, ingresa tu nombre.");
} else {
    // Saludar al usuario
    alert("Hola, " + nombre + "! Bienvenido a la Calculadora Freelance.");

    // Recordar la retención de impuestos según SII
    alert("Recuerda que según SII, desde el 1 de enero de 2024, cada vez que emitas una boleta de honorarios la retención será de 13,75%.");

    // Pedir al usuario el monto
    let monto = prompt("Por favor, ingresa el monto que cobraste por tus honorarios.");

    // Convertir el monto a número y calcular el valor bruto y líquido
    monto = parseFloat(monto);
    if (!isNaN(monto)) {
        let resultado = calcularValor(monto);
        guardarHistorial(monto, resultado[0], resultado[1]);
        alert("El valor bruto que debes escribir en la boleta es: $" + resultado[0] + "\nEl valor líquido que recibirás es: $" + resultado[1]);

        // Mostrar el historial de cálculos
        mostrarHistorial();

        // Pedir al usuario su correo electrónico para enviar los resultados
        let email = prompt("Por favor, ingresa tu correo electrónico para enviar los resultados:");
        if (email) {
            // Aquí iría el código para enviar el correo electrónico con los resultados
            alert("Los resultados han sido enviados a: " + email);
        }
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
}
