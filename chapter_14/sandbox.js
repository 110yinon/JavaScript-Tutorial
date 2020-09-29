// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 40);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);// mario 40

// deleting data from local storage
localStorage.removeItem('name');
// localStorage.clear();// clears the local storage