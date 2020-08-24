// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to do with marmite'],
    login: () => console.log('the user logged in'),
    logout: () => console.log('the user logged out'),
    logBlogs: function () {
        console.log(this);// refers to user
    },
    logBlogs2: () => {
        console.log(this);// refers to window !!!
    },

    // Shorthand version for Regular function
    // An easier way to write method in object:
    logBlogs3(){
        console.log(this);// refers to user
    }
};

user.logBlogs();
user.logBlogs2();
user.logBlogs3();
console.log(this);// refers to window, the global object in JavaScript




