let user = 'chanchito';
let promesa1 = user =>new Promise((res,rej)=>{
    res(user);
});

let promesa2 = user=> new Promise((res,rej)=>{
    res(15);
});

promesa1('chanchito')
        .then(user=>promesa2(user))
        .then(dato=> console.log(dato));