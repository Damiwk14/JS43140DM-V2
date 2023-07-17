class usuario {
    constructor(mail, clave){
        this.mail = mail.toLowerCase();
        this.clave = clave.toLowerCase();
        this.creado = true;
    }

}

const usuarios = [];

function solicitar_datos_usuario(){
    let check = true ;
    
    while (check){
        let msj = "";
        let mail = prompt("Ingrese mail").trim();
        let clave = prompt ("ingrese clave").trim();   

            if (!mail){

                msj += "\nDebe ingresar un mail";

            }

            if (!clave){

                msj += "\nDebe ingresar una clave" ;
            }

            if (msj != ""){

                alert(msj);
                check = confirm("Desea cargar de nuevo los datos");
                

            }else{


                return new usuario (mail,clave,true);

            }


    }

    return false;


}