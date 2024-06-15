document.getElementById('checkButton').addEventListener('click', function() {
    const inputValue = document.getElementById('inputValue').value;
    const resultElement = document.getElementById('result');
    
    if (inputValue % 2 === 0) {
        resultElement.textContent = `${inputValue} es divisible entre 2.`;
    } else {
        resultElement.textContent = `${inputValue} no es divisible entre 2.`;
    }
});
