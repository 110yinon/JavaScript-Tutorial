// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort(); // built-in sort strings alphabetically
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort(); // built-in sort nubmers
console.log(scores); // [10, 20, 35, 45, 5, 50, 70]

scores.sort((a, b) => a - b);
console.log(scores); // [5, 10, 20, 35, 45, 50, 70]

// example 3 - sorting objects
const players = [
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 },
];
// opt 1
players.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (a.score < b.score) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log(players);

// opt 2
players.sort((a, b) => b.score - a.score);

console.log(players);