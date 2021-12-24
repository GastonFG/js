
let claseJavascript2 = "Curso de Javascript - Clase 4";
console.log(claseJavascript2);


//Ingresa monto entre 10.000 y 250.000
function ingreseMonto() {
    montoPrestamo = parseInt(prompt("SIMULADOR DE PRÉSTAMO\nIngrese el monto (mínimo $ 10.000.- y máximo $ 250.000.-:"));
    while((montoPrestamo < 10000) || (montoPrestamo > 250000)) {
        alert("Debes ingresar un monto mínimo de $ 10.000.- y máximo $ 250.000.-\nIngrese solo números, no utilice puntos ni otros caracteres.");
        montoPrestamo = parseInt(prompt("SIMULADOR DE PRÉSTAMO\nIngrese el monto (mínimo $ 10.000.- y máximo $ 250.000.-:"));
    }
}
ingreseMonto();


//Ingresa cuotas entre 1 y 24
function ingreseCuotas() {
    cuotasPrestamo = parseInt(prompt("Ingrese la cantidad de cuotas para su préstamo.\n(mínimo 1 cuota y máximo 24 cuotas):"));
    while((cuotasPrestamo < 1) || (cuotasPrestamo > 24)) {
        alert("Debes ingresar la cantidad de cuotas.\n(mínimo 1 cuota y máximo 24 cuotas).\nIngrese solo números, no utilice puntos ni otros caracteres.");
        cuotasPrestamo = parseInt(prompt("Ingrese la cantidad de cuotas para su préstamo.\n(mínimo 1 cuota y máximo 24 cuotas):"));
    }
}
ingreseCuotas();


//Porcentaje según cantidad de cuotas y monto total a pagar con intereses (3% mensual)
function porcentajeSegunCuotas() {
    porcentajeCuotas = cuotasPrestamo * 3;
    totalIntereses = parseInt(montoPrestamo * porcentajeCuotas / 100);
    totalPrestamo = parseInt(montoPrestamo * porcentajeCuotas / 100 + montoPrestamo);
}
porcentajeSegunCuotas();


//Monto de cuota según cantidad
function montoFinalCuota() {
    montoCuota = parseInt(totalPrestamo / cuotasPrestamo);
}
montoFinalCuota();


//Salida
document.getElementById('montoPrestamo').innerHTML = "Monto del préstamo solicitado: <strong> $ " + montoPrestamo + ".-</strong>";
document.getElementById('cuotasPrestamo').innerHTML = "Cantidad de cuotas: <strong>" + cuotasPrestamo + " cuota/s</strong>";
document.getElementById('porcentajeCuotas').innerHTML = "Porcentaje según cantidad de cuotas: <strong>" + porcentajeCuotas + "%</strong>";
document.getElementById('totalIntereses').innerHTML = "Total intereses: <strong>$ " + totalIntereses + ".-</strong>";
document.getElementById('totalPrestamo').innerHTML = "Total préstamo más intereses: <strong>$ " + totalPrestamo + ".-</strong>";
document.getElementById('montoCuota').innerHTML = "Usted pagará <strong>" + cuotasPrestamo + " cuota/s</strong> de <strong>$ " + montoCuota + ".-</strong>";
alert("Fin del ejercicio :)");