// changing text content inside the first p tag on page
const para = document.querySelector('p');

console.log(para.innerText); // hello world
para.innerText = 'ninjas are awesome';
console.log(para.innerText); // ninjas are awesome

// grabs all p tags
const paras = document.querySelectorAll('p');
paras.forEach(para => para.innerText += ' new text'); // append some new text to each one


const content = document.querySelector('.content');
console.log(content.innerHTML);// <p>this is the content new text</p>
content.innerHTML = '<h2>THIS IS A NEW H2</h2>'; // overwrite the p tag


// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => content.innerHTML += `<p>${person}</p>`)