/*
    ================================================
    EXPLICACIÓN DETALLADA DEL ARCHIVO "datos.js"
    ================================================

    Este archivo contiene los ARREGLOS de datos que usaremos
    para simular una base de datos.

    ¿Por qué usamos arreglos en lugar de una base de datos real?
    - Es más simple para aprender
    - No requiere configuración de servidor
    - Los datos están "embebidos" en el código JavaScript

    CONTENIDO DE ESTE ARCHIVO:
    1. Credenciales de login (usuario y contraseña)
    2. Arreglo de objetos: lista de clientes
    3. Arreglo de objetos: lista de productos
*/

// ----------------------------------------
// 1. CREDENCIALES DE LOGIN
// ----------------------------------------
/*
    Las credenciales son simples variables con valores fijos.
    En una aplicación real, esto se verificarían contra una base de datos.
    Aquí usamos valores estáticos (hardcoded) para simplificar.
*/
var USUARIO_VALIDO = "admin";
var CONTRASENA_VALIDA = "12345";

/*
    ¿Qué es una variable?
    Una variable es como una caja con una etiqueta que guarda un valor.

    Sintaxis: var nombreVariable = valor;

    "var" = palabra clave que indica que estamos creando una variable
    "USUARIO_VALIDO" = nombre de la variable (las mayúsculas es convención para constantes)
    "=" = operador de asignación (guarda el valor)
    ""admin"" = el valor (en este caso, texto o "string")
*/


// ----------------------------------------
// 2. LISTA DE CLIENTES
// ----------------------------------------
/*
    Un ARREGLO DE OBJETOS es una lista donde cada elemento es un OBJETO.

    ¿Qué es un OBJETO?
    Un objeto es una colección de PROPIEDADES (datos).
    Cada propiedad tiene un NOMBRE y un VALOR.

    Sintaxis de un objeto: { propiedad1: valor1, propiedad2: valor2 }

    Ejemplo de objeto cliente:
    {
        id: 1,                    <- propiedad "id" con valor 1
        nombre: "Ana García",    <- propiedad "nombre" con valor "Ana García"
        email: "ana@rydindustrial.hn",  <- propiedad "email" con valor "ana@rydindustrial.hn"
        telefono: "555-1234"      <- propiedad "telefono" con valor "555-1234"
    }

    Un ARREGLO de objetos se crea usando corchetes [] con objetos separados por comas:
    [
        { objeto1 },
        { objeto2 },
        { objeto3 }
    ]
*/

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

/*
    ¿CÓMO ACCEDEMOS A LOS DATOS DE ESTE ARREGLO?

    1. Para acceder a un cliente específico:
       listaClientes[0]     -> {id: 1, nombre: "Ana García", ...}
       listaClientes[1]     -> {id: 2, nombre: "Luis Martínez", ...}
       listaClientes[9]      -> {id: 10, nombre: "David Moreno", ...}

    2. Para acceder a una propiedad específica:
       listaClientes[0].nombre     -> "Ana García"
       listaClientes[0].email      -> "ana.garcia@rydindustrial.hn"
       listaClientes[0].telefono   -> "555-1234"

    3. Para saber cuántos clientes hay:
       listaClientes.length        -> 10

    4. Para recorrer todos los clientes:
       listaClientes.forEach(function(cliente) {
           console.log(cliente.nombre);
       });
*/


// ----------------------------------------
// 3. LISTA DE PRODUCTOS
// ----------------------------------------
/*
    Esta es otra lista de objetos, pero con diferentes campos:
    - id: código único del producto
    - nombre: nombre del producto
    - categoria: categoría a la que pertenece
    - precio: precio unitario
    - stock: cantidad disponible

    NOTA: El campo "precio" es un número (no texto).
    NOTA: El campo "stock" también es número (para poder hacer operaciones).
*/

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
        nombre: "Aspiradora Robótica",
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

/*
    ¿CÓMO ACCEDEMOS A LOS DATOS DE ESTE ARREGLO?

    1. Para acceder a un producto específico:
       listaProductos[0]    -> {id: "PROD-001", nombre: "Laptop HP Pavilion", ...}
       listaProductos[0].nombre  -> "Laptop HP Pavilion"
       listaProductos[0].precio  -> 899.99 (número, no texto)

    2. Para acceder al precio y formatearlo como moneda:
       "$" + listaProductos[0].precio -> "$899.99"

    3. Cantidad de productos:
       listaProductos.length -> 12
*/

// ----------------------------------------
// FUNCIONES ÚTILES PARA TRABAJAR CON ARREGLOS
// ----------------------------------------

/*
    FUNCIÓN: verificarLogin

    Esta función verifica si el usuario y contraseña proporcionados
    coinciden con las credenciales válidas.

    Parámetros (datos de entrada):
    - usuario: texto con el nombre de usuario
    - contrasena: texto con la contraseña

    Retorno (dato de salida):
    - true si las credenciales son correctas
    - false si son incorrectas
*/
function verificarLogin(usuario, contrasena) {
    /*
        La condición usa === para comparación estricta.
        Esto significa que tanto el valor COMO el tipo deben ser iguales.

        "admin" === "admin"  -> true (ambos son texto "admin")
        "admin" === "Admin"  -> false (mayúscula diferente)
    */
    return usuario === USUARIO_VALIDO && contrasena === CONTRASENA_VALIDA;
}

/*
    FUNCIÓN: filtrarClientes

    Esta función busca clientes que coincidan con los criterios de búsqueda.

    Parámetros:
    - textoBusqueda: texto a buscar en nombre o ID

    Retorno:
    - Un NUEVO arreglo con los clientes que coinciden

    ¿Cómo funciona el filtrado?
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

    Convierte un número a formato de moneda con símbolo $.
    Ejemplo: 899.99 -> "$899.99"

    Parámetros:
    - precio: número que representa el precio

    Retorno:
    - texto formateado con el símbolo $ y 2 decimales
*/
function formatearPrecio(precio) {
    /*
        toFixed(2) convierte el número a texto con exactamente 2 decimales.
        899.99 -> "899.99"
        100 -> "100.00"
    */
    return "$" + precio.toFixed(2);
}

/*
    ================================================
    RESUMEN DE CONCEPTOS CLAVE
    ================================================

    1. ARREGLOS (Arrays): Colecciones ordenadas de elementos.
       Sintaxis: [elem1, elem2, elem3]

    2. OBJETOS: Colecciones de propiedades con clave-valor.
       Sintaxis: { clave1: valor1, clave2: valor2 }

    3. ARREGLO DE OBJETOS: Lista de registros.
       Sintaxis: [{prop1: val1}, {prop1: val2}]

    4. ACCESO A PROPIEDADES:
       arreglo[indice].propiedad

    5. MÉTODOS ÚTILES:
       - .length: cantidad de elementos
       - .filter(fn): crear arreglo filtrado
       - .forEach(fn): recorrer elementos
       - .includes(texto): verificar si contiene texto
       - .toLowerCase(): convertir a minúsculas
       - .toFixed(decimales): formatear números
*/
