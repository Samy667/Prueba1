const reggaeton = [
    {
        pregunta: "1. ¿Cuál es la cancion más escuchada de Maluma?",
        opciones: ["Hawái","Felices los 4","Cuatro Babys","Sin contrato"],
        correcta: 1
    },
    {
        pregunta: "2. ¿A quién lo conocen como El rey del reguetón?",
        opciones: ["Bad Bunny","Rauw Alejandro","Daddy Yankee","Nicky Jam"],
        correcta: 2
    },
    {
        pregunta: "3. ¿Con cuál canción Karol G ganó su primer Grammy Latino?",
        opciones: ["Culpables","Mi Cama","Créeme","Cómplices"],
        correcta: 2
    },
    {
        pregunta: "4. ¿Cuál es el primer sencillo de Becky G?",
        opciones: ["Shower","Can't Get Enough","Play It Again","Becky from the Block"],
        correcta: 3
    },
    {
        pregunta: "5. ¿Cuál es el nombre de nacimiento de J Balvin?",
        opciones: ["Jorge Alberto Rosorio Balvín","José Álvaro Osorio Balvín","Jorge ÁLvaro Osorio Balvín","José Alberto Rosorio Balvín"],
        correcta: 1
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
    if(indice< reggaeton.length){
     pregunta.textContent = reggaeton[indice].pregunta;
    }else{
       paginaRespuesta();
    }
}

function cargarOpciones(){
 if (indice < reggaeton.length){
    for (let i = 0; i < reggaeton[indice].opciones.length; i++) {           
         const boton = document.createElement("BUTTON"); 
         boton.textContent = reggaeton[indice].opciones[i];
         boton.setAttribute("onclick",`verificarRespuesta(${i},${reggaeton[indice].correcta}); siguientePregunta()`);
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
                        </div>`
}




//                                      CRONÓMETRO

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







