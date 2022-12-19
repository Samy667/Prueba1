

   const reloj = document.querySelector("#cronometro");
  const boton = document.querySelector("#btn");

   let s = 0;
   let m = 0 ;
   let h = 0;

   reloj.textContent = "00:00:00";
  

 iniciarCronometro();
  

  function iniciarCronometro(){

    let sAux , mAux , hAux;
       
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

           if(h>24){
               h=0;
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

            if(h<10){
               hAux = "0"+h;
            }else{
                hAux = h;
            }
             
          reloj.textContent = `${hAux}:${mAux}:${sAux}`;
           if(s==5){
            clearInterval(hora);
             boton.disabled = true;
           }
      },1000);
     

  }
  
