var valores = [true, 5, false, "hola", "adios", 2];

var texto1 = valores[3];
var texto2 = valores[4];
// Determinar cual de los dos elementos de texto es mayor
if (texto1.length > texto2.length) {
    console.log(texto1 + " es mayor que " + texto2);
} else if (texto1.length < texto2.length) {
    console.log(texto2 + " es mayor que " + texto1);
} else {
    console.log(texto1 + " y " + texto2 + " tienen el mismo tamaño.");
}

// Utilizando exclusivamente los dos valores booleanos del array, 
// determinar los operadores necesarios para obtener un resultado true y otro resultado false
var resultadoTrue = valores[0] || valores[2];  // true OR false = true
console.log("Resultado de true OR false:", resultadoTrue);

var resultadoFalse = valores[0] && valores[2];  // true AND false = false
console.log("Resultado de true AND false:", resultadoFalse);

// Determinar el resultado de las cinco operaciones matemáticas
// realizadas con los dos elementos numéricos
var num1 = valores[1];
var num2 = valores[5];

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);
console.log("Módulo o residuo:", num1 % num2);