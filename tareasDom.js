import { tareasNuevas } from "./tarea.js";

export const mostrarTareas = (tareasNuevas) => {
     let box_mostrar_tareas = document.getElementById("resumen_general"); //En esta variable guardaremos el div que mostrara las taresas
     let textNoTarea = document.getElementById("noTarea"); //Aqui llamaremos al elemento p que contiene un mensaje especial si no hay tareas guardadas
     
     box_mostrar_tareas.innerHTML = "";

     tareasNuevas.forEach((tarea_dom) => {
        
        const boxTarea = document.createElement("div"); //creamos un div que contendra la informacion de cada tarea

        boxTarea.setAttribute("class", "boxTarea"); //Le ponemos un atributo de tipo class para poder ponerle estilos
        
        

        const tareaTexto = document.createElement("div") //Creamos otro div para pode poner el texto

        tareaTexto.setAttribute("class", "tareaTexto"); //Le ponemos un atributo para poder ponerle estilos

        tareaTexto.innerHTML = `<p>Nombre: ${tarea_dom.titulo}</p> <p>Importancia: ${tarea_dom.importancia}</p> <p>Descripcion: ${tarea_dom.text_tarea}</p>` //Aqui le colocamos varios elementos de tipo p para mostrar la informacion de cada tarea

        boxTarea.appendChild(tareaTexto); //Al div que contendra la informacion de cada tarea le metemos este div de que contien el texto

        const btnBox = document.createElement("div") //Crearemos otro div para colocar aqui los botones para diferentes acciones
        
        btnBox.setAttribute("class", "btnBox"); 
        btnBox.setAttribute("id", "btnBoxJs"); //Le colocamos un atrbuto tipo class para poder poner estilos 

        btnBox.innerHTML = `<button class="eliminar"  data-id="${tarea_dom.id}">Eliminar</button><button class="btnEditar" data-id="${tarea_dom.id}">Editar</button> <button class="btnDetalles" data-id="${tarea_dom.id}">Detalles</button> ` //Al div le colocamos elementos tipo button 

        

        boxTarea.appendChild(btnBox); //Y con appendChild le colocamos el div que contiene los botones
        
       
        box_mostrar_tareas.appendChild(boxTarea); //Y con appendchild de nuevo le colocamos al div principal la nueva tarea

   })

}

export const textNoTarea = document.getElementById("noTarea");

export const mensajeTareas = (textNoTarea, tareasNuevas) => {
     if (tareasNuevas.length === 0){
            textNoTarea.classList.replace("inactivo_resumen", "activo_resumen");

      }
      else{
        textNoTarea.classList.replace("activo_resumen", "inactivo_resumen");  //Y aquie reemplazaremos el valor de su atributo class para colocarle otro para poder ponerle display:none y no se vea
      } 

};



export const filtroImportancia = (tareasNuevas,importancia) => {
     const tareaEncontrada = tareasNuevas.filter((tarea) => {
          
        if(tarea.importancia === importancia) {
          return tarea;

        }       
       
     })

     mostrarTareas(tareaEncontrada);



}
