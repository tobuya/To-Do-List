const listData = document.querySelector('.lists');

const tasks = [
  {
    description: 'Workout',
    completed: false,
    index: 0,
  },
  {
    description: 'Eat fruits',
    completed: false,
    index: 1,
  },
  {
    description: 'Write Code',
    completed: false,
    index: 2,
  },
  {
    description: 'Read a novel',
    completed: false,
    index: 3,
  },
  {
    description: 'Play Football',
    completed: false,
    index: 4,
  },
];

function addToList() {
  for (let i = 0; i < tasks.length; i += 1) {
    listData.innerHTML += `
      <ul class="main-list" style="list-style-type: none">
        <li>${tasks[i].index}</li>
        <li>${tasks[i].description}</li>
        <li>${tasks[i].completed}</li>
      </ul>
    `;
  }
}

window.addEventListener('load', addToList);