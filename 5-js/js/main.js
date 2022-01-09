
let claseJavascript = "Curso de Javascript - Clase 5";
console.log(claseJavascript);

// CREO CLASE Y OBJETOS
class Producto {
    constructor(productoId, nombreProducto, precioProducto, stockProducto) {
        this.productoId = productoId;
        this.nombreProducto = nombreProducto.toUpperCase();
        this.precioProducto = precioProducto;
        this.stockProducto = stockProducto;
    }
    sumaIva() {
        this.precioProducto = this.precioProducto * 1.21;
    }
}

const producto1 = new Producto(1, "Coca Cola", 200, 5);
const producto2 = new Producto(2, "Pepsi", 100, 5);
const producto3 = new Producto(3, "Fernet", 500, 5);
const producto4 = new Producto(4, "Campari", 400, 5);
const producto5 = new Producto(5, "Jack Daniels", 1000, 5);

producto1.sumaIva();
producto2.sumaIva();
producto3.sumaIva();
producto4.sumaIva();
producto5.sumaIva();

// GUARDO VALOR INICIAL DE STOCK
let stockProducto1 = producto1.stockProducto;
let stockProducto2 = producto2.stockProducto;
let stockProducto3 = producto3.stockProducto;
let stockProducto4 = producto4.stockProducto;
let stockProducto5 = producto5.stockProducto;

