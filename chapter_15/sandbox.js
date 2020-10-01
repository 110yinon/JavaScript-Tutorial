// constructor functions

function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
};

User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
};

const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);
userOne.login();
