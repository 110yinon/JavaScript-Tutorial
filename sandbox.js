const article = document.querySelector('article');
const button = document.querySelector('button');

button.addEventListener('click', () => console.log('you clicked me '));

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log(e);
        console.log(item);
        console.log(e.target); // same as item

        item.style.textDecoration = 'line-through';
    });
});