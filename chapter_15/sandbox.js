class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;// default function return is undefined
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}
// creating an instances of User class
const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

// console.log(userOne);
// console.log(userTwo);
// userOne.login();
// userTwo.login();

userOne.login().incScore().incScore().logout();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object