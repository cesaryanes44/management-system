/*
    CONTENIDO DE ESTE ARCHIVO:
    1. Credenciales de login (usuario y contraseña)
    2. Arreglo de objetos: lista de clientes
    3. Arreglo de objetos: lista de productos
*/
// ----------------------------------------
// 1. CREDENCIALES DE LOGIN
// ----------------------------------------

var USUARIO_VALIDO = "admin";
var CONTRASENA_VALIDA = "12345";

// ----------------------------------------
// 2. LISTA DE CLIENTES
// ----------------------------------------

var listaClientes = [
    // Cliente 1
    {
        id: 1,
        nombre: "Ana García",
        email: "ana.garcia@rydindustrial.hn",
        telefono: "555-1234",
        direccion: "San pedro Sula, Honduras",
        fechaRegistro: "2024-01-15"
    },

    // Cliente 2
    {
        id: 2,
        nombre: "Luis Martínez",
        email: "luis.martinez@rydindustrial.hn",
        telefono: "555-5678",
        direccion: "Villanueva, Honduras",
        fechaRegistro: "2024-02-20"
    },

    // Cliente 3
    {
        id: 3,
        nombre: "María López",
        email: "maria.lopez@rydindustrial.hn",
        telefono: "555-9012",
        direccion: "Zip, Bufalo, Honduras",
        fechaRegistro: "2024-03-10"
    },

    // Cliente 4
    {
        id: 4,
        nombre: "Carlos Rodríguez",
        email: "carlos.rodriguez@rydindustrial.hn",
        telefono: "555-3456",
        direccion: "Dos caminos, Honduras",
        fechaRegistro: "2024-04-05"
    },

    // Cliente 5
    {
        id: 5,
        nombre: "Laura Fernández",
        email: "laura.fernandez@rydindustrial.hn",
        telefono: "555-7890",
        direccion: "Choloma, Cortes, Honduras",
        fechaRegistro: "2024-05-18"
    },

    // Cliente 6
    {
        id: 6,
        nombre: "Pedro Sánchez",
        email: "pedro.sanchez@rydindustrial.hn",
        telefono: "555-2345",
        direccion: "Puerto Cortes, Honduras",
        fechaRegistro: "2024-06-22"
    },

    // Cliente 7
    {
        id: 7,
        nombre: "Sofia Torres",
        email: "sofia.torres@rydindustrial.hn",
        telefono: "555-6789",
        direccion: "Santa Rosa de Copán, Honduras",
        fechaRegistro: "2024-07-08"
    },

    // Cliente 8
    {
        id: 8,
        nombre: "Miguel Ramírez",
        email: "miguel.ramirez@rydindustrial.hn",
        telefono: "555-0123",
        direccion: "Chumbagua, Honduras",
        fechaRegistro: "2024-08-30"
    },

    // Cliente 9
    {
        id: 9,
        nombre: "Isabel Castro",
        email: "isabel.castro@rydindustrial.hn",
        telefono: "555-4567",
        direccion: "La Lima, Honduras",
        fechaRegistro: "2024-09-14"
    },

    // Cliente 10
    {
        id: 10,
        nombre: "David Moreno",
        email: "david.moreno@rydindustrial.hn",
        telefono: "555-8901",
        direccion: "El Progreso, Honduras",
        fechaRegistro: "2024-10-25"
    }
];

// ----------------------------------------
// 3. LISTA DE PRODUCTOS
// ----------------------------------------

