
// const tinderUser = new Object();  // => way to create empty object
const tinderUser = {} // => way to create empty object

tinderUser.id = "1223ad"
tinderUser.name = "Sakuu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "soma@emil.com",
    fullName: {
        userFullNmae: {
            firstName: "Radha",
            lastName: "vallabh"
        }
    }
}

// console.log(regularUser.fullName?.userFullNmae.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} => object inside object (not recomended)
// const obj3 = Object.assign({}, obj1, obj2) /// => way to merge two object
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@google.com"
    },
    {
        id: 2,
        email: "k@google.com"
    },
    {
        id: 3,
        email: "j@google.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // => puts all key into an array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // => puts each key: val into an arr and those arr(of key & val) into one arr

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // => to check that it has this propt. or not

const course = {
    cousrName: "js in hindi ",
    price: "999",
    courseInstructor: "sachin"
}

const {courseInstructor: instructor} = course // => destructuring of object
console.log(instructor);

// {      // in JSON we don't have object name just only {}
//     "name": "sachin", // in JSON both key: val are in string format
//     "coursename": "js in hindi",
//     "price": "free"
// }




