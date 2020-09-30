const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'chun li',
    email: 'chun.li@thenetninja.co.uk',
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

// the code above is NOT very maintainable

// we want somthing like this:
// const userThree  = new userOne('shaun@thenetninja.co.uk', 'shaun');