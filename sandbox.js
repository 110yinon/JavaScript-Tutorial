let score = '100' // string

console.log(score + 1); // 1001 string
console.log(typeof (score));

score = Number(score) // Number
console.log(score + 1); // 101
console.log(typeof (score));

console.log(Number("hello")); // NaN = Not A Number

let result = 200 // Number
console.log(typeof result);

result = String(result) // string
console.log(typeof result);

result = 'true'; // string
console.log(typeof result);

result = Boolean(result); // boolean
console.log(typeof result);