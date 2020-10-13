// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

// sets remove the duplicate items from array

// const nameSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
const namesSet = new Set(namesArray);
console.log(namesSet);

// convert back to array object
const uniqueNames = [...namesSet];
console.log(uniqueNames);

// shortcut
const uniqueNames2 = [...new Set(namesArray)];
console.log(uniqueNames2);


const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);// already have - disregard
ages.delete(30);

console.log(ages, ages.size);
console.log(ages.has(20), ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set([
    { name: 'shaun', age: 30 },
    { name: 'crystal', age: 29 },
    { name: 'chun-li', age: 32 },
]);

ninjas.forEach(ninja => console.log(ninja.name, ninja.age));