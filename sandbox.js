// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to do with marmite']
};

console.log(user);
console.log(user.name); // crystal

user.age = 35;
console.log(user.age); // 35

// same
user['age'] = 40;
console.log(user['age']); // 40

const key = 'age';
console.log(user[key]); // 40

console.log(typeof user); // object



