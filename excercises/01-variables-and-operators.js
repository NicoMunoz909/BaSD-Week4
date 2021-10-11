//Ejercico 1 - Variables y Operadores

/*Crear dos variables numéricas y utilizar el operador suma para guardar 
el valor de la suma de ambos números en una 3er variable.*/
var num1 = 15;
var num2 = 31;
var result = num1+num2;
console.log('Excercise 1.a');
console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
console.log(`result:${result}`);

//Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable
var string1 = 'Hello';
var string2 = 'World';
var concatenation = string1+string2;
console.log('Excercise 1.b');
console.log(`string1:${string1}`);
console.log(`string2:${string2}`);
console.log(`concatenation:${concatenation}`);

/*Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/
var string3 = 'Lorem';
var string4 = 'Ipsum';
var combinedLength = string3.length+string4.length;
console.log('Excercise 1.c');
console.log(`string1: ${string3} `);
console.log(`string2: ${string4}`);
console.log(`result:${combinedLength}`);