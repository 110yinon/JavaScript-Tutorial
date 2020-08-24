const para = document.querySelector('.error');
console.log(para);

const paras = document.querySelectorAll('p'); // select all p tags

console.log(paras);

// console.log(paras[0]);
paras.forEach(para => console.log(para));

const errors = document.querySelectorAll('.error'); // select all error tags