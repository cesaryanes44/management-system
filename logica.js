/*
    ================================================
    EXPLICACIÓN DETALLADA DEL ARCHIVO "logica.js"
    ================================================
    Este archivo contiene la lógica JavaScript para las páginas HTML.

    Funciones para la página de Login
    Funciones para la página de Clientes
    Funciones para la página de Productos
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

    Recoge los datos del formulario y los compara con las llaves de datos.js
    si coinciden, nos deja entrar al Dashboard; si no, avisa que hubo un error.
*/
function procesarLogin() {
    // === PASO 1: Obtener los valores del formulario ===

    var usuarioInput = document.getElementById("usuario"); // Busca y guarda el elemento para poder usarlo en JavaScript.
    var contrasenaInput = document.getElementById("contrasena");
    var mensajeError = document.getElementById("mensaje-error");

    var usuarioIngresado = usuarioInput.value; // obtiene el contenido del campo de texto.
    var contrasenaIngresada = contrasenaInput.value;

    // === PASO 2: Limpiar mensajes anteriores ===

        // Reinicia el estado del formulario ocultando mensajes previos.
    mensajeError.style.display = "none";
    mensajeError.innerHTML = "";

    // === PASO 3: Validar que los campos no estén vacíos ===

    /*
        trim() Limpia espacios vacios
    */
    if (usuarioIngresado.trim() === "") {
        mostrarError("Por favor, ingresa tu nombre de usuario.");
        usuarioInput.focus(); // coloca el cursor en ese campo
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
           Registra el inicio de sesión exitoso en la memoria del navegador.
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
            Limpia la clave y regresamos el cursor al campo para reintentar
        */
        contrasenaInput.value = "";
        contrasenaInput.focus();
    }
}

/*
    FUNCIÓN: mostrarError
    Muestra un mensaje de error en la página de login.
*/
function mostrarError(texto) {
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerHTML = texto; // establece el contenido HTML
    mensajeError.style.display = "block"; // lo hace visibe
}

/*
    FUNCIÓN: verificarSesion\
    Bloquea el acceso si el usuario no ha iniciado sesión
*/
function verificarSesion() {
  
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
     elimina un dato guardado.
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
*/
function inicializarPaginaClientes() {
    // Verificar sesión
    verificarSesion();

    // Cargar clientes en la tabla
    cargarClientes();
}

/*
    FUNCIÓN: cargarClientes
    Lee los datos de clientes y genera las filas de la tabla.
*/
function cargarClientes() {
    // Obtener el elemento tbody (donde irán las filas)
    var tablaBody = document.getElementById("tabla-clientes");

    // Obtener el texto de búsqueda del filtro
    var busquedaInput = document.getElementById("busqueda-nombre");
    var textoBusqueda = busquedaInput.value;

    // Filtrar clientes usando la función de datos.js
    var clientesFiltrados = filtrarClientes(textoBusqueda);

    // Limpia la tabla
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

   Se activa cada vez que el usuario escribe en el buscador
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

    // Genera filas
    productosFiltrados.forEach(function(producto) {
        var fila = document.createElement("tr");

        // Celda de imagen
        var celdaImagen = document.createElement("td");

        // Crear el elemento img
        var img = document.createElement("img");
        img.src = producto.imagen;  // URL imagen del producto
        img.alt = producto.nombre; // nombre del producto
        img.style.width = "60px";   // Ancho de imagen en tabla
        img.style.height = "60px"; // Alto de imagen en tabla
        img.style.objectFit = "cover"; // Para que la imagen cubra el espacio sin deformarse
        img.style.borderRadius = "4px"; // Bordes redondeados

        celdaImagen.appendChild(img);

        var celdaId = document.createElement("td");
        celdaId.textContent = producto.id;

        var celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;

        var celdaCategoria = document.createElement("td");
        celdaCategoria.textContent = producto.categoria;

        var celdaPrecio = document.createElement("td");
        //Se usa la funcion de datos.js para el simbolo L
        celdaPrecio.textContent = formatearPrecio(producto.precio);

        var celdaStock = document.createElement("td");
        celdaStock.textContent = producto.stock;

        // Agregar celdas a la fila
        fila.appendChild(celdaImagen);
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