var listaProductos = [
    // Producto 1
    {
        id: "PROD-001",
        nombre: "Laptop HP Pavilion",
        categoria: "Electrónica",
        precio: 899.99,
        stock: 15
    },

    // Producto 2
    {
        id: "PROD-002",
        nombre: "Mouse Inalámbrico",
        categoria: "Electrónica",
        precio: 24.99,
        stock: 50
    },

    // Producto 3
    {
        id: "PROD-003",
        nombre: "Teclado Mecánico RGB",
        categoria: "Electrónica",
        precio: 79.99,
        stock: 30
    },

    // Producto 4
    {
        id: "PROD-004",
        nombre: "Monitor 24 Pulgadas",
        categoria: "Electrónica",
        precio: 199.99,
        stock: 20
    },

    // Producto 5
    {
        id: "PROD-005",
        nombre: "Escritorio de Oficina",
        categoria: "Muebles",
        precio: 249.99,
        stock: 8
    },

    // Producto 6
    {
        id: "PROD-006",
        nombre: "Silla Ergonómica",
        categoria: "Muebles",
        precio: 349.99,
        stock: 12
    },

    // Producto 7
    {
        id: "PROD-007",
        nombre: "Impresora Láser",
        categoria: "Oficina",
        precio: 149.99,
        stock: 5
    },

    // Producto 8
    {
        id: "PROD-008",
        nombre: "Paquete de Papel A4",
        categoria: "Oficina",
        precio: 12.99,
        stock: 100
    },

    // Producto 9
    {
        id: "PROD-009",
        nombre: "Cafetera Automática",
        categoria: "Hogar",
        precio: 89.99,
        stock: 25
    },

    // Producto 10
    {
        id: "PROD-010",
        nombre: "Refrigeradora",
        categoria: "Hogar",
        precio: 299.99,
        stock: 18
    },

    // Producto 11
    {
        id: "PROD-011",
        nombre: "Auriculares Bluetooth",
        categoria: "Electrónica",
        precio: 59.99,
        stock: 45
    },

    // Producto 12
    {
        id: "PROD-012",
        nombre: "Webcam HD 1080p",
        categoria: "Electrónica",
        precio: 49.99,
        stock: 35
    }
];

// ----------------------------------------
// FUNCIONES ÚTILES PARA TRABAJAR CON ARREGLOS
// ----------------------------------------

function verificarLogin(usuario, contrasena) { //verfifica si el usuario y contrasena son validas
   
    
    return usuario === USUARIO_VALIDO && contrasena === CONTRASENA_VALIDA; //Comparacion estricta si o su valores iguales.
}

/*
    FUNCIÓN: filtrarClientes
    busca clientes que coincidan con los criterios de búsqueda
    - textoBusqueda: texto a buscar en nombre o ID
    Retorno: Un NUEVO arreglo con los clientes que coinciden

    1. El método filter() recorre cada elemento del arreglo
    2. Para cada elemento (cada cliente), ejecuta la función de prueba
    3. Si la función devuelve true, el elemento se incluye en el resultado
    4. Si la función devuelve false, el elemento se exclude del resultado
*/
function filtrarClientes(textoBusqueda) {
    // Si no hay texto de búsqueda, devolver todos los clientes
    if (textoBusqueda === "") {
        return listaClientes;
    }

    // Convertir el texto a minúsculas para búsqueda sin distinción de mayúsculas
    var textoMinuscula = textoBusqueda.toLowerCase();

    // filter() crea un nuevo arreglo con los elementos que cumplen la condición
    return listaClientes.filter(function(cliente) {

        // Incluir si el ID contiene el texto O si el nombre contiene el texto
        // toString() convierte el número ID a texto
        // includes() verifica si el texto está contenido en la cadena

        var idContieneTexto = cliente.id.toString().includes(textoMinuscula);
        var nombreContieneTexto = cliente.nombre.toLowerCase().includes(textoMinuscula);

        // Devolver true si AL MENOS una de las dos condiciones es verdadera
        return idContieneTexto || nombreContieneTexto;
    });
}

/*
    FUNCIÓN: filtrarProductos

    Similar a filtrarClientes, pero para productos.
    Busca por ID de producto O por nombre.

    La diferencia es que el ID del producto ya es texto (como "PROD-001"),
    mientras que el ID del cliente es un número.
*/
function filtrarProductos(textoBusqueda) {
    // Si no hay texto de búsqueda, devolver todos los productos
    if (textoBusqueda === "") {
        return listaProductos;
    }

    // Convertir a minúsculas para comparación sin distinción de mayúsculas
    var textoMinuscula = textoBusqueda.toLowerCase();

    // Filtrar productos
    return listaProductos.filter(function(producto) {
        var idContieneTexto = producto.id.toLowerCase().includes(textoMinuscula);
        var nombreContieneTexto = producto.nombre.toLowerCase().includes(textoMinuscula);

        return idContieneTexto || nombreContieneTexto;
    });
}

/*
    FUNCIÓN: formatearPrecio
    Convierte un número a formato de moneda con símbolo.
*/
function formatearPrecio(precio) {

    return "L" + precio.toFixed(2); //convierte el numero a texto con 2 decimales
}

