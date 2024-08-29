import { autenticarUsuario, cargarEjercicios} from "./persistencia.js";

console.log("Iniciamos Linea 3")
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const dni = document.querySelector('#username').value;
    const contraseña = document.querySelector('#password').value;

    const usuarioAutenticado = autenticarUsuario(dni, contraseña);
    console.log("llegamos hasta aqui!")
    if (usuarioAutenticado){
        sessionStorage.setItem('usuario', JSON.stringify(usuarioAutenticado));
        const rutinaUsuario = cargarEjercicios(usuarioAutenticado.codigo);
        sessionStorage.setItem('rutina', JSON.stringify(rutinaUsuario));
        alert('Redirigiendo a la pagina Rutina')
        window.location.href='rutina.html';

    }else{
        alert('Usuario o Contraseña Incorrecto. Intentalo de nuevo')
    }
})