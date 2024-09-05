/**
 * Regresa una lista de Usuarios en la lista de usuarios.json
 * 
 * @returns {Lista} lista de usuarios
 */
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

/**
 * Comprueba que el Usuario este registrado en el archivo json por medio de su DNI y su Clave
 * 
 * @param {Number} dni - DNI del usuario
 * @param {Text} clave - Clave del Usuario
 * @returns {Usuario} si existe el usuario regresa el mismo para su uso.
 */
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


import { Ejercicio, Usuario } from "./objetos.js";
/**
 * extrae del archivo json todos los ejerciocios existentes
 * 
 * @returns lista con todos los ejercicios existentes
 */
async function listarEjercicios() {
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
            ejercicio.video,
            ejercicio.detalle
        ));
        
        return listaEjercicios;

    } catch (error) {
        console.error('Hubo un problema al cargar los Ejercicios: ',error);
        return[];
    }
    
}






// Exportar la función para su uso en otros archivos
export { autenticarUsuario, listarEjercicios };

