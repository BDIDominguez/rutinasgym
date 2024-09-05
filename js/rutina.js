import { Usuario, Ejercicio } from "./objetos.js";
import { listarEjercicios } from "./persistencia.js";

// rutina.js
/*
document.addEventListener('DOMContentLoaded', () => {
    const usuarioJSON = sessionStorage.getItem('usuario');
    const rutina =  listarEjercicios();

    if (usuarioJSON && rutina) {
        const usuario = JSON.parse(usuarioJSON);
        //const rutina = JSON.parse(rutinaJSON);

        // Mostrar el nombre del usuario
        document.getElementById('nombreUsuario').textContent = usuario.nombre;

        // Contenedor donde se van a mostrar los ejercicios
        const ejerciciosContainer = document.getElementById('ejerciciosContainer');

        // Crear y mostrar los ejercicios
        rutina.forEach(rutinaItem => {
            const ejercicio = new Ejercicio(
                rutinaItem.nombreEjercicio,
                rutinaItem.series,
                rutinaItem.repeticiones,
                rutinaItem.foto,
                rutinaItem.video
            );

            // Insertar en la página
            ejercicio.insertarEnPagina(ejerciciosContainer);
        });
    } else {
        // Si no hay datos en sessionStorage, redirigir al login
        window.location.href = 'index.html';
    }
});
*/


const rutina =  await listarEjercicios();
console.log("Ejercicios existentes ",rutina)
const contenedor = document.getElementById('ejerciciosContainer');
rutina.forEach(element => {
    element.insertarEnPagina(contenedor)
});