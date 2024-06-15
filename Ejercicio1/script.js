// Solicitar al usuario que responda a la pregunta
let respuesta = prompt("¿Eres bellisimo/a?");

// Condicional para evaluar la respuesta del usuario
if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
    alert("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
    alert("No te creo");
} else {
    alert("Respuesta no válida, por favor responde con 'sí' o 'no'");
}
