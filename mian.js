function calcularValorFinal() {
    // Obtener entrada del usuario
    let tipoProductoSeleccionado = prompt("Ingrese el tipo de producto (por ejemplo, 'Electrónico' o 'Ropa'):");
    let precioUnitarioProducto = Number(prompt("Ingrese el precio unitario del producto:"));
    let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));

    // Convertir las entradas a números
    precioUnitarioProducto = (precioUnitarioProducto);
    cantidadProductos = (cantidadProductos);

    const impuestoBase = 0.1; // 10%

    let descuento = 0;
    
    if (tipoProductoSeleccionado === "Electrónico") {
        descuento = 0.2; // 20%
    } else if (tipoProductoSeleccionado === "Ropa") {
        descuento = 0.1; // 10%
    }
    let precioAntesImpuestos = precioUnitarioProducto * cantidadProductos;

    let precioConDescuento = precioAntesImpuestos - (precioAntesImpuestos * descuento);

    // Calcular impuestos
    let impuestos = 0;
    for (let i = 0; i < cantidadProductos; i++) {
        impuestos += precioConDescuento * impuestoBase;
    }

    let valorFinal = precioConDescuento + impuestos;

    alert("El valor final del producto es: $" + valorFinal.toFixed(2));
}

calcularValorFinal();