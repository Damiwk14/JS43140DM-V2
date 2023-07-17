
// PENDIENTES: 
//APLICAR EL FIND PARA QUE ME BUSQUE LOS ID´S DE LOS AUTOS
// Y QUE NO ME DEJE AVANZAR SI NO USO ALGUNO DE LOS ID DE LOS SUB-ARREGLOS
// Y APLICAR A LAS 6 CATEGORÍAS
//  CAMBIAR NOMBRE MOSTRAR POR ALQUILAR 


const hoy = new Date() 
let usuarioCreado = false;
mostrar_menu()


//caso 1
function rentar_economicos(){

    let elegido = parseInt( prompt(`Ingrese el número de auto que desea alquilar\n${id_economicos[0]}. ${nombres_economicos[0]}\n${id_economicos[1]}. ${nombres_economicos[1]}\n${id_economicos[2]}. ${nombres_economicos[2]}\n${id_economicos[3]}. ${nombres_economicos[3]}`))
        
            if(elegido){ 
                let auto_elegido = economicos.find((a) => a.id === elegido);
                if(auto_elegido){
                    calcular_economicos();
    }
                    else{alert("Debe ingresar un auto válido")
                    rentar_economicos()}
                         
            }            }

//caso 2
function rentar_medianos(){

    let elegido = parseInt( prompt(`Ingrese el número de auto que desea alquilar\n${id_medianos[0]}. ${nombres_medianos[0]}\n${id_medianos[1]}. ${nombres_medianos[1]}\n${id_medianos[2]}. ${nombres_medianos[2]}\n${id_medianos[3]}. ${nombres_medianos[3]}`))
    
            if(elegido){ 
                let auto_elegido = medianos.find((a) => a.id === elegido);
                if(auto_elegido){
                    calcular_medianos();
}
                else{alert("Debe ingresar un auto válido") 
                rentar_medianos() }       
        }            }

//caso 3
function rentar_sedanes(){

    let elegido = parseInt( prompt(`Ingrese el número de auto que desea alquilar\n${id_sedanes[0]}. ${nombres_sedanes[0]}\n${id_sedanes[1]}. ${nombres_sedanes[1]}\n${id_sedanes[2]}. ${nombres_sedanes[2]}\n${id_sedanes[3]}. ${nombres_sedanes[3]}`))
        
            if(elegido){ 
                let auto_elegido = sedanes.find((a) => a.id === elegido);
                if(auto_elegido){
                    calcular_sedanes();

    }
                   else{ alert("Debe ingresar un auto válido")  
                    rentar_sedanes()     } 
            }            }


// caso 4
function rentar_suvs(){

    let elegido = parseInt( prompt(`Ingrese el número de auto que desea alquilar\n${id_suvs[0]}. ${nombres_suvs[0]}\n${id_suvs[1]}. ${nombres_suvs[1]}\n${id_suvs[2]}. ${nombres_suvs[2]}\n${id_suvs[3]}. ${nombres_suvs[3]}`))
        
            if(elegido){ 
                let auto_elegido = suvs.find((a) => a.id === elegido);
                if(auto_elegido){
                    calcular_suvs();

    }
                    else {alert("Debe ingresar un auto válido")
                    rentar_suvs()   }    
            }            }



//caso 5
function rentar_pickups(){

    let elegido = parseInt( prompt(`Ingrese el número de auto que desea alquilar\n${id_pickups[0]}. ${nombres_pickups[0]}\n${id_pickups[1]}. ${nombres_pickups[1]}\n${id_pickups[2]}. ${nombres_pickups[2]}\n${id_pickups[3]}. ${nombres_pickups[3]}`))
        
            if(elegido){ 
                let auto_elegido = pickups.find((a) => a.id === elegido);
                if(auto_elegido){
                    calcular_pickups();

    }
                    else {alert("Debe ingresar un auto válido")
                    rentar_pickups() }     
            }            }


// caso 6
function rentar_premiums(){

    let elegido = parseInt( prompt(`Ingrese el número de auto que desea alquilar\n${id_premiums[0]}. ${nombres_premiums[0]}\n${id_premiums[1]}. ${nombres_premiums[1]}\n${id_premiums[2]}. ${nombres_premiums[2]}\n${id_premiums[3]}. ${nombres_premiums[3]}`))
        
            if(elegido){ 
            let auto_elegido = premiums.find((a) => a.id === elegido);
            if(auto_elegido){
                calcular_premiums();

    }
                else {alert("Debe ingresar un auto válido")
                rentar_premiums()    }   
            }            }


// caso 7
function mostrar_flota(){
    let flota = "Los autos disponibles son";

    autos.forEach( (auto) =>{
        flota+="\n" + auto.mostrar_descripcion();

    })
alert(flota);

}   



// caso 8

function crear_usuario (){

    let usuario = solicitar_datos_usuario();
       if(usuario){ 
         usuarios.push(usuario);        
            alert("usuario creado con exito!")
  
    }
}