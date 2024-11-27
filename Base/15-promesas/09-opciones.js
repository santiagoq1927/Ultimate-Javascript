const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url,{
  method : 'POST',
  body: JSON.stringify({title: 'Hola mundo'}),
  headers: {
    'Content-type': 'application/json',
    Authorization: 'api key',
  },
  cache:'no-cache',  
})
      .then(response =>{
        if(response.ok){
            //return response.json();
            return response.text();
        }
        return Promise.reject(response.status);
      })
      .then(data=>console.log(data))
      .catch(message =>console.log({message}));