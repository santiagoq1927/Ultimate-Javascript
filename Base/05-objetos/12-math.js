console.log(
    Math.PI,
    Math.abs(-15),
    Math.round(32.5),
    Math.round(32.4),
    Math.floor(32.9),
    Math.ceil(32.1),
);

console.log(Math.random());

function getRandom(min,max){
    return Math.random() * (max-min) + min;
}

console.log(getRandom(1,10));