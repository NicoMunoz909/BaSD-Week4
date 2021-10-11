//Excercise 03 - Arrays

/*  a) -Dado el siguiente 
array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Excercise 3.a');
console.log(`array: ${array}`);
console.log(`array[4]:${array[4]} array[10]:${array[10]}`);
// b) - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Excercise 3.b');
console.log(`array: ${array}`);
console.log(`sorted array: ${array.sort()}`);
// c) - Agregar un elemento al principio y al final del array (utilizar unshift y push).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.unshift('Month');
array.push('Month2');
console.log('Excercise 3.c');
console.log(`array: ${array}`);
console.log(`New array: ${array}`);
// d) - Quitar un elemento del principio y del final del array (utilizar shift y pop).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.shift();
array.pop();
console.log('Excercise 3.d');
console.log(`array: ${array}`);
console.log(`New array: ${array}`);
// e) - Invertir el orden del array (utilizar reverse).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Excercise 3.e');
console.log(`array: ${array}`);
console.log(`Reversed array: ${array.reverse()}`);
// f) - Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var arrayString = array.join('-');
console.log('Excercise 3.f');
console.log(`array: ${array}`);
console.log(`Joined array: ${arrayString}`);
// g) - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArray = array.slice(4,11);
console.log('Excercise 3.g');
console.log(`array: ${array}`);
console.log(`Sliced array: ${newArray}`);
