const claseJavascript = "Curso de Javascript - Clase 6 Complementario";
console.log(claseJavascript);

// Array productos
const producto = [
    { Id: 5, Producto: "Pan", Precio: 125 },
    { Id: 2, Producto: "Fideos", Precio: 70 },
    { Id: 1, Producto: "Arroz", Precio: 50 },
    { Id: 4, Producto: "Salchichas", Precio: 100 },
    { Id: 3, Producto: "Galletitas", Precio: 80 }
];
// Función seleccionar tipo de orden
function elijoOrden() {
    let orden = prompt("LISTADO DE PRODUCTOS: \n\n"
        + producto[0].Id + " - " + producto[0].Producto + " - precio: $" + producto[0].Precio + "\n"
        + producto[1].Id + " - " + producto[1].Producto + " - precio: $" + producto[1].Precio + "\n"
        + producto[2].Id + " - " + producto[2].Producto + " - precio: $" + producto[2].Precio + "\n"
        + producto[3].Id + " - " + producto[3].Producto + " - precio: $" + producto[3].Precio + "\n"
        + producto[4].Id + " - " + producto[4].Producto + " - precio: $" + producto[4].Precio + "\n\n"
        + "INGRESÁ EL NÚMERO SEGÚN QUIERAS ORDENAR LOS PRODUCTOS: \n\n"
        + "1 - Si querés ordenarlos por PRECIO de MENOR a MAYOR." + "\n"
        + "2 - Si querés ordenarlos por PRECIO de MAYOR a MENOR." + "\n"
        + "3 - Si querés ordenarlos por ID de MENOR a MAYOR." + "\n"
        + "4 - Si querés ordenarlos por ID de MAYOR a MENOR." + "\n"
        + "5 - Si querés ordenarlos ALFABÉTICAMENTE de la A a la Z." + "\n"
        + "6 - Si querés ordenarlos ALFABÉTICAMENTE de la Z a la A" + "\n\n"
    );
    // Ordenar por PRECIO de MENOR a MAYOR.
    if (orden == 1) {
        let precioMenorMayor = producto.slice(0);
        precioMenorMayor.sort((a, b) => {
            a = a.Precio;
            b = b.Precio;
            return a - b;
        });
        alert("Ordenar por PRECIO de MENOR a MAYOR.\n\nVER RESULTADO EN CONSOLA.");
        console.log("Ordenado por PRECIO de MENOR a MAYOR.");
        console.log(precioMenorMayor);
        console.table(precioMenorMayor);
        elijoOrden();
    }
    // Ordenar por PRECIO de MAYOR a MENOR.
    else if (orden == 2) {
        let precioMayorMenor = producto.slice(0);
        precioMayorMenor.sort((a, b) => {
            a = a.Precio;
            b = b.Precio;
            return b - a;
        });
        alert("Ordenar por PRECIO de MAYOR a MENOR.\n\nVER RESULTADO EN CONSOLA.");
        console.log("Ordenado por PRECIO de MAYOR a MENOR.");
        console.log(precioMayorMenor);
        console.table(precioMayorMenor);
        elijoOrden();
    }
    // Ordenar por ID de MENOR a MAYOR.
    if (orden == 3) {
        let idMenorMayor = producto.slice(0);
        idMenorMayor.sort((a, b) => {
            a = a.Id;
            b = b.Id;
            return a - b;
        });
        alert("Ordenar por ID de MENOR a MAYOR.\n\nVER RESULTADO EN CONSOLA.");
        console.log("Ordenado por ID de MENOR a MAYOR.");
        console.log(idMenorMayor);
        console.table(idMenorMayor);
        elijoOrden();
    }
    // Ordenar por PRECIO de MAYOR a MENOR.
    else if (orden == 4) {
        let idMayorMenor = producto.slice(0);
        idMayorMenor.sort((a, b) => {
            a = a.Id;
            b = b.Id;
            return b - a;
        });
        alert("Ordenar por ID de MAYOR a MENOR.\n\nVER RESULTADO EN CONSOLA.");
        console.log("Ordenado por ID de MAYOR a MENOR.");
        console.log(idMayorMenor);
        console.table(idMayorMenor);
        elijoOrden();
    }
    // Ordenar ALFABÉTICAMENTE de la A a la Z.
    else if (orden == 5) {
        let productoAlfabeticamenteAZ = producto.slice(0);
        productoAlfabeticamenteAZ.sort((a, b) => {
            a = a.Producto.toLowerCase();
            b = b.Producto.toLowerCase();
            //return a < b ? -1 : a > b ? 1 : 0; Esto es igual a:
            if (a < b){
                return -1;
            }
            if (a > b){
                return 1;
            }
            return 0;
        });
        alert("Ordenar ALFABÉTICAMENTE de la A a la Z.\n\nVER RESULTADO EN CONSOLA.");
        console.log("Ordenado ALFABÉTICAMENTE de la A a la Z.");
        console.log(productoAlfabeticamenteAZ);
        console.table(productoAlfabeticamenteAZ);
        elijoOrden();
    }
    // Ordenar ALFABÉTICAMENTE de la Z a la A.
    else if (orden == 6) {
        let productoAlfabeticamenteZA = producto.slice(0);
        productoAlfabeticamenteZA.sort((a, b) => {
            a = a.Producto.toLowerCase();
            b = b.Producto.toLowerCase();
            //return a < b ? 1 : a > b ? -1 : 0; Esto es igual a:
            if (a < b){
                return 1;
            }
            if (a > b){
                return -1;
            }
            return 0;
        });
        alert("Ordenar ALFABÉTICAMENTE de la Z a la A.\n\nVER RESULTADO EN CONSOLA.");
        console.log("Ordenado ALFABÉTICAMENTE de la Z a la A.");
        console.log(productoAlfabeticamenteZA);
        console.table(productoAlfabeticamenteZA);
        document.getElementById('titulo').innerHTML = "Ordenado ALFABÉTICAMENTE de la Z a la A.";
        document.getElementById('orden').innerHTML = productoAlfabeticamenteZA;
        elijoOrden();
    }
    else {
        alert("Debés ingresar un número del 1 al 6.");
        elijoOrden();
    }
}
elijoOrden();