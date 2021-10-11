// Excercise 02 - Strings
/* a) - Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/
var string1 = 'Lorem ipsum dolor sit amet';
var uppercaseString1 = string1.toUpperCase();
console.log('Excercise 2.a');
console.log(`string:${string1}`);
console.log(`uppercased string:${uppercaseString1}`)
/* b) - Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
var string2 = 'Lorem ipsum dolor sit amet';
var substring2 = string2.substring(0,5);
console.log('Excercise 2.b');
console.log(`string:${string2}`);
console.log(`first five characters:${substring2}`);
/* c) - Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
var string3 = 'Lorem ipsum dolor sit amet';
var substring3 = string3.substring(string3.length-3, string3.length);
console.log('Excercise 2.c');
console.log(`string:${string3}`);
console.log(`last three characters:${substring3}`);
/* d) - Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var string4 = 'LOREM IPSUM DOLOR SIT AMET';
var newString = string4.substring(0,1).toUpperCase()+string4.substring(1).toLowerCase();
console.log('Excercise 2.d');
console.log(`string:${string4}`);
console.log(`capitalized string:${newString}`);
/* e) - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var string5 = 'Lorem ipsum dolor sit amet';
var whitSpaceIndex = string5.indexOf(' ');
console.log('Excercise 2.e');
console.log(`string:${string5}`);
console.log(`white space index:${whitSpaceIndex}`);
/* f) - Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula 
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var string6 = 'utilizar substring';
var index = string6.indexOf(' ')+1;
var myNewString = string6.substring(0,1).toUpperCase()
+string6.substring(1, index).toLowerCase()
+string6.substring(index, index+1).toUpperCase()
+string6.substring(index+1).toLowerCase();
console.log('Excercise 2.f');
console.log(`string:${string6}`);
console.log(`transformed string:${myNewString}`);