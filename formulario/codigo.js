class completaDatos extends Error{
    constructor(message){
        super(message);
    }
}

class ErrorFecha extends Error{
    constructor(message){
        super(message)
    }
}


class RepeatEmail extends Error{
    constructor(message){
        super(message);
    }
}

class estructuraEmail extends Error{
    constructor(message){
        super(message);
    }
}







//ZONA DE CONTAINER



//ZONA DE INPUTS

let botonEnviado=document.querySelector(".enviado");
let inputName=document.querySelector(".texto1");
let inputCorreo=document.querySelector(".texto2");
let inputFecha=document.querySelector(".fecha");

let correos=[];
const estructura="@gmail.com";


botonEnviado.addEventListener("click",(e)=>{
    try{
        e.preventDefault();
        let valor=inputName.value;
        let valor2=inputCorreo.value;
        let valor3=inputFecha.value;
        let datos=valor3.split("-");
        let reloj=new Date();

        if(valor.length<2 || valor2.length==0){
            throw new completaDatos("COMPLETA LOS DATOS PORFAVOR");
        }
        else{
            
        if(datos[0]==reloj.getFullYear()&& datos[1]==reloj.getMonth()+1 && datos[2]==reloj.getDate()+3){
           
            if(!correos.includes(valor2)){
                let arroba=valor2.includes("@");
                let indice=valor2.indexOf("@");
                let correo=valor2.substring(indice,200);

                if(correo===estructura){
                    correos.push(valor2);
                 
                    document.querySelector(".containerModal").classList.toggle("vuelveModal");
                
                    document.querySelector(".overlayGigante").classList.toggle("expandirse");

                }
                else{
                    throw new estructuraEmail("Tu correo no tiene la estructura correcta");
                }
            }

            else{
                throw new RepeatEmail("Correo ya ingresado");}  
        }

        else{
           throw new ErrorFecha("La fecha es invalida");
        }
        }
    }
   
    catch(error){
        if(error instanceof completaDatos){
            document.querySelector(".errores").innerHTML=error.message;
        }

        else if(error instanceof ErrorFecha){  document.querySelector(".errores").innerHTML=error.message;
        }

        else if(error instanceof RepeatEmail){
            document.querySelector(".errores").innerHTML=error.message;
        }
        else if(error instanceof estructuraEmail){
            document.querySelector(".errores").innerHTML=error.message;
        }
        setTimeout(()=>{
            document.querySelector(".errores").innerHTML="";
        },1500);

}
});


let containerModal=document.querySelector(".containerModal");

let overlayGigante=document.querySelector(".overlayGigante");

containerModal.addEventListener("click",(e)=>{
    let evento=e.target;
    console.log(evento.className)
    if(evento.className=="salir"){
        containerModal.classList.toggle("vuelveModal");
        overlayGigante.classList.toggle("expandirse");
        inputName.value="";
        inputCorreo.value="";
        inputFecha.value="";
    }
});