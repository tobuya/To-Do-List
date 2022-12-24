import './style.css';
import TodoList from './modules/create.js';

// const tasksList = document.querySelector('.list');
const todoList = document.querySelector('#todo-container');
// const btnClear = document.querySelector('.btn-clear');
const clearBtn = document.querySelector('#btn');
// const input = document.querySelector('.input');
const inputField = document.querySelector('#new-task');
// const btnAdd = document.querySelector('.btn-add');
const addItemToList = document.querySelector('#add');

const todo = new TodoList();

document.addEventListener('DOMContentLoaded', () => {
  todo.displayTasks();
});

addItemToList.addEventListener('click', (e) => {
  e.preventDefault();
  todo.addTask(inputField.value);
  inputField.value = '';
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = e.target.getAttribute('id');
    todo.removeTask(targetId);
  } else if (e.target.closest('.disc')) {
    const disc = e.target.closest('.disc');
    disc.addEventListener('keyup', () => {
      const index = +disc.id;
      todo.editTask(index, disc.value);
    });
  } else if (e.target.classList.contains('checkbox')) {
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((item) => {
      item.addEventListener('change', (e) => {
        const targetId = e.target.getAttribute('id');
        if (e.target.checked) {
          todo.complete(targetId, true);
        } else {
          todo.complete(targetId, false);
        }
      });
    });
  }
});

clearBtn.addEventListener('click', () => {
  todo.clearAll();
});