 const user = {
    userName: "Sachin",
    price: 199,

    wlecomeMessage: function() {
        console.log(`${this.userName},welcome to website`);
        console.log(this);
        
        
    }
 }

//  user.wlecomeMessage();
//  user.userName = "sam" // userName is property not variable so it can be changed changed the userNmae (context changed) 
//  user.wlecomeMessage();

// console.log(this); // {} => context of node enviroment or global scope in that no variables {} =>global scope is empty in coding enviroments


// function sherr(){
//     let userNmae = "sachin"
//     console.log(this.userName); // this only works in objects scope{} => not in standalone function 
// }

// sherr()

// const chai = function (){
//         let userNmae = "sachin"
//     console.log(this.userName); // this only works in objects scope{} => not in standalone function 
// }

// chai()

const chai =  () => { // arrow function
        let userNmae = "sachin"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {    // arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit conversion same as below but without ()
// const addTwo = (num1, num2) =>  (num1 + num2) // implicit conversion => if there is ( ) => no NEED to write return stt

const addTwo = (num1, num2) =>   ({userName :"sachin"}) // to retrurn object we need ( ) outsie {}


// console.log(addTwo(3, 4))

