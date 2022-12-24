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

describe('Test functions responsible for status and content updates', () => {
  document.body.innerHTML = '<section> <ul id="todo-container"></ul> </section>';

  const todoList = new TodoList();

  test('Clear completed', () => {
    todoList.clearAllCompleted();
    expect(todoList.tasks).toHaveLength(0);
  });

  test('Edit task', () => {
    todoList.addToList('Forth Test');
    todoList.editTask(0, 'Fifth Test');
    expect(todoList.tasks[0]?.description).toBe('Fifth Test');
  });

  test('Check status', () => {
    todoList.completedTask(0, true);
    expect(todoList.tasks.at(0).completed).toBe(true);
  });
});