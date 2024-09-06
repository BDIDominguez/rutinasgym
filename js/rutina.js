import { Usuario, Ejercicio } from "./objetos.js";
import { listarEjercicios, rutinaUsuario } from "./persistencia.js";

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

const usuarioGuardado = sessionStorage.getItem('usuario');
const usuario = JSON.parse(usuarioGuardado);
const lugarTitulo = document.getElementById('titulo-rutina');
const titulo = document.createElement('h1');
titulo.textContent = `Esta es tu rutina ${usuario.nombre}`
lugarTitulo.appendChild(titulo);
console.log("Nombre de Usuario: ", usuario.nombre)

const contenedor = document.getElementById('ejerciciosContainer');
const ejercicios =  await listarEjercicios();
const rutina = await rutinaUsuario(usuario.codigo);
let dia = 0;
console.log("Rutina ", rutina)
rutina.forEach(element => {
    if (element.dia > dia){
        dia = element.dia;
        const contenedorSubtitulo = document.createElement('div');
        const subtitulo = document.createElement('h2');
        subtitulo.textContent = `Dia numero ${dia} para ser como tu ${usuario.nombreRutina}`
        contenedorSubtitulo.appendChild(subtitulo);
        contenedor.appendChild(contenedorSubtitulo);
    }
    const ejercicio = ejercicios.find(ej => ej.codigo === element.ejercicio);
    if (ejercicio){
        ejercicio.insertarEnPagina(contenedor)
    } else {
        console.error(`No se encontró el ejercicio con código: ${element.ejercicio}`)
    }
});
