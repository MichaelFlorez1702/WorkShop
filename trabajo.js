//Punto 1. 
//a.

// Lee el sueldo y la antigüedad del empleado
let sueldo = parseFloat(prompt('Ingrese el sueldo del empleado'));
let antiguedad = parseInt(prompt('Ingrese la antigüedad del empleado'));

console.log('¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?', sueldo < 2000 && antiguedad >= 10);
console.log('¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?', sueldo < 2000 || antiguedad < 10);
console.log('¿El sueldo es mayor o igual a $2000 US?', sueldo >= 2000);
