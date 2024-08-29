let tareas = [
    {
        id: 1,
        titulo: "Hacer compras fiesta",
        descripcion: "Comprar hamburguesas, bebida, sal",
        fecha: "2024-08-21",
    },
    {
        id: 2,
        titulo: "Médico",
        descripcion: "Dermatólogo, Dr Díaz",
        fecha: "2024-08-26",
    },
    {
        id: 3,
        titulo: "Llamar electricista",
        descripcion: "Luz cocina y chequeo",
        fecha: "2024-08-21",
    },
    {
        id: 4,
        titulo: "Veterinaria",
        descripcion: "Pagar cuota",
        fecha: "2024-08-15",
    },
];

let ultId = tareas.length ? tareas[tareas.length - 1].id : 0;
let contadorId = ultId;

function mostrarTareas() {

    const elementoLista = document.querySelector('#lista-tareas')

    if (!elementoLista) {
        console.error("El componente `#lista-tareas` no existe en el HTML");
        return
    }

    const elementosTareas = tareas.map((tarea) => {
        return `<div class="container-tarea">
                                <div>
                                    <li class="liTitulo">${tarea.titulo}
                                        <ul class="listaInterna">
                                            <li>${tarea.descripcion}</li>
                                            <li>${tarea.fecha}</li>
                                        </ul>
                                    </li>
                                </div>
                                <div class="container-tarea_opciones">
                                    <div><input type="checkbox" onchange="terminarTarea(this)" class = "check" name="tareaCheck" id="check-${tarea.id}" value="tareaCheck">
                                    </div>
                                    <div>
                                        <button onclick="eliminarTarea(${tarea.id})"><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            `
    })

    elementoLista.innerHTML = elementosTareas.join("")

}

function agregarTarea(t) {

    t.preventDefault()

    const form = t.target

    const formData = new FormData(form)
    const tarea = {}
    contadorId++
    tarea.id = contadorId

    formData.forEach((valor, clave) => tarea[clave] = valor)

    tareas.push(tarea)

    mostrarTareas()

    form.reset()
}

function terminarTarea(checkbox) {

    const divTarea = checkbox.closest('.container-tarea');

    if (checkbox.checked) {
        divTarea.classList.add("hecha")
    } else {
        divTarea.classList.remove("hecha")
    }
}


function eliminarTarea(tareaId) {
    const isConfirm = confirm("Está seguro de eliminar esta tarea?")

    if (!isConfirm) return

    tareas = tareas.filter((tarea) => tarea.id != tareaId)

    mostrarTareas()
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarTareas()

})