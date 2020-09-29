// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 40);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);// mario 40

// updating data
localStorage.setItem('name', 'luigi');
localStorage.age = '100';

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);// luigi 100