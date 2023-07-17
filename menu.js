function mostrar_menu(){
    alert(`Bienvenido a la rentadora de autos N° 1 de la patagonia \n\n + ${hoy.toLocaleString()}`)
    let flag = true;
    
    while(flag){
    
        let mensaje = "indique lo que desea hacer:";
        mensaje +="\n1.Rentar autos economicos";
        mensaje +="\n2.Rentar autos medianos";
        mensaje +="\n3.Rentar autos sedanes";
        mensaje +="\n4.Rentar autos suvs";
        mensaje +="\n5.Rentar autos pickups";
        mensaje +="\n6.Rentar autos premium";
        mensaje +="\n7.Ver flota total disponible";
        mensaje +="\n8.Crear un usuario (obteniendo 5% de descuento)";
        mensaje +="\n9. SALIR";
    
    
    
    let opcion = prompt(mensaje);
    
    switch(opcion){
    
    case "1" :
            rentar_economicos()
            break;
    case "2" :
            rentar_medianos()
            break;
    case "3" :
            rentar_sedanes()
            break;
    case "4" :
            rentar_suvs()
            break;
    case "5" :
            rentar_pickups()
            break;
    case "6" :
            rentar_premiums()
            break;
    case "7" :
            mostrar_flota()
            break;
    case "8" :
            crear_usuario()    
            break;
    case "9" :
            alert("Gracias por visitarnos, vuelva prontos")
            flag=false;
            break;
    case null :
            alert("Gracias por visitarnos, vuelva prontos")
            flag=false;
            break;
    default:
            alert("No ingresó una opción válida")
    }
    
    }
    }
    