//PROBANDO FOREAC Y INDEX

const pendientes = ['tareas', 'estudiar','proyecto']

pendientes.forEach((pendiente,indice)=>{

    console.log(`${indice}: ${pendiente}` )
})


//PROBANDO FOREACH EN OBJETO
const carrito =[
{nombre:'Monitor', precio: 200},
{nombre:'Tablet', precio: 300},
{nombre:'TV', precio:400},

]

carrito.forEach (product => console.log(`El producto ${product.nombre} tiene un precio de ${product.precio}`))