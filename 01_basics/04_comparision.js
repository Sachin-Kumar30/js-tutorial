console.log(null>0) // F
console.log(null==0) // F
console.log(null>=0) // T (because <,> converts null into 0 then checks ) 

console.log(undefined>0) // F
console.log(undefined==0) // F
console.log(undefined<0)  // F 

console.log("2"==2)  // T ("2" will be converted into no.)
console.log("2"===2)  // F (it will check its data Type also) 

// try to avoid these CONFUSING comparison