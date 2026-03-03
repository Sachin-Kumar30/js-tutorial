const user = {
    username: "himank",
    loginCOunt: 8, 
    signedIn: true,
    
    getUserDetails: function() {
        // console.log(this.username);
        // console.log(this);
        
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


function User(username, loginCount, isLoggedIN) {
    this.username = username;
    this.loginCOunt = loginCount
    this.isLoggedIN = isLoggedIN
    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this  // returning the whole current coontext(whici is function)
}

const userOne = new User("himank", 8, false);
const userTwo = new User("chai aur code", 12, true)
console.log(userOne);
console.log(userTwo);

