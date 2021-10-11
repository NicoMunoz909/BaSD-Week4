// Excercise 04 - If Else
/* a) - Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino 
un alerta con el mensaje “Lower than 0,5”.*/
var randomNumber = Math.random();
if (randomNumber >= 0.5) {
    alert('Greater than 0,5')
} else {
    alert('Lower than 0,5')
}
console.log(`Excercise 4.a`);
console.log(`Random number: ${randomNumber}`);
/* b) - Crear una variable “Age” que contenga un número entero entre 0 y 100 y 
muestre los siguientes mensajes de alerta:
    i)  “Bebe” si la edad es menor a 2 años;
    ii) “Nino” si la edad es entre 2 y 12 años;
    iii)“Adolescente” entre 13 y 19 años;
    iv) “Joven” entre 20 y 30 años;
    v)  “Adulto” entre 31 y 60 años;
    vi) “Adulto mayor” entre 61 y 75 años;
    vii)“Anciano” si es mayor a 75 años. */

var age = Math.trunc(Math.random()*100);
if (age < 2) {
    alert('Bebe');
} else if (age <= 12) {
    alert('Nino')
} else if (age <= 19) {
    alert('Adolescente')
} else if (age <= 30) {
    alert('Joven')
} else if (age <= 60) {
    alert('Adulto')
} else if (age <= 75) {
    alert('Adulto mayor')
} else {
    alert('Anciano')
}
console.log(`Excercise 4.b`);
console.log(`Age: ${age}`);
