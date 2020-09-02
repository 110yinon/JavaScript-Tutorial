const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li); // put the element on the top of the parent elements list
    // ul.append(li); // put the element on the bottom of the parent elements list
});

const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    console.log(e.target); //refers to the clicked <li></li> element each time
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
