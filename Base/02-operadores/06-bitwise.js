//Decimal: 0,1,2,3,4,5,6,7,8,9
//Binerio: 0,1 
// bit: 0 1
// byte 8 bits
// byte: 00000000 > 0
// byte: 00000001 > 1
// byte: 00000010 > 2
// byte: 00000011 > 3
// byte: 00000100 > 4 

console.log(1|3); // 00000011 > 3
console.log(1|4); // 00000101 > 5

console.log(1&3); // 00000001 > 1
console.log(1&4); // 00000000 > 0