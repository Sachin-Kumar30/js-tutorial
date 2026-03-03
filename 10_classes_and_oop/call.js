function serUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password) {
    serUsername.call(this, username) // .call explicitly call the setUser function, explaicitly pass (this) to keep the context

    this.email = email;
    this.password = password
}

const chai = new createUser("chai", "chaoi@gmail.com", "123")
console.log(chai);
