// Excercise 06 - Funciones
/* a) - Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable 
en la consola del navegador. */
function suma(num1, num2) {
    return num1+num2;
}
var result = suma(5,7);
console.log(`Excercise 6.a`);
console.log(result);
/* b) - A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros 
tiene error y retornar el valor NaN como resultado. */
function suma(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        alert('One of the arguments is not a number');
        return NaN;
    } else {
        return num1+num2
    }
}
console.log(`Excercise 6.b`);
console.log(suma(5,'asd'));
/* c) - Crear una función validate integer que reciba un número como parámetro y devuelva 
verdadero si es un número entero. */
function validateInteger(num) {
    if (typeof(num) === 'number' && Math.trunc(num) === num) {
        return true
    } else {
        return false
    }
}
console.log(`Excercise 6.c`);
console.log(validateInteger('asd'));
/* d) - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y 
retorna el número convertido a entero (redondeado). */
function suma(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        alert('One of the arguments is not a number');
        return NaN;
    } else if (!validateInteger(num1)) {
        alert('First number is not an integer');
        return Math.round(num1);
    } else if (!validateInteger(num2)) {
        alert('Second number is not an integer');
        return Math.round(num2);
    } else {
        return num1+num2
    }
}
console.log(`Excercise 6.d`);
console.log(suma(5,6.7));
/* e) - Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de 
la función suma probando que todo siga funcionando igual. */
function validateNumber(num) {
    if (typeof(num) !== 'number') {
        alert('This is not a number');
        return false;
    }
    return true
}
function suma(num1, num2) {
    if (!validateNumber(num1) || !validateNumber(num2)) {
        alert('One of the arguments is not a number');
        return NaN;
    } else if (!validateInteger(num1)) {
        alert('First number is not an integer');
        return Math.round(num1);
    } else if (!validateInteger(num2)) {
        alert('Second number is not an integer');
        return Math.round(num2);
    } else {
        return num1+num2
    }
}
console.log(`Excercise 6.e`);
console.log(suma(456,123));
