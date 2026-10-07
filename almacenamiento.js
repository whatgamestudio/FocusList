
export const guardadoLocal = (tareasNuevas) => {
    let json_tareas = JSON.stringify(tareasNuevas);
    window.localStorage.setItem("tareas",json_tareas);
}

export const guardadoLocalEstatico = (tareasNuevas) => {
    let tareas_guardadas =  JSON.parse(localStorage.getItem("tareas")); //Aqui convertiremos los objetos tipos json identificados como tareas a tipo javascript y lo guardaremos en tareas_guardadas
   tareas_guardadas.forEach((tarea_previa, index_tarea) => {
     tareasNuevas.push(tarea_previa);
       
    });
}


