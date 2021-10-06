//Excercise 03 - Arrays

/*  a) -Dado el siguiente 
array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4], array[10]);
// b) - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array.sort());
// c) - Agregar un elemento al principio y al final del array (utilizar unshift y push).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.unshift('Month');
array.push('Month2');
// d) - Quitar un elemento del principio y del final del array (utilizar shift y pop).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.shift();
array.pop();
// e) - Invertir el orden del array (utilizar reverse).

// f) - Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

// g) - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
