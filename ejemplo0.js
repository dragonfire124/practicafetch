
//funcion sumar 
function sumar (a,b){
    console.log (a+b)
}

sumar (2,3)

//funcion sumar con flecha

const sumar2 =(a,b)=>{
    console.log (a+b)
}
sumar2 (3,5)

//declarar funcion como variable
 const  sumar3 = function (a,b){
    console.log (a+b)
 }
 sumar3 (3,3)

 //pasar string como parametro

  saludar  =(nombre, apellido)=>{
    console.log(`Hola ${nombre} ${apellido}`)
 }

 saludar('Carlos','Escobar')