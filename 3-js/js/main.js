
let claseJavascript2 = "Curso de Javascript - Clase 3";
console.log(claseJavascript2);


//Ingresa número y hago un WHILE para validar que el número este entre 2 y 10
let elijaNumero = parseInt(prompt("Voy a adivinar tu edad. Ingresá un número del 2 al 10."));
while((elijaNumero < 2) || (elijaNumero > 10)) {
    alert("Debes ingresar un número entre 2 y 10.");
    elijaNumero = parseInt(prompt("Voy a adivinar tu edad. Ingresá un número del 2 al 10."));
}
console.log("Número ingresado de 2 a 10: " + elijaNumero);


//Primer cálculo
let calculoUno = ((elijaNumero * 2) + 5) * 50;
console.log("Resultado calculoUno: " + calculoUno);


//Hago un WHILE para validar que el número sea un 1 o un 2
let condicion = parseInt(prompt("Si este año ya cumpliste años ingresá 1, sino ingresá 2."));
while((condicion != 1) && (condicion != 2)) {
    alert("Debes ingresar un 1 o un 2.");
    condicion = parseInt(prompt("Si este año ya cumpliste años ingresá 1, sino ingresá 2."));
}


//Condición cumpleaños (1 ya cumplió años, 2 no cumplió, cambio valor de la letiable "resultado")
if (condicion == 1) {
    resultado = 1771 + calculoUno;
}
else {
    resultado = 1770 + calculoUno;
}
console.log("Condicion: " + condicion + " - Valor condición: " + (resultado - calculoUno));
console.log("Resultado de valor de condicion + calculoUno: " + resultado);

//Hago un WHILE para validar que el año de nacimiento no sea anterior a 1900 o posterior al 2020
let anoNacimiento = parseInt(prompt("Ingresá el año en el que naciste, ej: 1981"));
while((anoNacimiento < 1900) || (anoNacimiento > 2020)) {
    alert("Debes ingresar tu año de nacimiento correctamente, ingresa 4 dígitos, ej: 1981.");
    anoNacimiento = parseInt(prompt("Ingresá el año en el que naciste, ej: 1981"));
}
console.log("Año de nacimiento: " + anoNacimiento);

//Segundo cálculo
let calculoDos = (resultado - anoNacimiento) - (elijaNumero * 100);
alert("Tenés " + calculoDos + " años.");
console.log("Resultado calculoDos (obtengo edad): " + calculoDos);


//FOR que suma 5 veces 10 años a la edad actual
for (let i = 1; i <= 5; i++) {
    let edadObtenida = calculoDos;
    alert(i + " - " + "En " + (i * 10) + " años más vas a tener " + (edadObtenida + (i * 10)) + " años.");
    console.log("Edad más " + (i * 10) + " años: " + (calculoDos + (i * 10)));
}
alert("Fin del ejercicio :)");
console.log("Fin del ejercicio :)");