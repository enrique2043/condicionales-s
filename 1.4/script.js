document.getElementById('checkButton').addEventListener('click', function() {
    const clientNumber = document.getElementById('clientNumber').value;
    const resultElement = document.getElementById('result');
    
    if (clientNumber === '1000') {
        resultElement.textContent = '¡Ganaste un premio!';
    } else {
        resultElement.textContent = `Lo sentimos, el número de cliente ${clientNumber} no ganó. Sigue participando.`;
    }
});
