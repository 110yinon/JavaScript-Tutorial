const todos = document.querySelector('ul');
const search = document.querySelector('.search');
const addInput = document.querySelector('.add-todo');

todos.addEventListener('click', e => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove(); // delete li tag
    }
});

search.addEventListener('keyup', e => {
    Array.from(todos.children).forEach(todo => {
        if (todo.innerText.includes(e.target.value)) {
            todo.style.display = 'block';
        }
        else {
            todo.style.display = 'none';
        }
    });
});

addInput.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.newTodo.value);
    if (e.target.newTodo.value !== '') {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const span = document.createElement('span');
        const img = document.createElement('img');
        img.setAttribute('src','/assets/trash.svg');
        div.classList.add('todo');
        span.innerText = e.target.newTodo.value;
        div.append(span);
        div.append(img);
        li.append(div);
        todos.prepend(li);
    }
    e.target.newTodo.value = '';
});