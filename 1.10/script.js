document.getElementById('calculateButton').addEventListener('click', function() {
    const program = document.getElementById('programSelect').value;
    const scholarship = document.getElementById('scholarship').value;
    const resultElement = document.getElementById('result');
    let monthlyCost = 0;
    let totalCost = 0;
    let duration = 0;

    switch (program) {
        case 'course':
            monthlyCost = 4999;
            duration = 2;
            break;
        case 'carrera':
            monthlyCost = 3999;
            duration = 6;
            break;
        case 'master':
            monthlyCost = 2999;
            duration = 12;
            break;
    }

    switch (scholarship) {
        case 'facebook':
            monthlyCost *= 0.8;
            break;
        case 'google':
            monthlyCost *= 0.85;
            break;
        case 'jesua':
            monthlyCost *= 0.5;
            break;
    }

    totalCost = monthlyCost * duration;

    resultElement.textContent = `Costo mensual con descuento es de ${monthlyCost.toFixed(2)} MXN.Costo total del programa educativo seleccionado es de ${totalCost.toFixed(2)} MXN, con duración de ${duration} meses.`;
});
