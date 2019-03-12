function onReady () {
  var toDos =[];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', function(event) {
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
      newLi.parentElement.removeChild(newLi);
    });
  })};

window.onload = function() {
  onReady();
};
