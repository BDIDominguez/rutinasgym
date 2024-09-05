// Clase Usuario
class Usuario {
    constructor(codigo, dni, nombre, fechaPago, rutina, importe, genero, foto, nombreRutina, dias,clave) {
        this.codigo = codigo; // Número
        this.dni = dni; // Cadena
        this.nombre = nombre; // Cadena
        this.fechaPago = fechaPago; // Fecha (Date)
        this.rutina = rutina; // Número (refiere a la rutina)
        this.importe = importe; // Número con decimales
        this.genero = genero; // Booleano (true/false)
        this.foto = foto; // Cadena (ruta o URL de la foto)
        this.nombreRutina = nombreRutina; // Cadena
        this.dias = dias; // Número
        this.clave = clave;
    }
}

// Clase Ejercicio
class Ejercicio {
    constructor(codigo, nombre, series, repeticiones, foto, video, detalle) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.series = series;
        this.repeticiones = repeticiones;
        this.foto = foto;
        this.video = video;
        this.detalle = detalle;
    }

    insertarEnPagina(container) {
        // Crear elementos HTML para mostrar el ejercicio
        const ejercicioDiv = document.createElement('div');
        ejercicioDiv.classList.add('contenedor-ejercicio');

        const titulo = document.createElement('h2');
        titulo.textContent = this.nombre;

        const detalles = document.createElement('p');
        detalles.textContent = `Series: ${this.series}, Repeticiones: ${this.repeticiones}`;

        const imagen = document.createElement('img');
        imagen.src = this.foto;
        imagen.alt = this.nombre;

        const videoLink = document.createElement('iframe');
        videoLink.src = this.video;
        //videoLink.frameBorder = "0"; // Elimina el borde del iframe
        videoLink.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        videoLink.allowFullscreen = true; // Permite que el video se vea en pantalla completa

        const explicacion = document.createElement('p');
        explicacion.textContent = this.detalle

        // Agregar los elementos al contenedor del ejercicio
        ejercicioDiv.appendChild(titulo);
        ejercicioDiv.appendChild(imagen);
        ejercicioDiv.appendChild(videoLink);
        ejercicioDiv.appendChild(detalles);
        ejercicioDiv.appendChild(explicacion)
        
        // Agregar el ejercicio al contenedor principal
        container.appendChild(ejercicioDiv);
    }
}

// Clase Rutina
class Rutina {
    constructor(usuario, ejercicio, orden, dia) {
        this.usuario = usuario; // Número (refiere al código del usuario)
        this.ejercicio = ejercicio; // Número (refiere al código del ejercicio)
        this.orden = orden; // Número (orden en la rutina)
        this.dia = dia; // Número (día de la rutina)
    }
}

export {Usuario, Ejercicio, Rutina}