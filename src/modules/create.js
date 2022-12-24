/** @format */

const setLocalStorage = (newTodo) => localStorage.setItem('todoList', JSON.stringify(newTodo));
const getFromLocalStorage = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

export default class TodoList {
  tasks;

  constructor() {
    this.tasks = getFromLocalStorage();
  }

  addToList = (disc) => {
    const task = {
      index: this.tasks.length,
      description: disc,
      completed: false,
    };
    this.tasks.push(task);
    setLocalStorage(this.tasks);
    this.displayToDo();
  };

  displayToDo = () => {
    this.tasks = getFromLocalStorage();
    this.tasks.sort((a, b) => a.index - b.index);
    const tasksList = document.querySelector('#todo-container');
    tasksList.innerHTML = '';
    this.tasks.forEach((task) => {
      tasksList.innerHTML += `
      <li class="task">
      <div class="content">
      <input class="checkbox" type="checkbox" ${task.completed ? 'checked' : 'unchecked'} id="${task.index}"> 
      <input type="text" id="${task.index}" value="${task.description}" ${task.completed ? "class='disc completed'" : "class='disc'"}>
      </div>
      <button type="button" class="btn btn-remove">
      <i id="${task.index}" class="fa fa-times remove" aria-hidden="true"></i>
      </button>
      </li>
      `;
    });
  };

  removeFromToDo = (i) => {
    const filteredTasks = this.tasks.filter((task) => task.index !== +i);
    filteredTasks.forEach((task, index) => {
      task.index = index;
    });
    setLocalStorage(filteredTasks);
    this.tasks = getFromLocalStorage();
    this.displayToDo();
  };

  completedTask = (i, value) => {
    const task = this.tasks.find((task) => task.index === +i);
    task.completed = value;
    setLocalStorage(this.tasks);
    this.displayToDo();
  };

  clearAllCompleted = () => {
    const unCompletedTasks = this.tasks.filter(
      (task) => task.completed === false,
    );
    setLocalStorage(unCompletedTasks);
    this.displayToDo();
  };

  editTask = (i, value) => {
    const task = this.tasks.find((task) => task.index === +i);
    if (task) {
      task.description = value.trim();
    }
    setLocalStorage(this.tasks);
    this.displayToDo();
  };
}
