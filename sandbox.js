const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li); // put the element on the top of the parent elements list
    // ul.append(li); // put the element on the bottom of the parent elements list
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // item.remove();
        e.target.remove(); // same
    });
});