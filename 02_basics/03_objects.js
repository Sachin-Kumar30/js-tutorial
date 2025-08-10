// singleton => class has only one object
// Object.create => way to create singleton object

//  object leterals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sachin",
    "full name": "Sachin Kumar", // => bracket notaiion treats it as a single ket 
    age:22,
    [mySym]: "myKey1", 
    location: "delhi",
    email: "Sachin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday, Saturday"]
}

// console.log(JsUser.email); // => in . no need rfor to explicitly mention emails as string { Dot Notation}
// console.log(JsUser["email"]); // +> here have to mention email as String ("") {Bracket Notation}
// console.log(JsUser["full name"]); // => can't use dot notation here => it will access frirst & name diiff(ERRORR)
// console.log( JsUser[mySym]);

JsUser.email = "Sachin@deep.com"; // => "=" symbol overwrites the key 
// Object.freeze(JsUser) // no chnges now in object(got freezed)
JsUser.email = "Sachin@microsoft.com"; // no chnage => object already freezed
// console.log(JsUser);


JsUser.greetings = function() {
    console.log("Hello Js User");
}
JsUser.greetingstwo = function() {
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());






