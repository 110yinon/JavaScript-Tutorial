class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
    }
}
// creating an instances of User class
const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object