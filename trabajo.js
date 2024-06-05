//Punto 1. 

//a.
// sueldo y la antigüedad del empleado

let sueldo = 1500
let antiguedad = 15

console.log('¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?', sueldo < 2000 && antiguedad >= 10);
console.log('¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?', sueldo < 2000 || antiguedad < 10);
console.log('¿El sueldo es mayor o igual a $2000 US?', sueldo >= 2000);

//b.
//Aniversario de tienda

// Lee el valor de la compra en COP
const compra = 100000

// Calcula el descuento si aplica
const descuento = compra >= 100000 ? compra * 0.5 : 0;

console.log(`La compra recibe un descuento de ${descuento}`);

//c.
//Multiplo de 2

const numero = 10;
const multiplo = numero % 2 === 0;

console.log(`${numero} es un múltiplo de 2: ${multiplo}`);

//d.
//Trabajador

// Datos del empleado
const nombre = "Juan Pérez";
const salarioPorHora = 3000;
const horasTrabajadas = 160;

// Calcular el salario básico mensual
const salarioMensual = salarioPorHora * horasTrabajadas;

// Determinar si recibe subsidio de transporte 
const subsidioTransporte = salarioMensual <= 700000 ? "recibe" : "no recibe";

// Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte
console.log(`Nombre del empleado: ${nombre}`);
console.log(`Salario básico mensual: ${salarioMensual}`);
console.log(`El empleado ${subsidioTransporte} subsidio de transporte.`);

//e.
//Vocal
const letra = 'a'; // Cambia esta letra para probar con otras

// Convertir la letra a minúscula para asegurar la comparación correcta
const letraMinuscula = letra.toLowerCase();

// Determinar si la letra es una vocal (sin usar if)
const esVocal = ['a', 'e', 'i', 'o', 'u'].includes(letraMinuscula);

// Mostrar en consola si la letra es una vocal
console.log(`La letra '${letra}' es una vocal: ${esVocal}`);

//f.
//Pasaporte

// Primer dígito del número de pasaporte
const primerDigitoPasaporte = 'A'; // Cambia este valor para probar con otros

// Convertir el primer dígito a mayúscula para asegurar la comparación correcta
const primerDigito = primerDigitoPasaporte.toUpperCase();

// Determinar si el turista es nacional (sin usar if)
const esNacional = primerDigito === 'A';

// Mostrar en consola si el turista es nacional
console.log(`El turista es nacional: ${esNacional}`);


//Punto 2
// Definir las variables
const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 2 * w;

// a. a / (b * c)
const resultadoA = a / (b * c);
console.log(`Resultado de a / (b * c): ${resultadoA}`);

// b. a^2 + (b^9 / 2)
const resultadoB = Math.pow(a, 2) + (Math.pow(b, 9) / 2);
console.log(`Resultado de a^2 + (b^9 / 2): ${resultadoB}`);

// c. (x + y) / (u + (w / a))
const resultadoC = (x + y) / (u + (w / a));
console.log(`Resultado de (x + y) / (u + (w / a)): ${resultadoC}`);

// d. (x / y) * (z + w)
const resultadoD = (x / y) * (z + w);
console.log(`Resultado de (x / y) * (z + w): ${resultadoD}`);

//Punto 3
//Tablas de verdad
//a.

console.log("p | q | NOT p | NOT p AND q");
console.log("-----------------------------------");

// Declaración de variables
const pTrue = true;
const qTrue = true;
const pFalse = false;
const qFalse = false;

// Proceso y mostrar resultados para todas las combinaciones de p y q
console.log(`T | T | ${!pTrue} | ${!pTrue && !qTrue}`);
console.log(`T | F | ${!pTrue} | ${!pTrue && !qFalse}`);
console.log(`F | T | ${!pFalse} | ${!pFalse && !qTrue}`);
console.log(`F | F | ${!pFalse} | ${!pFalse && !qFalse}`);

//B.
console.log("b.");
console.log("p | q | NOT p | NOT q | NOT p AND q");
console.log("-----------------------------------");


// Proceso y mostrar resultados para todas las combinaciones de p y q
console.log(`T | T | ${!pTrue} | ${!qTrue} | ${!pTrue && !qTrue}`);
console.log(`T | F | ${!pTrue} | ${!qFalse} | ${!pTrue && !qFalse}`);
console.log(`F | T | ${!pFalse} | ${!qTrue} | ${!pFalse && !qTrue}`);
console.log(`F | F | ${!pFalse} | ${!qFalse} | ${!pFalse && !qFalse}`);
