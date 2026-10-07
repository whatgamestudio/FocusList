//Funcion para guardar en el array;
export const tareasNuevas = []

export const guardadoArray  = () =>  {
        let titulo_tarea = document.getElementById("titulo_tarea").value; //Aqui guardamos el texto que coloque como titulo de la tarea
        let descripcion = document.getElementById("descripcion").value; //Aqui guardaremos el texto que coloque como descripcion de la tarea
        let importancia_op = document.getElementById("importancia_op").value;

        const tarea = {
            id: crypto.randomUUID(),
            titulo: titulo_tarea,
            text_tarea: descripcion, //Aqui crearmos un objeto que sera la tarea con las propiedaes que tendran el valor con las variables previamente hechas
            importancia: importancia_op
        }

        tareasNuevas.push(tarea);

        titulo_tarea = document.getElementById("titulo_tarea").value = ""; 
        descripcion = document.getElementById("descripcion").value = ""; 
        importancia_op = document.getElementById("importancia_op").value = "";

};



export const eliminarTarea = (tareasNuevas,id) => {
  const index = tareasNuevas.findIndex(tarea => tarea.id === id);
   if (index !== -1) {
        tareasNuevas.splice(index, 1);
    
    }
};


let tareaEditable;
let tituloNuevo;
let descripcionNueva;
let importanciaNueva;



export const editarTarea = (tareasNuevas,id) => {
    
    const index = tareasNuevas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {

        tareaEditable = tareasNuevas[index];

        tituloNuevo = document.getElementById("tituloNuevo").value = tareaEditable.titulo; //Aqui guardamos el texto que coloque como titulo de la tarea
        descripcionNueva = document.getElementById("descripcionNueva").value = tareaEditable.text_tarea; //Aqui guardaremos el texto que coloque como descripcion de la tarea
        importanciaNueva = document.getElementById("importanciaNueva").value = tareaEditable.importancia;                 
}


};


export const cambios = (tareasNuevas) => {
    tareaEditable.titulo = document.getElementById("tituloNuevo").value;
    tareaEditable.text_tarea = document.getElementById("descripcionNueva").value;
    tareaEditable.importancia = document.getElementById("importanciaNueva").value



      tareasNuevas.forEach((tareaAEditar) => {
          if (tareaAEditar.id === tareaEditable.id){
                tareaAEditar.titulo = tareaEditable.titulo;
                tareaAEditar.text_tarea = tareaEditable.text_tarea;
                tareaAEditar.importancia = tareaEditable.importancia;

            console.log(tareaAEditar);
            
          }

          
      });


       

};

const detalleContenedor = document.getElementById("detalleContenedor");
const detallaClose = document.getElementById("modalDetalleClose");

export const detalleTarea = (tareasNuevas,id) =>{
    const index = tareasNuevas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {

        let tareaDetalle = tareasNuevas[index];

        
        detalleContenedor.innerHTML = `<h2>Tarea</h2> <h4>Titulo de la tarea</h4> <p>"${tareaDetalle.titulo}" <h4>Descripcion</h4> <p>"${tareaDetalle.text_tarea}"</p> <h4>Importancia de la tarea</h4> <p>${tareaDetalle.importancia}</p>`

        detalleContenedor.appendChild(detallaClose);
    }

};


