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

function Admin(username, email, title) {
    User.call(this, username, email);
    this.title = title;
}


Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {
    // delete a user
    console.log('delete a user');
};


const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

console.log(userThree);

userThree.login();