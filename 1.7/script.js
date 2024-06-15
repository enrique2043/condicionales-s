document.getElementById('checkButton').addEventListener('click', function() {
    const dayInput = document.getElementById('dayInput').value.toLowerCase();
    const resultElement = document.getElementById('result');
    
    switch (dayInput) {
        case 'lunes':
            resultElement.textContent = '¡Es lunes! Ánimo, comienza una nueva semana.';
            break;
        case 'viernes':
            resultElement.textContent = '¡Es viernes! ¡Por fin llegó el fin de semana!';
            break;
        case 'sábado':
        case 'domingo':
            resultElement.textContent = '¡Es fin de semana! Disfruta y relájate.';
            break;
        default:
            resultElement.textContent = 'No tenemos disponible ese dia';
    }
});
