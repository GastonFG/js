const claseJavascript = "Curso de Javascript - Clase 6";
console.log(claseJavascript);

// Creo el array "arrayProductos" que contiene los productos que se venden
const arrayProductos = [
    { Id: 1, Producto: "Pan", Precio: 125, Stock: 10 },
    { Id: 2, Producto: "Fideos", Precio: 70, Stock: 10 },
    { Id: 3, Producto: "Coca Cola", Precio: 200, Stock: 10 },
    { Id: 4, Producto: "Cerveza", Precio: 250, Stock: 10 },
    { Id: 5, Producto: "Arroz", Precio: 70, Stock: 10 },
    { Id: 6, Producto: "Mayonesa", Precio: 220, Stock: 10 }
];

// Muestro los productos en el HTML
let recorreArrayProdcutos = arrayProductos => {
    for (item of arrayProductos) {
        document.getElementById('productos').innerHTML += "Id: <b>" + `${item.Id}` + "</b> - Producto: <b>" + `${item.Producto}` + "</b> - Stock: <b>" + `${item.Stock}` + "</b> - Producto: <b>" + `${item.Producto}` + "</b> - Precio: <b>$ " + `${item.Precio}` + "</b> <br>";
    }
}
recorreArrayProdcutos(arrayProductos);

// Genero el carrito y total en el HTML
let recorreArrayCarrito = carritoArray => {
    for (item of carritoArray) {
        console.log(item);
        document.getElementById('carrito').innerHTML += "</b>Cantidad: <b>" + `${item.Comprados}` + "</b> - Producto: <b>" + `${item.Producto}` + "</b> - <b>$ " + `${item.Precio}` + "</b> <br>";
    }
    let total = carritoArray.reduce((sum, value) => (typeof value.Precio == "number" ? sum + value.Precio : sum), 0);
    document.getElementById('total').innerHTML += "$ " + total;
}

// Creo la clase "Producto" para el array "carritoArray"
class Producto {
    constructor(Id, Producto, Precio, Comprados) {
        this.Id = Id;
        this.Producto = Producto;
        this.Precio = Precio;
        this.Comprados = Comprados;
    }
}

// Creo el array "carritoArray" que guardará los productos comprados
let carritoArray = [];

// Creo la función "miCarrito()" que es la que interactúa con ambos arrays
function miCarrito() {

    // Ingreso de datos de el cliente
    let productoSeleccionado = parseInt((prompt("Ingrese el Id del producto que quiere comprar:")) - 1);
    let cantidadSeleccionada = parseInt(prompt("Cantidad: \n\n"));

    // Limpio el HTML cada vez que se llama a "miCarrito()" para que se actualice el contenido
    document.getElementById("carrito").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    document.getElementById("productos").innerHTML = "";

    // Creo la variable "idProductoSeleccionado" igual "productoSeleccionado + 1" para equiparar el valor 0 de posición con el Id del producto
    let idProductoSeleccionado = productoSeleccionado + 1;

    // Obtengo el Id del producto que sea igual a "idProductoSeleccionado"
    objIndex = carritoArray.findIndex(objeto => objeto.Id == idProductoSeleccionado);

    // Si el Id del producto SI existe en "carritoArray" actualizo precio y cantidad
    if ((objIndex + 1) != 0) {

        // Guardo subtotal del producto precio x cantidad
        carritoArray[objIndex].Precio = arrayProductos[productoSeleccionado].Precio * cantidadSeleccionada;
        carritoArray[objIndex].Comprados = cantidadSeleccionada; // Guardo la cantidad comprada

        // Actualizo stock en "arrayProductos"
        objIndex2 = arrayProductos.findIndex((objeto => objeto.Id == idProductoSeleccionado));
        cantidadSeleccionadaAnteriormente = cantidadSeleccionada;
        arrayProductos[objIndex2].Stock = arrayProductos[productoSeleccionado].Stock - cantidadSeleccionada + cantidadSeleccionadaAnteriormente; 
        recorreArrayProdcutos(arrayProductos);
    }
    // Si el Id del producto NO existe en "carritoArray" modifico precio y cantidad
    else {
        // Guardo subtotal del producto, precio x cantidad
        let precioSegunCantidad = arrayProductos[productoSeleccionado].Precio * cantidadSeleccionada;

        // Creo producto en "carritoArray"
        let producto = new Producto(arrayProductos[productoSeleccionado].Id, arrayProductos[productoSeleccionado].Producto, precioSegunCantidad, cantidadSeleccionada)
        carritoArray.push(producto);

        // Obtengo el Id del producto que sea igual a "idProductoSeleccionado"
        objIndex = carritoArray.findIndex((objeto => objeto.Id == idProductoSeleccionado)); 

        // Actualizo stock en "arrayProductos"
        objIndex2 = arrayProductos.findIndex((objeto => objeto.Id == idProductoSeleccionado));
        arrayProductos[objIndex2].Stock = arrayProductos[productoSeleccionado].Stock - cantidadSeleccionada; 
        recorreArrayProdcutos(arrayProductos);
    }
    //Muestro y actualizo carrito
    recorreArrayCarrito(carritoArray); 
    miCarrito()
}
miCarrito()