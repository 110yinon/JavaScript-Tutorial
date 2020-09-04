const username = '333shaunp343@@';
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);
console.log(result); // false

// Another method
result = username.search(pattern);
console.log(result); // return -1 (NO MATCH)