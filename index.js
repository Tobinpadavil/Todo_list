document.addEventListener('DOMContentLoaded', loadTodos); // Load todos when the document is ready

const ulEL = document.getElementById('ul-el');
const inputEL = document.getElementById('input-el');
const btnEL = document.getElementById('btn-el');
let leads = [];

btnEL.addEventListener('click', addTodo);

function addTodo() {
    const todoText = inputEL.value.trim();
    if (todoText !== '') {
        leads.push(todoText);
        saveTodos();
        render();
        inputEL.value = '';
        inputEL.focus(); // Set focus back to input after adding a todo
    }
}

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    leads = storedTodos ? JSON.parse(storedTodos) : [];
    render();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(leads));
}

function render() {
    ulEL.innerHTML = ''; // Clear existing HTML content before adding new items
    leads.forEach((lead, index) => {
        const li = document.createElement('li');
        li.textContent = lead;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(deleteBtn);
        ulEL.appendChild(li);
    });
}

function deleteTodo(index) {
    leads.splice(index, 1);
    saveTodos();
    render();
}
