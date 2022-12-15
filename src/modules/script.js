const listData = document.querySelector('.lists');
const inputField = document.querySelector('.add-to-list');

let tasks = [];
const completed = false;
let index = 0;

function addToList() {
  listData.innerHTML = '';
  tasks.forEach((element) => {
    if (element.completed === true) {
      listData.innerHTML += `
      <div class="main-list">
      <input type="checkbox" class="check" id="check${element.index}" onclick="Check(${element.index});" checked>
      <input class="list-item" id="list${element.index}" value="${element.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
           <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
      <i id="remove-icon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
      </div>
     `;
    } else {
      listData.innerHTML += `
      <div class="main-list">
      <input type="checkbox" class="check" id="check${element.index}" onclick="Check(${element.index});">
      <input class="list-item" id="list${element.index}" value="${element.description}" readonly>
      <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
           <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
      <i id="remove-icon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
      </div>
     `;
    }
    inputField.value = '';
  });
}

window.addEventListener('load', addToList);
