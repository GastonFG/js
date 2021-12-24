
let claseJavascript2 = "Curso de Javascript - Clase 2";
console.log(claseJavascript2);

//Ingresa número y valido número entre 2 y 10
var elijaNumero = parseInt(prompt("Voy a adivinar tu edad. Ingresá un número del 2 al 10."));
if ((elijaNumero < 2) || (elijaNumero > 10)){
    alert("Debes ingresar un número entre 2 y 10.");
}
    
//Primer cálculo
var calculoUno = ((elijaNumero * 2) + 5) * 50;

//Condición cumpleaños y validación
var condicion = parseInt(prompt("Si este año ya cumpliste años ingresá 1, sino ingresá 2."));
if (condicion == 1) {
    var resultado = 1771 + calculoUno;
}
else if (condicion == 2) {
    var resultado = 1770 + calculoUno;
}
else {
    alert("Debes ingresar un 1 o un 2.");
}

//Ingresa año de nacimiento
var anoNacimiento = parseInt(prompt("Ingresá el año en el que naciste, ej: 1981"));

//Segundo cálculo
var calculoDos = (resultado - anoNacimiento) - (elijaNumero * 100);
alert("Tenés " + calculoDos + " años.")

//Salida
console.log("Número ingresado de 2 a 10: " + elijaNumero);
console.log("Resultado cálculo 1: " + calculoUno);
console.log("Condición: " + condicion);
console.log("Resultado cálculo 2: " + resultado);
console.log("Año de nacimiento: " + anoNacimiento);
console.log("Resultado cálculo 2: " + calculoDos);


