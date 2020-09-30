class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;// default function return is undefined
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User {
    constructor(username, email, title) {
        super(username,email); // must call inside the derived ctor
        this.title = title;
    }

    deleteUser(user) {
        users = users.filter(u => user !== u);
    }
}


// creating an instances of User class
const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');


console.log(userThree);