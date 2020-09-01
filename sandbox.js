const article = document.querySelector('article');

console.log(article.children); // HTMLCollection
const elements = Array.from(article.children); // Convert HTMLCollection to Array

elements.forEach(element => {
    element.classList.add('success');
});

const h2 = document.querySelector('h2');
console.log(h2.parentElement); // article element
console.log(h2.parentElement.parentElement); // body element

console.log(h2.nextElementSibling); // p tag with lorem ipsum
console.log(h2.previousElementSibling); // null because h2 is the first

// chaining (usually not needed)
console.log(h2.nextElementSibling.parentElement.children);