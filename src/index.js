/** @format */

import './style.css';
import TodoList from './modules/create.js';

const todoList = document.querySelector('#todo-container');
const clearBtn = document.querySelector('#clear');
const inputField = document.querySelector('#new-task');
const addItemToList = document.querySelector('#add');

const tasks = new TodoList();

document.addEventListener('DOMContentLoaded', () => {
  tasks.displayToDo();
});

addItemToList.addEventListener('click', (e) => {
  e.preventDefault();
  tasks.addToList(inputField.value);
  inputField.value = '';
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = e.target.getAttribute('id');
    tasks.removeFromToDo(targetId);
  } else if (e.target.closest('.disc')) {
    const disc = e.target.closest('.disc');
    disc.addEventListener('keyup', () => {
      const index = +disc.id;
      tasks.editTask(index, disc.value);
    });
  } else if (e.target.classList.contains('checkbox')) {
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((item) => {
      item.addEventListener('change', (e) => {
        const targetId = e.target.getAttribute('id');
        if (e.target.checked) {
          tasks.completedTask(targetId, true);
        } else {
          tasks.completedTask(targetId, false);
        }
      });
    });
  }
});

clearBtn.addEventListener('click', () => {
  tasks.clearAllCompleted();
});