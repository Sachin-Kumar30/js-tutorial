let myName = "himank    "

// console.log(myName.length);
// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is${this.spiderman }`);
        
    }
}

Object.prototype.himank = function() {      // Here we have initialised the function is gloabal object prototype beacuse everone is js goes from this object so each ahve this
    console.log(`himank is present in all objects`);
}

// heroPower.himank()
myHeros.himank();

Array.prototype.heyHimank = function() {   // here we have given property to the arrya , it will be accesed by all array not different type data (its in down the line in chain Obj -> arr/funct/str etc.)
    console.log(`Himank says hello`);
}

myHeros.heyHimank();  
// heroPower.heyHimank();


// inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // refference to the anothe r object => nowit can access the propt of that object 
}

Teacher.__proto__ = User // tacher can access the all propt. of User



// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport has access of all the propt of Teacher


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // gives refference to who is calling currnt function
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() // injected the method using prototype
"hitesh".trueLength() // Now string has this method
"iceTea".trueLength()