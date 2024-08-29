// Función para cargar el archivo JSON
async function cargarUsuarios() {
    try {
        const response = await fetch('../assets/usuarios.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo Usuarios.JSON');
        }
        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
        return null;
    }
}

// Función para autenticar al usuario
async function autenticarUsuario(dni, clave) {
    const usuarios = await cargarUsuarios();
    if (!usuarios) {
        return null; // No se pudieron cargar los usuarios
    }

    // Buscar el usuario por DNI y clave
    const usuario = usuarios.find(user => user.dni === dni && user.clave === clave);

    // Si se encuentra el usuario, devolver el objeto usuario
    return usuario || null;
}

import { Ejercicio } from "./objetos.js";

// Función que Extrae todos los Ejercicio
async function cargarEjercicios() {
    try {
        const response = await fetch('../assets/ejercicios.json');
        if (!response.ok){
            throw new Error('Error al cargar Ejercicios.json');
        }
        const data = await response.json();

        const listaEjercicios = data.map(ejercicio => new Ejercicio(
            ejercicio.codigo,
            ejercicio.nombreEjercicio,
            ejercicio.series,
            ejercicio.repeticiones,
            ejercicio.foto,
            ejercicio.video
        ));
        
        return listaEjercicios;

    } catch (error) {
        console.error('Hubo un problema al cargar los Ejercicios: ',error);
        return[];
    }
    
}
// Exportar la función para su uso en otros archivos
export { autenticarUsuario, cargarEjercicios };

