let pregunta=true;
let listaCompras=[];

let conteo=0;
terminacion:
while(pregunta){
    pregunta=prompt(`Dime que producto quieres agregar al carrito o presiona 2 o salir`);

    if(pregunta=="2"||pregunta=="salir")break;

    else if(pregunta.length==0 || !isNaN(pregunta)){
        while(pregunta.length==0 || !isNaN(pregunta)){
            pregunta=prompt(`Porfavor escribe un producto o presion 2 o salir`);
            if(pregunta=="2"||pregunta=="salir") break terminacion;

            else if(pregunta.length==0 || !isNaN(pregunta)){
                continue;
            }

            else{
                listaCompras.push(pregunta);
                alert(`has agregado ${listaCompras[conteo]} a la lista`);
            }
        }
    }

    else{
        listaCompras.push(pregunta);
        alert(`has agregado ${listaCompras[conteo]} a la lista`);
    }
    conteo++;
}

if(listaCompras.length==0){
    alert("No has agregado ningun producto a la lista");
}
else{
    let busqueda=true;
    while(busqueda){
       busqueda=prompt(`Hey quieres buscar algun producto?`);
       if(busqueda=="si"){
        let busqueda2=prompt("Dime un producto que quieras buscar");
        if(listaCompras.includes(busqueda2)){
            for(x of listaCompras){
                if(x==busqueda2){
                    alert(`si se encontro ${busqueda2}`);
                    // break;
                }
            }
        }
        else{
            alert("El producto no se eencuentra en la lista");
        }
       }

       else{
        break;
       }
    }
}

let eliminado=true;

while(eliminado){
    let eliminado=prompt("quieres eliminar algun producto");
    if(eliminado=="si"){
        let eliminado2=prompt("Dime que producto quieres eliminar");
        if(listaCompras.includes(eliminado2)){
            for(x of listaCompras){
                if(x==eliminado2){
                    let indice=listaCompras.indexOf(eliminado2);
                    listaCompras.splice(indice,1);
                    alert(`Se ha eliminado correctamente ${x}`);
                }
            }
            alert(`Tu lista de mercado esta con los siguientes productos--> ${listaCompras}`);
        }
        else if(listaCompras.length==0){
            alert(`Ya tu lista de compras esta vecia`);
            break;
        }

        else{
            alert(`No has agregado ${eliminado2}`);
        }
    }

    else{
        break;
    }
}


let precios={};

listaCompras.forEach(x=>{
    let precio=Math.round(Math.random()*3000);
    precios[x]=precio;
})

let container=document.querySelector(".container");
let fragmento=document.createDocumentFragment();
for(x in precios){
    let parrafo=document.createElement("H3");
    let texto=document.createTextNode(`${x} vale--> ${precios[x]}`);
    parrafo.appendChild(texto);
    fragmento.appendChild(parrafo);
}

container.appendChild(fragmento);