function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {
    let result = (number1 + number2)
    return result
}

// addTwoNumbers(3, "4") // 34
const result = addTwoNumbers(3, 5) 
// console.log("RESULT IS : ", result);


function loginUserMessage(username = "sim") { // username is undefined here
    if(!username){
        console.log("please enter a username");
        return;
    }

    return console.log(`${username} just logged in `);
}

// console.log(loginUserMessage());

// function calculateCartprice(val1, val2,...num1) { // ... => rest operator +> wil pack all argument into an arr  val1&val2 will take first 2 argument remaning will go into num1
//     return num1;
// }

// console.log(calculateCartprice(200, 400, 500, 800))

const user = {
    userName: "sachin",
    price: 199
}

function handleObjects(anyobjects) { //anyobjects is just name of parameter
    console.log(`userNmae is ${anyobjects.userName} and price is ${anyobjects.price}`);
    
}

// handleObjects(user)
handleObjects({
    userName: "sachin",
    price: 199
})

const  mynewArray = [200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));

console.log(returnSecondValue([200, 400, 500]));