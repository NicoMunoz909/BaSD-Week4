// Excercise 06 - Funciones
/* a) - Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable 
en la consola del navegador. */
function suma(num1, num2) {
    return num1+num2;
}
var result = suma(5,7);
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
/* c) - Crear una función validate integer que reciba un número como parámetro y devuelva 
verdadero si es un número entero. */

/* d) - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y 
retorna el número convertido a entero (redondeado). */

/* e) - Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de 
la función suma probando que todo siga funcionando igual. */
