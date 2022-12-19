
const salsa = [
    {
        pregunta: "1. ¿Cual es la canción más escuchada de Daniela Darcourt?",
        opciones: ["Adios amor","Señor mentira","Te equivocaste conmigo","Probablemente"],
        correcta: 3
    },
    {
        pregunta: "2.¿Cuál es la canción más popular de Antonio cartagena?",
        opciones: ["Sin ti","Nadie quien te quiera","Nadie quien te quiere como yo","Ni si quiera"],
        correcta: 3
    },
    {
        pregunta: "3.¿Cuántos años tiene Josimar?",
        opciones: ["30 años.","35 años.","28 años.","40 años."],
        correcta: 1
    },
    {
        pregunta: "4.¿En que año fue fundadada la  agrupación SON TENTACIÓN?",
        opciones: ["2006","2010","2002","2007"],
        correcta: 2
    },
    {
        pregunta: "5.¿Cual es el mejor cantante de Salsa de todos los tiempo?",
        opciones: ["Marc Anthony","Eddie Palmieri","Héctor Lavoe","Eddie Santiago"],
        correcta: 2
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
    if(indice< salsa.length){
     pregunta.textContent = salsa[indice].pregunta;
    }else{
       paginaRespuesta();
    }
}

function cargarOpciones(){
 if (indice < salsa.length){
    for (let i = 0; i < salsa[indice].opciones.length; i++) {           
         const boton = document.createElement("BUTTON"); 
         boton.textContent = salsa[indice].opciones[i];
         boton.setAttribute("onclick",`verificarRespuesta(${i},${salsa[indice].correcta}); siguientePregunta()`);
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