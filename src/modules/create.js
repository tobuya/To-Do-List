const form = document.querySelector('#form');
const inputField = document.querySelector('#new-task');
const todoList = document.querySelector('#todo-container');

// eslint-disable-next-line import/no-mutable-exports
export let taskList = [];

const addTaskToList = (e) => {
  e.preventDefault();

  const task = inputField.value;

  if (!task) {
    return;
  }

  const mainList = document.createElement('div');
  mainList.classList.add('main-tasks');

  mainList.innerHTML = `
      <input type="checkbox" class="check">
      <input class="items" value="${task}">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-floppy-disk save hide"></i>
      <i id="remove-icon" class="fa-solid fa-trash delete"></i>
  `;

  todoList.appendChild(mainList);
  taskList.push({ id: taskList.length, task, completed: false });
  localStorage.setItem('my-tasks', JSON.stringify(taskList));
  inputField.value = '';
};

export const loadDataFromLocalStorage = () => {
  if (localStorage.getItem('my-tasks')) {
    taskList = JSON.parse(localStorage.getItem('my-tasks'));
  }
  todoList.innerHTML = '';

  taskList.forEach((item) => {
    const mainList = document.createElement('div');
    mainList.classList.add('main-tasks');
    mainList.innerHTML = `
      <input type="checkbox" class="check">
      <input class="items" value="${item.task}">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-floppy-disk save hide"></i>
      <i id="remove-icon" class="fa-solid fa-trash delete"></i>
  `;
    todoList.appendChild(mainList);
  });
};

form.addEventListener('submit', addTaskToList);
window.addEventListener('load', loadDataFromLocalStorage);
