const $container=document.querySelectorAll(".container");

const $containerPadre=document.querySelector(".big");

const $figura=document.querySelector(".figura");
const $numero=document.querySelector(".numero");

let valor1=[];
let elementos=[];
let cartas=[];
$containerPadre.addEventListener("click",(e)=>{

    let evento=e.target;
   
    
    if(evento.className.includes("container")){
        
        let data=evento.getAttribute("data-figure");
        valor1.push(data);
        cartas.push(evento);
        evento.classList.toggle("voltea");

        const hijo=evento.childNodes;
        hijo[1].classList.add("muestra");
        
        elementos.push(hijo[1]);

        if(valor1[0]==valor1[1] && valor1.length==2){
            setTimeout(()=>{
                localStorage.setItem(data,data);
                location.reload();       
            },500);
        }

        else if(valor1[0]!==valor1[1] && valor1.length==2 && elementos.length==2){
               setTimeout(()=>{
                elementos[0].classList.remove("muestra");
                elementos[1].classList.remove("muestra");

                cartas[0].classList.toggle("voltea");
                cartas[1].classList.toggle("voltea");

            cartas=[];
            elementos=[];
            valor1=[];
               },700);
        }
        console.log("la lista actual es ");
        console.log(elementos);
    }
});




const arrayParejas=["A","B","C","D","E","A","B","C","D","E"];
const salidos=[];


function desorganizar(){
   while(salidos.length<10){

     let numero=Math.round(Math.random()*10);

     let sacado=arrayParejas.splice(numero,1);

     if(sacado.length==0){
        continue;
     }
     else{
        salidos.push(sacado);
     }

   }
   if(salidos.length==10){
    return salidos;
   }
}

function showCards(){

    const lista=desorganizar();
    console.log(lista);

   lista.forEach(item=>{
    let numero=Math.round(Math.random()*10);
    salidos.push(arrayParejas[numero]);

    let vara=`${item[0]}${item[0]}`;
    const data=localStorage.getItem(vara);

    if(!data){
        $containerPadre.innerHTML+=`

        <div class="container" data-figure="${item}${item}">
        
        <div class="figura" data-figure="${item}${item}">
            ${item}
        </div>

        </div>
        `;
    }
   });
}
showCards();