

function calcular_economicos(){

    let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
    while (dias == null || /\D/.test(dias) || dias == "") {
        dias = prompt("Ingrese un valor numérico para los días: ");
    };

    let costo = economicos[0].precio
    let costoTotal = costo*dias
    if (usuarios.length!=0){
        costoTotal=(costoTotal*0.95)
    }
    alert(`el costo total es ARS ${costoTotal} por ${dias} días \n Muchas gracias!`)

}

function calcular_medianos(){

    let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
    while (dias == null || /\D/.test(dias) || dias == "") {
        dias = prompt("Ingrese un valor numérico para los días: ");
    };

    let costo = medianos[0].precio
    let costoTotal = costo*dias
    if (usuarios.length!=0){
        costoTotal=(costoTotal*0.95)
    }
    alert(`el costo total es ARS ${costoTotal} por ${dias} días \n Muchas gracias!`)

}

function calcular_sedanes(){

    let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
    while (dias == null || /\D/.test(dias) || dias == "") {
        dias = prompt("Ingrese un valor numérico para los días: ");
    };

    let costo = sedanes[0].precio
    let costoTotal = costo*dias
    if (usuarios.length!=0){
        costoTotal=(costoTotal*0.95)
    }
    alert(`el costo total es ARS ${costoTotal} por ${dias} días \n Muchas gracias!`)

}

function calcular_suvs(){

    let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
    while (dias == null || /\D/.test(dias) || dias == "") {
        dias = prompt("Ingrese un valor numérico para los días: ");
    };

    let costo = suvs[0].precio
    let costoTotal = costo*dias
    if (usuarios.length!=0){
        costoTotal=(costoTotal*0.95)
    }
    alert(`el costo total es ARS ${costoTotal} por ${dias} días \n Muchas gracias!`)

}

function calcular_pickups(){

    let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
    while (dias == null || /\D/.test(dias) || dias == "") {
        dias = prompt("Ingrese un valor numérico para los días: ");
    };

    let costo = pickups[0].precio
    let costoTotal = costo*dias
    if (usuarios.length!=0){
        costoTotal=(costoTotal*0.95)
    }
    alert(`el costo total es ARS ${costoTotal} por ${dias} días \n Muchas gracias!`)

}

function calcular_premiums(){

    let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
    while (dias == null || /\D/.test(dias) || dias == "") {
        dias = prompt("Ingrese un valor numérico para los días: ");
    };

    let costo = premiums[0].precio
    let costoTotal = costo*dias
    if (usuarios.length!=0){
        costoTotal=(costoTotal*0.95)
    }
    alert(`el costo total es ARS ${costoTotal} por ${dias} días \n Muchas gracias!`)

}