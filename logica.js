/*
    ================================================
    EXPLICACIÓN DETALLADA DEL ARCHIVO "logica.js"
    ================================================

    Este archivo contiene la lógica JavaScript para las páginas HTML.

    ¿Qué significa "lógica"?
    Es el código que hace que la página SEA INTERACTIVA.
    Por ejemplo:
    - Validar el formulario de login
    - Mostrar/ocultar mensajes de error
    - Redirigir a otras páginas después del login
    - Generar las filas de la tabla dinámicamente
    - Filtrar los datos mientras el usuario escribe

    CONTENIDO DE ESTE ARCHIVO:
    1. Funciones para la página de Login
    2. Funciones para la página de Clientes
    3. Funciones para la página de Productos
*/

// ----------------------------------------
// 1. FUNCIONES PARA EL LOGIN
// ----------------------------------------

/*
    FUNCIÓN: inicializarLogin

    Configura los event listeners para el formulario de login.
    Permite iniciar sesión presionando Enter en los campos.
*/
function inicializarLogin() {
    var usuarioInput = document.getElementById("usuario");
    var contrasenaInput = document.getElementById("contrasena");

    // Agregar event listener para detectar Enter en el campo usuario
    usuarioInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar el comportamiento por defecto
            procesarLogin(); // Llamar a la función de login
        }
    });

    // Agregar event listener para detectar Enter en el campo contraseña
    contrasenaInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar el comportamiento por defecto
            procesarLogin(); // Llamar a la función de login
        }
    });
}

/*
    FUNCIÓN: procesarLogin

    Esta función se ejecuta cuando el usuario hace clic en el botón "Ingresar"
    del formulario de login.

    ¿Qué hace?
    1. Obtiene los valores de usuario y contraseña
    2. Los compara con las credenciales válidas (definidas en datos.js)
    3. Si son correctos: redirige al dashboard
    4. Si son incorrectos: muestra mensaje de error
*/
function procesarLogin() {
    // === PASO 1: Obtener los valores del formulario ===

    /*
        document.getElementById("id") obtiene un elemento HTML por su ID.
        .value obtiene el contenido del campo de texto.

        El resultado se guarda en variables (cajas temporales).
    */
    var usuarioInput = document.getElementById("usuario");
    var contrasenaInput = document.getElementById("contrasena");
    var mensajeError = document.getElementById("mensaje-error");

    var usuarioIngresado = usuarioInput.value;
    var contrasenaIngresada = contrasenaInput.value;

    // === PASO 2: Limpiar mensajes anteriores ===

    /*
        Al iniciar, ocultamos cualquier mensaje de error previo.
        Esto es importante para que no se acumulen mensajes.
    */
    mensajeError.style.display = "none";
    mensajeError.innerHTML = "";

    // === PASO 3: Validar que los campos no estén vacíos ===

    /*
        trim() elimina espacios en blanco al inicio y final del texto.
        Esto evita que el usuario ingrese solo espacios en blanco.
    */
    if (usuarioIngresado.trim() === "") {
        mostrarError("Por favor, ingresa tu nombre de usuario.");
        usuarioInput.focus(); // focus() coloca el cursor en ese campo
        return; // return termina la función inmediatamente
    }

    if (contrasenaIngresada.trim() === "") {
        mostrarError("Por favor, ingresa tu contraseña.");
        contrasenaInput.focus();
        return;
    }

    // === PASO 4: Verificar credenciales ===

    /*
        Aquí usamos la función verificarLogin() que está en datos.js.
        Esa función compara los datos ingresados con las credenciales válidas.
    */
    if (verificarLogin(usuarioIngresado, contrasenaIngresada)) {
        // === LOGIN EXITOSO ===

        /*
            localStorage es una forma de guardar datos en el navegador.
            Guardamos un "flag" (banderita) para indicar que el usuario ha iniciado sesión.
            Esto nos permitirá verificar en otras páginas si el usuario está logueado.
        */
        localStorage.setItem("loggedIn", "true");

        /*
            window.location.href = "url" redirige al usuario a otra página.
            Es como hacer clic en un enlace.
        */
        window.location.href = "dashboard.html";
    } else {
        // === LOGIN FALLIDO ===

        /*
            Si las credenciales son incorrectas, mostramos un mensaje de error.
        */
        mostrarError("Usuario o contraseña incorrectos. Intenta de nuevo.");

        /*
            También limpiamos el campo de contraseña por seguridad.
            (El usuario debe reingresar la contraseña completa.)
        */
        contrasenaInput.value = "";
        contrasenaInput.focus();
    }
}

