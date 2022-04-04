const url  = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(response => response.json())
.then(response =>{
  element = document.getElementById('element')
  
  response.forEach((item) =>{
      
      
      console.log(`${item.id}:  ${item.name}`)
    
  }) 

})
