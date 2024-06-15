function verificarPar() {
    
    const numero = prompt("Ingrese un número:");

    const numeroEntero = parseInt(numero);

   
    if (numeroEntero % 2 === 0) {
        alert(numeroEntero + " es un número par.");
    } else {
        alert(numeroEntero + " no es un número par.");
    }
}
