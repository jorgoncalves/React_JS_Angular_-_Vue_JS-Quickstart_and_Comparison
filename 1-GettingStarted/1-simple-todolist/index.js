var inputEl = document.querySelector("input");
var buttonEl = document.querySelector("button");
var ulEl = document.querySelector("ul");

var todos = [];

buttonEl.addEventListener("click", addTodo);

function addTodo() {
  //acede a propriedade, value
  var userInput = inputEl.value;
  //utiliza o metodo trim() para remover os espaços em branco a mais
  if (userInput.trim() == "") {
    //termina a função se o if for verdadeiro
    return;
  }

  var newTodo = {
    id: Math.random(),
    value: userInput
  };
  todos.push(newTodo);

  var todoLi = document.createElement("LI");
  todoLi.textContent = userInput;
  todoLi.addEventListener("click", removeTodo);
  todoLi.dataset.id = newTodo.id;
  ulEl.appendChild(todoLi);
  console.log(todos);
}

function removeTodo(event) {
  console.log(event);
  var clickedLi = event.target;
  var itemId = clickedLi.dataset.id;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {
      todos.splice(i, 1);
      break;
    }
    console.log(todos);
  }
  clickedLi.parentNode.removeChild(clickedLi);
}