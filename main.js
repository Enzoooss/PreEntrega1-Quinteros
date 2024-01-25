let compras = prompt ("Queres comprar: Si , No?")


while (compras.toLowerCase() === 'si'){

// Función para calcular el valor final de un producto
function calcularValorFinal() {
    // Obtener entrada del usuario
    let tipoProductoSeleccionado = prompt("Elegi con Numeros: \n1 para Electronico. \n O \n 2 para Ropa.");
    let precioUnitarioProducto = Number(prompt("Ingrese el precio unitario del producto:"));
    let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));

    // Convertir las entradas a números
    precioUnitarioProducto = (precioUnitarioProducto);
    cantidadProductos = (cantidadProductos);

    // Definir impuesto base


    let descuento = 0;
    let impuestos = 0.21; // IVA

    // Aplicar descuentos basados en el tipo de producto
    if (tipoProductoSeleccionado === "1") {
        descuento = 0.2; // 20%
    } else if (tipoProductoSeleccionado === "2") {
        descuento = 0.1; // 10%
    }

    // Calcular precio antes de impuestos y descuentos

    let precioAntesImpuestos = precioUnitarioProducto * cantidadProductos;

    let precioConDescuento = precioAntesImpuestos - (precioAntesImpuestos* descuento); 
    

    // Calcular impuestos
    let valorFinal = precioConDescuento + (precioConDescuento * impuestos);

    // Mostrar resultado
    alert("El valor final del producto es: $" + valorFinal.toFixed(2));
}

calcularValorFinal();
compras =prompt('queres seguir comprando? Si:No')
}