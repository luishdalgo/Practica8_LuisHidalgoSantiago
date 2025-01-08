$(document).ready(function () {
    const colorPicker = $("#colorPicker");
    const cambiarFondoBtn = $("#cambiarFondo");
    const añadirElementoBtn = $("#añadirElemento");
    const resetearBtn = $("#resetear");
    const contenedorElementos = $(".contenedor-elementos");

    // Lista de imágenes aleatorias
    const imagenesAleatorias = ["gato.png", "oso.png", "mapache.png", "conejo.png", "tigre.png", "pedroangel.png"];

    // Cambiar el color de fondo de las imágenes
    cambiarFondoBtn.click(function () {
        const colorSeleccionado = colorPicker.val();
        $(".elemento img").css("background-color", colorSeleccionado);
    });

    // Añadir un nuevo elemento
    añadirElementoBtn.click(function () {
        const nuevoElemento = $("<div>").addClass("elemento");

        // Crear la imagen
        const nuevaImagen = $("<img>")
            .attr("src", imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)])
            .attr("alt", "Imagen Aleatoria");

        // Obtener el color de fondo actual de las imágenes
        const colorFondoActual = $(".contenedor-elementos .elemento img").first().css("background-color") || "#f9f9f9";
        nuevaImagen.css("background-color", colorFondoActual);

        // Crear los botones
        const contenedorBotones = $("<div>").addClass("botones");

        const botonCambiar = $("<button>")
            .addClass("cambiar")
            .text("Cambiar");
        const botonBorrar = $("<button>")
            .addClass("borrar")
            .text("Borrar");

        contenedorBotones.append(botonCambiar, botonBorrar);

        // Agregar imagen y botones al nuevo elemento
        nuevoElemento.append(nuevaImagen, contenedorBotones);

        // Agregar el nuevo elemento al contenedor
        contenedorElementos.append(nuevoElemento);

        // Asignar eventos a los botones del nuevo elemento
        asignarEventosBotones(botonCambiar, botonBorrar, nuevaImagen);
    });

    // Asignar eventos a los botones de cambiar y borrar
    function asignarEventosBotones(botonCambiar, botonBorrar, imagen) {
        // Cambiar la imagen aleatoriamente
        botonCambiar.click(function () {
            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];
            imagen.attr("src", imagenAleatoria);

            // Mantener el fondo actual
            const colorSeleccionado = colorPicker.val();
            imagen.css("background-color", colorSeleccionado);
        });

        // Eliminar el elemento
        botonBorrar.click(function () {
            botonBorrar.closest(".elemento").remove();
        });
    }

    // Restablecer todas las imágenes a su estado por defecto
    resetearBtn.click(function () {
        $(".elemento img").css("background-color", "transparent");
        colorPicker.val("#f9f9f9");
    });

    // Asignar eventos iniciales a los botones existentes
    $(".elemento").each(function () {
        const botonCambiar = $(this).find(".cambiar");
        const botonBorrar = $(this).find(".borrar");
        const imagen = $(this).find("img");
        asignarEventosBotones(botonCambiar, botonBorrar, imagen);
    });
});
 