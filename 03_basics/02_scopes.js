// var c = 300
let a = 400

if(true) {
    let a   = 10
    const b = 20
    // var c   = 30
    console.log("INNER a", a);
    
}

console.log(a);// a is not accessible outside block scope
// console.log(b); // b is not accessible outside block scope
// console.log(c); // c is accessible because of (var) => var can be accessed from  anywhere
