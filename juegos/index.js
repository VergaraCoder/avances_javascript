const $container=document.querySelectorAll(".container");

const $containerPadre=document.querySelector(".big");

const $figura=document.querySelector(".figura");
const $numero=document.querySelector(".numero");

let valor1=[];
$containerPadre.addEventListener("click",(e)=>{

    let evento=e.target;
    let data=evento.getAttribute("data-figure");
    valor1.push(data);

    if(evento.className.includes("container")){

        const hijo=evento.childNodes;
        console.log(hijo);
        hijo[1].classList.toggle("muestra");
        hijo[3].classList.toggle("figura");
        

        if(valor1[0]==valor1[1] && valor1.length==2){
            setTimeout(()=>{
                location.reload();
            },500);
        }
        else if(valor1[0]!==valor1[1] && valor1.length==2){
            setTimeout(()=>{
                location.reload();
            },500);
        }
    }
});
