let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let hola = "Hola a todos. "
let fraseCompleta = hola + saludo + nombre;

console.log(fraseCompleta)

let frase = "JavaScript " + "es un lenguaje" + "esencial para crear" + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1 + " " + numeroString2 + " " + numeroString3;
console.log(concatenaNumeros);

var age = prompt("¿Cuál es tu edad?:")
var nombrePersona = prompt("¿Cuál es tu nombre?")

console.warn("Nombre: " + nombrePersona + ", edad: " + age)

let edad;
edad = prompt("Introduce tu edad");
let sexo = prompt("¿Eres hombre o mujer?")

if (sexo == "hombre") {
    if (edad >= 18) {
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
}

if (sexo == "mujer") {
    if (edad >= 20) {
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
}