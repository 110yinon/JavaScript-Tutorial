// rest parameter
const double = (...nums) => {
    console.log(nums);//coverts the spread arguments to an array
}

let result = double(1, 3, 5, 7, 9, 2, 4, 6, 8); // spread arguments
result = double(1, 3, 8);

// spread syntax (arrays)
const peoples = ['shuan', 'ryu', 'crystal'];
console.log(peoples);
console.log(...peoples);// spread out the array into it individual items

const members = ['mario', 'chun-li', ...peoples]; // spread poeples items into members


// spread syntax (objects)
const person = { name: 'shuan', age: 30, job: 'net ninja' };

const personClone = { location: 'manchester', ...person }; // spread the properties into this new object