/*
    FUNCIÓN: mostrarError

    Muestra un mensaje de error en el áreadesignada.

    Parámetros:
    - texto: el mensaje de error a mostrar
*/
function mostrarError(texto) {
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerHTML = texto; // innerHTML establece el contenido HTML
    mensajeError.style.display = "block"; // display: block hace visible el elemento
}

/*
    FUNCIÓN: verificarSesion

    Verifica si el usuario ha iniciado sesión.
    Se usa en las páginas protegidas (dashboard, clientes, productos).

    Si el usuario NO está logueado, lo redirige al login.
*/
function verificarSesion() {
    /*
        localStorage.getItem("clave") obtiene un valor guardado previamente.
        Si no existe, devuelve null.
    */
    var estaLogueado = localStorage.getItem("loggedIn");

    // Si no hay marca de login, redirigir al login
    if (estaLogueado !== "true") {
        window.location.href = "index.html";
    }
}

/*
    FUNCIÓN: cerrarSesion

    Cierra la sesión del usuario.
    Se llama cuando el usuario hace clic en "Cerrar Sesión".
*/
function cerrarSesion() {
    /*
        localStorage.removeItem("clave") elimina un dato guardado.
    */
    localStorage.removeItem("loggedIn");

    // Redirigir al login
    window.location.href = "index.html";
}


// ----------------------------------------
// 2. FUNCIONES PARA LA PÁGINA DE CLIENTES
// ----------------------------------------

/*
    FUNCIÓN: inicializarPaginaClientes

    Esta función se ejecuta cuando carga la página de clientes.
    Hace dos cosas:
    1. Verifica que el usuario esté logueado
    2. Carga la lista de clientes en la tabla
*/
function inicializarPaginaClientes() {
    // Verificar sesión
    verificarSesion();

    // Cargar clientes en la tabla
    cargarClientes();
}

/*
    FUNCIÓN: cargarClientes

    Lee los datos de clientes y genera las filas de la tabla HTML.
*/
function cargarClientes() {
    // Obtener el elemento tbody (donde irán las filas)
    var tablaBody = document.getElementById("tabla-clientes");

    // Obtener el texto de búsqueda del filtro
    var busquedaInput = document.getElementById("busqueda-nombre");
    var textoBusqueda = busquedaInput.value;

    // Filtrar clientes usando la función de datos.js
    var clientesFiltrados = filtrarClientes(textoBusqueda);

    // Limpiar la tabla (eliminar filas anteriores)
    tablaBody.innerHTML = "";

    // === GENERAR LAS FILAS ===

    /*
        forEach recorre cada elemento del arreglo.
        Para cada cliente, creamos una fila HTML <tr> con celdas <td>.
    */
    clientesFiltrados.forEach(function(cliente) {
        // Crear una fila
        var fila = document.createElement("tr");

        // Crear las celdas (columnas) de la fila
        var celdaId = document.createElement("td");
        celdaId.textContent = cliente.id; // textContent establece el texto puro

        var celdaNombre = document.createElement("td");
        celdaNombre.textContent = cliente.nombre;

        var celdaEmail = document.createElement("td");
        celdaEmail.textContent = cliente.email;

        var celdaTelefono = document.createElement("td");
        celdaTelefono.textContent = cliente.telefono;

        var celdaDireccion = document.createElement("td");
        celdaDireccion.textContent = cliente.direccion;

        // Agregar las celdas a la fila
        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEmail);
        fila.appendChild(celdaTelefono);
        fila.appendChild(celdaDireccion);

        // Agregar la fila a la tabla
        tablaBody.appendChild(fila);
    });

    // === MOSTRAR MENSAJE SI NO HAY RESULTADOS ===

    var mensajeSinResultados = document.getElementById("sin-resultados-clientes");

    if (clientesFiltrados.length === 0) {
        mensajeSinResultados.style.display = "block";
    } else {
        mensajeSinResultados.style.display = "none";
    }
}

