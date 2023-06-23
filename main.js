

alert(`Bienvenido a la rentadora de autos N° 1 de la patagonia`)

function simuladorAlquiler(){
let auto = parseInt(prompt("ingrese el numero de auto que desea rentar: \n 1.Toyota Etios \n 2.Chevrolet Cruze \n 3.Toyota Hilux \n 4.Ford Mustang"));
  
while (auto === null || /\D/.test(auto) || auto == "" ||auto > 4) {
    auto = prompt("Ingrese un valor VÁLIDO para el auto \n 1.Toyota Etios \n 2.Chevrolet Cruze \n 3.Toyota Hilux \n 4.Ford Mustang");
};

if(auto===1){
    costo=4000;
}
 else if(auto===2){
    costo=5000;
}
 else if(auto===3){
    costo=10000;
}
else if(auto===4){
    costo=15000;
}

let dias = parseInt(prompt("Ingrese la cantidad de días"));
    
while (dias == null || /\D/.test(dias) || dias == "") {
    dias = prompt("Ingrese un valor numérico para los días: ");
};

let costoTotal = costo*dias;

alert(`El costo total es de ${costoTotal}`)

let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar \n 1 Cuota \n 3 cuotas \n 6 cuotas \n 12 cuotas"));
    
while (cuotas == null || /\D/.test(cuotas) || cuotas == "" ) {
    cuotas = prompt("Ingrese un valor válido para las cuotas \n 1 Cuota \n 3 cuotas \n 6 cuotas \n 12 cuotas ");
    
};


for(let i = 1; i <= cuotas; i++){
    let resultado = (costoTotal/cuotas) ;
    document.write(`La cuota ${i} es ${resultado}<br>`);
    
}
document.write(`<br>EL COSTO TOTAL ES ${costoTotal} POR ${dias} DÍAS`);
document.write(`<br><br>MUCHAS GRACIAS`);

}

simuladorAlquiler()



// se ejecuta el proceso al invocar la función declarada