// CARRITO
function miCarrito() {
    let carrito = prompt("Ingresá el número del producto que querés comprar: \n\n"
        + producto1.productoId + " - " + producto1.nombreProducto + " - Precio: $" + producto1.precioProducto + " - Stock: " + producto1.stockProducto + "\n"
        + producto2.productoId + " - " + producto2.nombreProducto + " - Precio: $" + producto2.precioProducto + " - Stock: " + producto2.stockProducto + "\n"
        + producto3.productoId + " - " + producto3.nombreProducto + " - Precio: $" + producto3.precioProducto + " - Stock: " + producto3.stockProducto + "\n"
        + producto4.productoId + " - " + producto4.nombreProducto + " - Precio: $" + producto4.precioProducto + " - Stock: " + producto4.stockProducto + "\n"
        + producto5.productoId + " - " + producto5.nombreProducto + " - Precio: $" + producto5.precioProducto + " - Stock: " + producto5.stockProducto + "\n\n"
        + "Escribí ESC para finalizar la compra.\n\n"
    );
    let cantidadProducto1 = producto1.stockProducto;
    let cantidadProducto2 = producto2.stockProducto;
    let cantidadProducto3 = producto3.stockProducto;
    let cantidadProducto4 = producto4.stockProducto;
    let cantidadProducto5 = producto5.stockProducto;

    // COCA COLA
    if ((carrito == producto1.productoId) && (cantidadProducto1 != 0)) {
        cantidadProducto1 = prompt("Cuántas " + producto1.nombreProducto + " querés comprar?");
        if ((cantidadProducto1 <= producto1.stockProducto) && (cantidadProducto1 != 0)) {
            while (cantidadProducto1 == 0) {
                alert("No tenemos esa cantidad, tenemos " + producto1.stockProducto + " " + producto1.nombreProducto + " en stock.");
                cantidadProducto1 = prompt("Cuántas " + producto1.nombreProducto + " querés comprar?");
            }
            producto1.stockProducto = producto1.stockProducto - cantidadProducto1;
        }
        else {
            alert("Solo tenemos " + producto1.stockProducto + " " + producto1.nombreProducto + " en stock.")
        }
        miCarrito()
    }

    // PEPSI
    else if ((carrito == producto2.productoId) && (cantidadProducto2 != 0)) {
        cantidadProducto2 = prompt("Cuántas " + producto2.nombreProducto + " querés comprar?");
        if ((cantidadProducto2 <= producto2.stockProducto) && (cantidadProducto2 != 0)) {
            while (cantidadProducto2 == 0) {
                alert("No tenemos esa cantidad, tenemos " + producto2.stockProducto + " " + producto2.nombreProducto + " en stock.");
                cantidadProducto2 = prompt("Cuántas " + producto2.nombreProducto + " querés comprar?");
            }
            producto2.stockProducto = producto2.stockProducto - cantidadProducto2;
        }
        else {
            alert("Solo tenemos " + producto2.stockProducto + " " + producto2.nombreProducto + " en stock.")
        }
        miCarrito()
    }

    // FERNET
    else if ((carrito == producto3.productoId) && (cantidadProducto3 != 0)) {
        cantidadProducto3 = prompt("Cuántas " + producto3.nombreProducto + " querés comprar?");
        if ((cantidadProducto3 <= producto3.stockProducto) && (cantidadProducto3 != 0)) {
            while (cantidadProducto3 == 0) {
                alert("No tenemos esa cantidad, tenemos " + producto3.stockProducto + " " + producto3.nombreProducto + " en stock.");
                cantidadProducto3 = prompt("Cuántas " + producto3.nombreProducto + " querés comprar?");
            }
            producto3.stockProducto = producto3.stockProducto - cantidadProducto3;
        }
        else {
            alert("Solo tenemos " + producto3.stockProducto + " " + producto3.nombreProducto + " en stock.")
        }
        miCarrito()
    }

    // CAMPARI
    else if ((carrito == producto4.productoId) && (cantidadProducto4 != 0)) {
        cantidadProducto4 = prompt("Cuántas " + producto4.nombreProducto + " querés comprar?");
        if ((cantidadProducto4 <= producto4.stockProducto) && (cantidadProducto4 != 0)) {
            while (cantidadProducto4 == 0) {
                alert("No tenemos esa cantidad, tenemos " + producto4.stockProducto + " " + producto4.nombreProducto + " en stock.");
                cantidadProducto4 = prompt("Cuántas " + producto4.nombreProducto + " querés comprar?");
            }
            producto4.stockProducto = producto4.stockProducto - cantidadProducto4;
        }
        else {
            alert("Solo tenemos " + producto4.stockProducto + " " + producto4.nombreProducto + " en stock.")
        }
        miCarrito()
    }

    // JACK DANIELS
    else if ((carrito == producto5.productoId) && (cantidadProducto5 != 0)) {
        cantidadProducto5 = prompt("Cuántas " + producto5.nombreProducto + " querés comprar?");
        if ((cantidadProducto5 <= producto5.stockProducto) && (cantidadProducto5 != 0)) {
            while (cantidadProducto5 == 0) {
                alert("No tenemos esa cantidad, tenemos " + producto5.stockProducto + " " + producto5.nombreProducto + " en stock.");
                cantidadProducto5 = prompt("Cuántas " + producto5.nombreProducto + " querés comprar?");
            }
            producto5.stockProducto = producto5.stockProducto - cantidadProducto5;
        }
        else {
            alert("Solo tenemos " + producto5.stockProducto + " " + producto5.nombreProducto + " en stock.")
        }
        miCarrito()
    }

    // FINALIZAR COMPRA - CÁLCULOS
    else if (carrito == "ESC") {
        let cocaColaVendidas = stockProducto1 - producto1.stockProducto;
        let valorCocaColaVendidas = cocaColaVendidas * producto1.precioProducto;
        let pepsiVendidas = stockProducto2 - producto2.stockProducto;
        let valorPepsiVendidas = pepsiVendidas * producto2.precioProducto;
        let fernetVendidas = stockProducto3 - producto3.stockProducto;
        let valorFernetVendidas = fernetVendidas * producto3.precioProducto;
        let campariVendidas = stockProducto4 - producto4.stockProducto;
        let valorCampariVendidas = campariVendidas * producto4.precioProducto;
        let jackDanielsVendidas = stockProducto5 - producto5.stockProducto;
        let valorJackDanielsVendidas = jackDanielsVendidas * producto5.precioProducto;
        let totalCarrito = valorCocaColaVendidas + valorPepsiVendidas + valorFernetVendidas + valorCampariVendidas + valorJackDanielsVendidas;

        alert("Compraste:\n\n"
            + cocaColaVendidas + " " + producto1.nombreProducto + " - $ " + valorCocaColaVendidas + "\n"
            + pepsiVendidas + " " + producto2.nombreProducto + " - $ " + valorPepsiVendidas + "\n"
            + fernetVendidas + " " + producto3.nombreProducto + " - $ " + valorFernetVendidas + "\n"
            + campariVendidas + " " + producto4.nombreProducto + " - $ " + valorCampariVendidas + "\n"
            + jackDanielsVendidas + " " + producto5.nombreProducto + " - $ " + valorJackDanielsVendidas + "\n\n"
            + "Total $ " + totalCarrito
        )
    }
    
    // SI EL STOCK DE UN PRODUCTO ES 0, MUESTRO MENSAJE
    else {
        if (cantidadProducto1 == 0 || cantidadProducto2 == 0 || cantidadProducto3 == 0 || cantidadProducto4 == 0 || cantidadProducto5 == 0) {
            alert("Ya no tenemos ese productos en stock.")
            miCarrito()
        }
        else {
            miCarrito()
        }
    }
}
miCarrito();