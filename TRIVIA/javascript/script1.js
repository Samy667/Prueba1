// GUARDAR NOMBRE
const nombre = document.querySelector("#name");
   const nombreRecuperado = document.querySelector("#obtenerName");

   nombreRecuperado.textContent = localStorage.getItem("Nombre");
   
   function guardarNombre(){
        localStorage.setItem("Nombre",nombre.value);
   }





