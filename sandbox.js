// find the first score above 50
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const x = scores.find(score => score > 50);
console.log(x);// 60