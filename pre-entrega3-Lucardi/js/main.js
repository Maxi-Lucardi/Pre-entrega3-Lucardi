
const formulario = document.querySelector('#formulario');
const listaTareas = document.querySelector('#lista-tareas');
let tareas = [];

llamado();

function llamado() {

    formulario.addEventListener('submit', agregarTarea)

    document.addEventListener('DOMContentLoaded', () => {
        tareas = JSON.parse(localStorage.getItem('tareas')) || [];

        console.log(tareas);

        crearHTML();

    });
}
// funcion para agregar tareas y alerta de mensaje en blanco

function agregarTarea(e) {
    e.preventDefault();

    const tarea = document.querySelector('#tarea').value;

    if (tarea === '') {
        mostrarError('No se puede agragar una tarea vacia');

        return;

    }

    const tareaObj = {
        id: Date.now(), //metodo para difenciarlo por id
        tarea: tarea

    }

    tareas = [...tareas, tareaObj];

    crearHTML();
    formulario.reset();
}
// muesra en el html un mensaje de eeror falta hacer que se borre sin tener que recargar o reiniciar 

function mostrarError(error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

}
// muestra en el html la lista

function crearHTML() {
    limpiarHTML()

    if (tareas.length > 0) {

        tareas.forEach(tarea => {

            const li = document.createElement('li');

            li.innerText = tarea.tarea;

            listaTareas.appendChild(li);

        });
    }
    sincronizar()
}
// agrega al localstorage

function sincronizar() {
    localStorage.setItem('tareas', JSON.stringify(tareas))

}

function limpiarHTML() {
    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }
}

//faltaria que no aparezca el mesaje de tarea vacia y como eliminar la tarea