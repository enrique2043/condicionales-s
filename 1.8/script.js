document.getElementById('checkButton').addEventListener('click', function() {
    const gradeInput = parseFloat(document.getElementById('gradeInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(gradeInput) || gradeInput < 1 || gradeInput > 10) {
        resultElement.textContent = 'Ingrese una calificación válida entre 1 y 10.';
    } else {
        if (gradeInput < 6) {
            resultElement.textContent = 'Reprobado';
        } else if (gradeInput >= 6 && gradeInput <= 8) {
            resultElement.textContent = 'Regular';
        } else if (gradeInput === 9) {
            resultElement.textContent = 'Bien';
        } else {
            resultElement.textContent = 'Excelente';
        }
    }
});
