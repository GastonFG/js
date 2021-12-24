const claseJavascript = "Curso de Javascript - Clase 4 Complementario";
console.log(claseJavascript);

//constantes
const valorVino = 300;
const iva = 21;
const descuento1 = 10;
const descuento2 = 15;
const descuento3 = 20;

//Ingresa cantidad de vinos, si compra 10 tiene 10% de descuento, si compra 20 tiene 15% de descuento, si compra 30 o más 20% de descuentos
function ingresoCantidadVinos() {
    cantidadVinos = parseInt(prompt("OFERTA VINOS $ " + valorVino + ".- + IVA x Unidad\nSi compra 10 vinos tiene " + descuento1 + "% de descuento, si compra 20 vinos tiene " + descuento2 + "% de descuento, si compra 30 o más vinos tiene " + descuento3 + "% de descuento."))
    while((cantidadVinos % 10 != 0) || (cantidadVinos  === 0)) {
        alert("No puede comprar esa cantidad de vinos, la cantidad de vinos debe ser múltiplo de 10.");
        cantidadVinos = parseInt(prompt("OFERTA VINOS $ " + valorVino + ".- + IVA x Unidad\nSi compra 10 vinos tiene " + descuento1 + "% de descuento, si compra 20 vinos tiene " + descuento2 + "% de descuento, si compra 30 o más vinos tiene " + descuento3 + "% de descuento."))
    }
}
ingresoCantidadVinos();


function ValorVinos() {
    vinosSinIVA = valorVino * cantidadVinos;
    vinosConIVA = (vinosSinIVA * iva) / 100 + vinosSinIVA;
}
ValorVinos()


//Descuento según cantidad inhgresada
function descuentoCantidad() {
    if (cantidadVinos == 10) {
        descuentoObtenido = descuento1;
    }
    else if (cantidadVinos == 20) {
        descuentoObtenido = descuento2;
    }
    else {
        descuentoObtenido = descuento3;
    }
}
descuentoCantidad();


//Total a pagar según cantidad de vinos y descuento obtenido
function total() {
    totalAPagar = vinosConIVA - ((vinosConIVA / 100) * descuentoObtenido);
    ahorro = vinosConIVA - totalAPagar;
}
total()


//Salida
document.getElementById('cantidadVinos').innerHTML = "Cantidad de vinos que va a comprar: <strong>" + cantidadVinos + " vinos</strong>";
document.getElementById('vinosSinIVA').innerHTML = "Valor de " + cantidadVinos + " vinos sin IVA: <strong>$ " + vinosSinIVA + ".-</strong>";
document.getElementById('vinosConIVA').innerHTML = "Valor de " + cantidadVinos + " vinos con IVA: <strong>$ " + vinosConIVA + ".-</strong>";
document.getElementById('descuentoObtenido').innerHTML = "Descuento obtenido: <strong>" + descuentoObtenido + "%</strong>";
document.getElementById('totalAPagar').innerHTML = "Total a pagar por " + cantidadVinos + " vinos: <strong>$ " + totalAPagar + ".- (Ahorró $ " + ahorro + ".-)</strong>";
alert("Fin del ejercicio :)");