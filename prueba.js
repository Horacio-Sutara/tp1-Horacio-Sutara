function mostrarContenido(seccion) {
    // Primero, ocultamos todas las secciones
    const secciones = document.querySelectorAll('.contenido-seccion');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Luego, mostramos solo la sección que fue clickeada
    const contenidoSeleccionado = document.getElementById(seccion);
    contenidoSeleccionado.style.display = 'block';
}
