document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const numero = parseInt(document.getElementById('numero').value);
    const letraIngresada = document.getElementById('letra').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    // Comprobar si el número está en el rango válido
    if (numero < 0 || numero > 99999999) {
        alert("DNI no valida");
        return;
    }

    // Calcular la letra correspondiente
    const resto = numero % 23;
    const letraCalculada = letras[resto];

    // Comparar la letra ingresada con la calculada
    if (letraIngresada !== letraCalculada) {
        alert("No es correcta la letra proporcionada");
    } else {
        alert("DNI y letras correctas :)");
    }
});
