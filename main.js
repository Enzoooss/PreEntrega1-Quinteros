    // Definir una clase para representar un producto
    class Producto {
        constructor(nombre, tipo, precio, cantidad) {
            this.nombre = nombre;
            this.tipo = tipo;
            this.precio = precio;
            this.cantidad = cantidad;
        }
        }
    
        // Definir una función para calcular el valor final de un producto
        function calcularValorFinal(producto) {
        let descuento;
        if (producto.tipo === "electronico") {
            descuento = 0.2; // 20% de descuento
        } else if (producto.tipo === "ropa") {
            descuento = 0.1; // 10 % de descuento
        } else { 
            descuento = 0;
        }
        let impuestos = 0.21; // IVA
        let precioAntesImpuestos = producto.precio * producto.cantidad;
        let precioConDescuento =
            precioAntesImpuestos - precioAntesImpuestos * descuento;
        let valorFinal = precioConDescuento + precioConDescuento * impuestos;
        return valorFinal;
        }
    
        //Array vacío para almacenar los productos
        let productos = [];
    
        // Función para agregar un producto al array
        function agregarProducto() {
        let nombre = prompt("Ingrese el nombre del producto:");
        let tipo = prompt("Ingrese el tipo de producto (Electronico o Ropa):").toLowerCase().trim();
        let precio = Number(prompt("Ingrese el precio unitario del producto:"));
        let cantidad = Number(prompt("Ingrese la cantidad de productos:"));
        productos.push(new Producto(nombre, tipo, precio, cantidad));
        }
    
        // Función para mostrar el valor final de todos los productos
        function mostrarValorFinal() {
        let resultado = "";
        productos.forEach((producto) => {
            let valorFinal = calcularValorFinal(producto);
            resultado += `El valor final del producto ${
            producto.nombre
            } es: $${valorFinal.toFixed(2)}\n`;
        });
        alert(resultado);
        }
    
        // Función filtrar productos por tipo
        function filtrarPorTipo(tipo) {
        return productos.filter((producto) => producto.tipo === tipo);
        }
    
        // Función para buscar un producto por nombre
        function buscarPorNombre(nombre) {
        return productos.find((producto) => producto.nombre === nombre);
        }
    
        // Función para mostrar todos los productos
        function mostrarProductos() {
        let listaProductos = productos.map(
            (producto) =>
            `Nombre: ${producto.nombre}, Tipo: ${producto.tipo}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}  `
        );
        alert("Lista de productos:\n" + listaProductos.join("\n"));
        }
    
        // Ciclo principal
        let compras;
        do {
        compras = prompt("¿Quieres comprar? (Si, No)");
        if (compras.toLowerCase() === "si") {
            agregarProducto();
        }
        } while (compras.toLowerCase() === "si");
    
        mostrarProductos();
    
        mostrarValorFinal();
    