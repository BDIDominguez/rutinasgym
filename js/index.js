import { autenticarUsuario } from "./persistencia.js";


const form = document.querySelector('form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const dni = document.querySelector('#username').value;
    const contraseña = document.querySelector('#password').value;
    console.log("DNI  ", dni)
    console.log("Clave  ", contraseña)
    
    const usuarioAutenticado = await autenticarUsuario(dni, contraseña);
    console.log(usuarioAutenticado)
    if (usuarioAutenticado){
        sessionStorage.setItem('usuario', JSON.stringify(usuarioAutenticado));
        window.location.href='rutina.html';
    }else{
        alert('Usuario o Contraseña Incorrecto. Intentalo de nuevo')
    }
})