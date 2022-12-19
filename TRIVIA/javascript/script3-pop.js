const pop = [
    {
        pregunta: "1. ¿Quién es conocido como El rey del pop?",
        opciones: ["Robbie Williams","Justin Timberlake","Michael Jackson","Elton John"],
        correcta: 2
    },
    {
        pregunta: "2. ¿Cuál fue el primer sencillo de Rihanna?",
        opciones: ["Good Girl Gone Bad","Music of the Sun","A Girl Like Me","Unapologetic"],
        correcta: 1
    },
    {
        pregunta: "3. ¿Cómo se le dice al fandom de Taylor Swift?",
        opciones: ["Sweeties","Swifts","Swifties","Sweets"],
        correcta: 2
    },
    {
        pregunta: "4. ¿Cuántos integrantes conformaban inicialmente el grupo The Beatles?",
        opciones: ["4 integrantes","5 integrantes","3 integrantes","6 integrantes"],
        correcta: 0
    },
    {
        pregunta: "5. ¿Cuál es la cancion más escuchada de Maroon 5?",
        opciones: ["Sugar","One more night","Payphone","Moves like jagger"],
        correcta: 0
    }
]

const titulo = document.querySelector("#subContenedor__titulo");
const pregunta = document.querySelector("#subContenedor__pregunta");
const cajaOpciones = document.querySelector(".subContenedor__opciones");
const respuesta = document.querySelector("#contenedor__elemento");

var indice = 0;

window.onload = iniciarAplicacion(); 
function iniciarAplicacion(){
   console.log("Aplicacion iniciada");
   cargarPregunta();
   cargarOpciones();
}

function cargarPregunta(){
    if(indice< pop.length){
     pregunta.textContent = pop[indice].pregunta;
    }else{
       paginaRespuesta();
    }
}

function cargarOpciones(){
 if (indice < pop.length){
    for (let i = 0; i < pop[indice].opciones.length; i++) {           
         const boton = document.createElement("BUTTON"); 
         boton.textContent = pop[indice].opciones[i];
         boton.setAttribute("onclick",`verificarRespuesta(${i},${pop[indice].correcta}); siguientePregunta()`);
         boton.classList.add("subContenedor__opcion");
         cajaOpciones.appendChild(boton);  
   }
   return;
 }
}

let puntaje = 0;
function verificarRespuesta(indice,correcta){
 
    if(indice == correcta){
        puntaje = puntaje + 20 ;
    }else{
         puntaje = puntaje;
    }
   
}

function siguientePregunta(){
   indice++;
   limpiarHTML();
   cargarPregunta();
   cargarOpciones();
}

function limpiarHTML(){
  while(cajaOpciones.firstChild){
       cajaOpciones.removeChild(cajaOpciones.firstChild);
  }
}

function paginaRespuesta(){
    window.location.href= "pagina6.html";
    respuesta.innerHTML = `<div id="contenedor__elemento"> 
                           <h3 id="respuesta">Tu puntaje obtenido es: ${puntaje}</h3>
                        </div>`;

}








const reloj = document.querySelector("#cronometro");
const boton = document.querySelector("#btn");

 let s = 0;
 let m = 0;

 reloj.textContent = "00:00";


iniciarCronometro();


function iniciarCronometro(){

  let sAux , mAux ;
     
 let hora =  setInterval(()=>{

         s++;
         if(s>59){
             m++;
             s = 0;
         }

         if(m>59){
             h++;
             m=0;
         }

         if(s<10){
            sAux = "0"+s;
         }else{
             sAux = s;
         }

         if(m<10){
             mAux = "0"+m;
          }else{
              mAux = m;
          }
           
        reloj.textContent = `${mAux}:${sAux}`;
         if(s==10){
          clearInterval(hora);
           boton.disabled = true;
         }
    },1000);
   

}




