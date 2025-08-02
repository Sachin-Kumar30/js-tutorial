//  IMPORTANT FROM INTERVIEW P.O.V

// primitive

//  jS is Dynamically typed(because we dont know till runtime type of any variable machine itself at runtime => detect type)

// 7 Types : string, Number, Boolean, null, undefined, Symbol, BigInt

// 10.7 comes under hood of Number (no special float type)

// Reference(non-primitive) => retrurn type(typeof) of all non-primitive is "object"

//  Types : Arrays, Objects, Functions

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false (symbol assigns unique val to everyone)

 let myobj={  // {} anything in this is object
    name : "sachin",
    age : 22
}

const myFunction = function() { // Function => variable function
console.log("Hello World");

} 

console.log(typeof myFunction );



