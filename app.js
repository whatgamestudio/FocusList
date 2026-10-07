import {guardadoLocal,guardadoLocalEstatico} from "./almacenamiento.js";
import {mostrarTareas,mensajeTareas,textNoTarea,filtroImportanciaAlta,filtroImportanciaMedia, filtroImportanciaBaja} from "./tareasDom.js";
import { guardadoArray,tareasNuevas,eliminarTarea,editarTarea,cambios,detalleTarea} from "./tarea.js";

const agregar = document.getElementById("btn_agregar");
const modal_agregar = document.getElementById("modal_agregar"); 
const guardar = document.getElementById("guardar");  
let editable = document.getElementById("modal_editar");


agregar.addEventListener("click", () => {
    modal_agregar.showModal();
});

guardar.addEventListener("click", () => {
    
    guardadoArray(tareasNuevas);
    guardadoLocal(tareasNuevas);
    mostrarTareas(tareasNuevas);
    
    modal_agregar.close()
    console.log(tareasNuevas)
});

document.addEventListener("DOMContentLoaded", () => {
    
  guardadoLocalEstatico(tareasNuevas);
  mensajeTareas(textNoTarea, tareasNuevas);
  mostrarTareas(tareasNuevas);



})

const contenedorTareas = document.getElementById("resumen_general");

contenedorTareas.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminar")) {
    const id = event.target.dataset.id;
    if (id) {
      eliminarTarea(tareasNuevas,id);
      guardadoLocal(tareasNuevas);
      mostrarTareas(tareasNuevas);
     // mensajeTareas(tareasNuevas);
    }
  }
})


contenedorTareas.addEventListener("click", (evento) => {
  if(evento.target.classList.contains("btnEditar")){
    const id = evento.target.dataset.id;
    if (id) {
    console.log("Estas editando");
    editable.showModal();
    editarTarea(tareasNuevas,id);


  }
  }
});

const btnCambios = document.getElementById("guardarCambios");
btnCambios.addEventListener("click", () => {
     
   cambios(tareasNuevas);
   guardadoLocal(tareasNuevas);
   mostrarTareas(tareasNuevas);
   editable.close();

});


const modal_detalle = document.getElementById("modal_detalle");


contenedorTareas.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btnDetalles")) {

     const id = event.target.dataset.id;
    if (id) {
      
      modal_detalle.showModal();
      detalleTarea(tareasNuevas,id);
      console.log("Esta viendo en detalle la tarea")
    }
  }
})

const cerrarDetalle = document.getElementById("modalDetalleClose");

cerrarDetalle.addEventListener("click", () => {
  modal_detalle.close();
})

let inicio_array = document.getElementById("btn_js");
//let editable = document.getElementById("modal_editar");

inicio_array.addEventListener("click", () => {
    //console.log(tareasNuevas);
    //console.log(eliminarTarea);
    //console.log(tareasNuevas.id)
   // editable.showModal();
   mostrarTareas(tareasNuevas);
    
    

})

const botonAlta = document.getElementById("btnAlta");

botonAlta.addEventListener("click", () => {
  filtroImportanciaAlta(tareasNuevas);
  

})

const botonMedia = document.getElementById("btnMedia");

botonMedia.addEventListener("click", () => {

   filtroImportanciaMedia(tareasNuevas);
  
})

const botonBaja = document.getElementById("btnBaja");

botonBaja.addEventListener("click", () => {
   filtroImportanciaBaja(tareasNuevas);
})
