function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', function(event) ==> {
    event.preventDefault();

    let title = newToDoText.value;

    toDos.push(title);

    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox"; // input <type> checkbox

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "delete";

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    toDoList.appendChild(newLi);
    newToDoText.value = "";


    deleteBtn.addEventListener('click', function(event) {
      //console.log(event)
      //this.parentElement represents the buttons <li> parent
      toDoList.removeChild(this.parentElement);
    })


if(currentTodo === buttonLiText) {
  toDos.splice(index, 1);
    }
  }};

window.onload = function() {
  onready();
};
