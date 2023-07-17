class auto {
    constructor(id, nombre, precio, categoria){
        this.id = parseFloat(id);
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria.toLowerCase();
        this.alquilado = false;
    }


    mostrar_descripcion(){

        return (this.id + " - " + this.nombre + " - $" + this.precio + " - " + this.categoria) ;
    
    
    }




}

let autos = [];

autos.push(new auto("1","Etios","4000","economico"))
autos.push(new auto("2","UP","4000","economico"))
autos.push(new auto("3","Mobi","4000","economico"))
autos.push(new auto("4","Onix","4000","economico"))
autos.push(new auto("5","208","6000", "mediano"))
autos.push(new auto("6","Yaris", "6000", "mediano"))
autos.push(new auto("7","Fit", "6000", "mediano"))
autos.push(new auto("8","Polo", "6000", "mediano"))
autos.push(new auto("9","Cronos", "8000","sedan"))
autos.push(new auto("10","Corolla", "8000","sedan"))
autos.push(new auto("11","Versa", "8000","sedan"))
autos.push(new auto("12","Cruze", "8000","sedan"))
autos.push(new auto("13","Corolla Cross","10000","suv",))
autos.push(new auto("14","HRV","10000","suv",))
autos.push(new auto("15","NIVUS","10000","suv",))
autos.push(new auto("16","2008","10000","suv",))
autos.push(new auto("17","Hilux", "15000", "pickup"))
autos.push(new auto("18","Maverik", "15000", "pickup"))
autos.push(new auto("19","Raptor", "15000", "pickup"))
autos.push(new auto("20","Amarok", "15000", "pickup"))
autos.push(new auto("21","Mustang","20000", "premium"))
autos.push(new auto("22","Camaro","20000", "premium"))
autos.push(new auto("23","Toyota 86","20000", "premium"))
autos.push(new auto("24","Serie 8","20000", "premium"))




const economicos = autos.filter((cat) => cat.categoria.includes(`economico`))
const medianos = autos.filter((cat) => cat.categoria.includes(`mediano`))
const sedanes = autos.filter((cat) => cat.categoria.includes(`sedan`))
const suvs = autos.filter((cat) => cat.categoria.includes(`suv`))
const pickups = autos.filter((cat) => cat.categoria.includes(`pickup`))
const premiums = autos.filter((cat) => cat.categoria.includes(`premium`))


const nombres_economicos = economicos.map((el) => el.nombre)
const nombres_medianos = medianos.map((el) => el.nombre)
const nombres_sedanes = sedanes.map((el) => el.nombre)
const nombres_suvs = suvs.map((el) => el.nombre)
const nombres_pickups = pickups.map((el) => el.nombre)
const nombres_premiums = premiums.map((el) => el.nombre)

const id_economicos = economicos.map((el) => el.id)
const id_medianos = medianos.map((el) => el.id)
const id_sedanes = sedanes.map((el) => el.id)
const id_suvs = suvs.map((el) => el.id)
const id_pickups = pickups.map((el) => el.id)
const id_premiums = premiums.map((el) => el.id)








