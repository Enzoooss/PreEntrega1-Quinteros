// Función para calcular el valor final de un producto
function calcularValorFinal() {
    // Obtener entrada del usuario
    let tipoProductoSeleccionado = prompt("Ingrese el tipo de producto (por ejemplo, 'Electronico' o 'Ropa'):");
    let precioUnitarioProducto = Number(prompt("Ingrese el precio unitario del producto:"));
    let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));

    // Convertir las entradas a números
    precioUnitarioProducto = (precioUnitarioProducto);
    cantidadProductos = (cantidadProductos);

    // Definir impuesto base
    const impuestoBase = 0.1; // 10%

    let descuento = 0;

    // Aplicar descuentos basados en el tipo de producto
    if (tipoProductoSeleccionado === "Electronico") {
        descuento = 0.2; // 20%
    } else if (tipoProductoSeleccionado === "Ropa") {
        descuento = 0.1; // 10%
    }

    // Calcular precio antes de impuestos y descuentos
    let precioAntesImpuestos = precioUnitarioProducto * cantidadProductos;

    let precioConDescuento = precioAntesImpuestos - (precioAntesImpuestos * descuento);

    // Calcular impuestos
    let impuestos = 0;
    for (let i = 0; i < cantidadProductos; i++) {
        impuestos += precioConDescuento * impuestoBase;
    }

    let valorFinal = precioConDescuento + impuestos;

    // Mostrar resultado
    alert("El valor final del producto es: $" + valorFinal.toFixed(2));
}

calcularValorFinal();