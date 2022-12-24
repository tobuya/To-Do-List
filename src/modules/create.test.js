/**
 * @jest-environment jsdom
 */

import TodoList from './create.js';

describe('Add and delete tasks', () => {
  document.body.innerHTML = '<section> <ul id="todo-container"></ul> </section>';

  const todoList = new TodoList();
  const listLength = todoList.tasks.length;

  test('Adding task', () => {
    todoList.addToList('First Test');
    expect(todoList.tasks).toHaveLength(listLength + 1);
  });

  test('Adding task to DOM', () => {
    const lists = document.querySelectorAll('.task');
    expect(lists).toHaveLength(listLength + 1);
  });

  test('Removing task', () => {
    todoList.addToList('Second Test');
    const listLength = todoList.tasks.length;
    todoList.removeFromToDo(0);
    expect(todoList.tasks).toHaveLength(listLength - 1);
  });

  test('Removing task from DOM', () => {
    todoList.addToList('Third Test');
    const listLength = todoList.tasks.length;
    todoList.removeFromToDo(0);
    const lists = document.querySelectorAll('.task');
    expect(lists).toHaveLength(listLength - 1);
  });
});