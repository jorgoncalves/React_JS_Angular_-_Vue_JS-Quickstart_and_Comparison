var inputEl = $("input");
var buttonEl = $("button");
var ulEl = $("ul");

var todos = [];

buttonEl.click(addTodo);

function addTodo() {
  //acede a propriedade, value
  var userInput = inputEl.val();
  //utiliza o metodo trim() para remover os espaços em branco a mais
  if (userInput.trim() == "") {
    //termina a função se o if for verdadeiro
    return;
  }

  var newTodo = {
    id: _.uniqueId(),
    value: userInput
  };
  todos.push(newTodo);

  $("<li>" + userInput + "</li>").appendTo(ulEl).attr("dataset-id", newTodo.id).click(removeTodo);
  console.log(todos);
}

function removeTodo(event) {
  console.log(event);
  var clickedLi = $(this);
  var itemId = clickedLi.attr("dataset-id");
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {
      todos.splice(i, 1);
      break;
    }
  }
  clickedLi.remove();
  console.log(todos);
}