//   CREATION OF PROMISE
const promiseOne = new Promise((resolve, reject) => {
    // Do async task such as => DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

// CONSUMPTION OF PROMISE

promiseOne.then(() => {
    console.log("Promise Consumed");
})

new Promise((resolve, reject) => {
    console.log("Async task 2");
    resolve();
}).then(() => {
    console.log("Async 2 is complete");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log((user)); 
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Hello", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    // console.log((user));
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error); 
})
.finally(() => console.log("Promise is either resolved or rejected")
)

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "Hello", password: "123"})
        } else {
            reject("ERROR: jsmn went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive // response from promise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
    
}


fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
