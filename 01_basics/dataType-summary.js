//  IMPORTANT FROM INTERVIEW P.O.V
// Two types of datatypes :-
// 1) primitive

//  jS is Dynamically typed(because we dont know till runtime type of any variable machine itself at runtime => detect type)

// 7 Types : string, Number, Boolean, null, undefined, Symbol, BigInt

// 10.7 comes under hood of Number (no special float type)

// 2) Reference(non-primitive) => retrurn type(typeof) of all non-primitive is "object"

//  Types : Arrays, Objects, Functions

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false (symbol assigns unique val to everyone)

 let myobj={  // {} anything in this is object
    name : "sachin",
    age : 22
}

const myFunction = function() { // Function => variable function
// console.log("Hello World");

} 

// console.log(typeof myFunction );

//  *************** Memory ********************

//  stack (primitive) copy, heap (Non-primitive) original value

let myName = "sachin";
anotherNmae = myName; // here => copy of myName goes to anotherName(primitive)
anothername="Cheetah";

console.log(myName);
console.log(anothername); 

let userOne = {
     email : "skumar@google.com",
     upi : "sk@ybl"
}

let userTwo = userOne // pointing to same heap address()

userTwo.email = "cheetah@google.com"

console.log(userOne.email);
console.log(userTwo.email);// userOne will be changed pointing to same add.



