const todos = document.querySelector('.todos');
const addTodo = document.querySelector('form');
const search = document.querySelector('.search');


search.addEventListener('keyup', e => {
    Array.from(todos.children).forEach(todo => {
        // console.log(e.target.value);
        if(todo.children[0].children[0].innerText.includes(e.target.value)){
            todo.style.display = 'block';
        }
        else{
            todo.style.display = 'none';
        }
    });
});

todos.addEventListener('click', e => {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove();
    }
});

addTodo.addEventListener('submit', e => {
    e.preventDefault();
    todos.innerHTML += `
    <li>
        <div class="todo">
            <p>${e.target.addTodo.value}</p>
            <p class="close">X</p>
        </div>
    </li>`;
    addTodo.reset();
});