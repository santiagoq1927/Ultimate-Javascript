const ahora = new Date();
console.log(ahora);

const fecha = new Date('December 11 1995');
console.log(fecha);

const fecha2 = new Date(1995,11,25,14,15);
console.log(fecha2);

console.log('DateString',fecha2.toDateString());
console.log('ISOString',fecha2.toISOString());
console.log('TimeString',fecha2.toTimeString());
console.log('Dia',fecha2.getDay);

fecha2.setFullYear(1927);
console.log(fecha2.toDateString());

