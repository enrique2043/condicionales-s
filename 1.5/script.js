document.getElementById('compareButton').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Por favor, ingrese números válidos en ambos campos.';
    } else {
        if (number1 < number2) {
            resultElement.textContent = `El número ${number1} es menor que ${number2}.`;
        } else {
            resultElement.textContent = `El número ${number2} es menor que ${number1}.`;
        }
    }
});
 