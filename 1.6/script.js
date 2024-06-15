document.getElementById('findButton').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        resultElement.textContent = 'Por favor, ingrese números válidos en todos los campos.';
    } else {
        if (number1 === number2 && number1 === number3) {
            resultElement.textContent = 'Los tres números son iguales.';
        } else if (number1 >= number2 && number1 >= number3) {
            resultElement.textContent = `El número ${number1} es el mayor.`;
        } else if (number2 >= number1 && number2 >= number3) {
            resultElement.textContent = `El número ${number2} es el mayor.`;
        } else {
            resultElement.textContent = `El número ${number3} es el mayor.`;
        }
    }
});