/*
    FUNCIÓN: filtrarAlEscribir

    Se ejecuta cada vez que el usuario escribe algo en el campo de búsqueda.
    Vuelve a cargar la tabla con los resultados filtrados.

    Se conecta al evento "input" del campo de texto.
*/
function filtrarAlEscribir() {
    // Detectar qué página está activa verificando la existencia de elementos
    var tablaClientes = document.getElementById("tabla-clientes");
    var tablaProductos = document.getElementById("tabla-productos");

    if (tablaClientes) {
        // Estamos en la página de clientes
        cargarClientes();
    } else if (tablaProductos) {
        // Estamos en la página de productos
        cargarProductos();
    }
}


// ----------------------------------------
// 3. FUNCIONES PARA LA PÁGINA DE PRODUCTOS
// ----------------------------------------

/*
    FUNCIÓN: inicializarPaginaProductos

    Similar a inicializarPaginaClientes pero para productos.
*/
function inicializarPaginaProductos() {
    // Verificar sesión
    verificarSesion();

    // Cargar productos en la tabla
    cargarProductos();
}

/*
    FUNCIÓN: cargarProductos

    Lee los datos de productos y genera las filas de la tabla HTML.
*/
function cargarProductos() {
    // Obtener elementos
    var tablaBody = document.getElementById("tabla-productos");
    var busquedaInput = document.getElementById("busqueda-nombre");
    var textoBusqueda = busquedaInput.value;

    // Filtrar productos
    var productosFiltrados = filtrarProductos(textoBusqueda);

    // Limpiar tabla
    tablaBody.innerHTML = "";

    // Generar filas
    productosFiltrados.forEach(function(producto) {
        var fila = document.createElement("tr");

        var celdaId = document.createElement("td");
        celdaId.textContent = producto.id;

        var celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;

        var celdaCategoria = document.createElement("td");
        celdaCategoria.textContent = producto.categoria;

        var celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = formatearPrecio(producto.precio);

        var celdaStock = document.createElement("td");
        celdaStock.textContent = producto.stock;

        // Agregar celdas a la fila
        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCategoria);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaStock);

        // Agregar fila a la tabla
        tablaBody.appendChild(fila);
    });

    // Mostrar mensaje si no hay resultados
    var mensajeSinResultados = document.getElementById("sin-resultados-productos");

    if (productosFiltrados.length === 0) {
        mensajeSinResultados.style.display = "block";
    } else {
        mensajeSinResultados.style.display = "none";
    }
}


// ----------------------------------------
// 4. RESUMEN DE CONCEPTOS CLAVE
// ----------------------------------------

/*
    DOCUMENT OBJECT MODEL (DOM):
    Es la representación de la página HTML como objetos en JavaScript.
    Permite manipular elementos HTML desde JavaScript.

    Métodos principales del DOM:
    - document.getElementById("id") -> obtener elemento por ID
    - document.createElement("tipo") -> crear nuevo elemento
    - elemento.appendChild(child) -> agregar hijo a un elemento
    - elemento.value -> obtener valor de input
    - elemento.textContent -> obtener/establecer texto
    - elemento.innerHTML -> obtener/establecer HTML
    - elemento.style.propiedad -> modificar estilos CSS

    EVENTOS:
    Son "disparadores" que ocurren cuando el usuario interactúa.
    - onclick -> cuando se hace clic
    - oninput -> cuando se escribe en un campo
    - onload -> cuando termina de cargar la página

    LOCALSTORAGE:
    Permite guardar datos en el navegador que persisten entre visitas.
    - localStorage.setItem("clave", "valor") -> guardar
    - localStorage.getItem("clave") -> obtener
    - localStorage.removeItem("clave") -> eliminar
*/
