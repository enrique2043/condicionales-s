document.getElementById('calculateButton').addEventListener('click', function() {
    const topping = document.getElementById('topping').value;
    const resultElement = document.getElementById('result');
    let price = 50; // Precio base del helado
    
    switch (topping) {
        case 'oreo':
            price += 10;
            resultElement.textContent = `Precio del helado con topping de Oreo es  ${price} MXN.`;
            break;
        case 'kitkat':
            price += 15;
            resultElement.textContent = `Precio del helado con topping de KitKat es  ${price} MXN.`;
            break;
        case 'brownie':
            price += 20;
            resultElement.textContent = ` Precio del helado con topping de Brownie es  ${price} MXN.`;
            break;
        default:
            resultElement.textContent = ' El precio del helado sin topping es de 50 MXN.';
    }
});
