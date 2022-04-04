//POST PARA PEDIR DATOS 

//fetch(url, {/ objeto que contiene tres cosas
//method:'POST', 
//body: 'datos convertidos a JSON.stringify(data)'
//headers:{
//    cabecera de inforamcion
//}})

const button  = document.getElementById('button')

urldB= 'https://prueba-5fbb3-default-rtdb.firebaseio.com'

button.addEventListener('click', ()=>{
    const url = `${urldB}/favoritos.json`

    const newPost = {
        title: 'A new post',
        body: 'Hola mundo',
        userId: 1,
    }

    fetch  (url,{
        method:'POST',
        body: JSON.stringify(newPost),
        headers :{
            "Content-type": "application/json"
        }
    }).then(respuesta =>respuesta.json())
    .catch((error)=>console.log(error))
    .then(respuesta => console.log('Success:',respuesta))
    
})