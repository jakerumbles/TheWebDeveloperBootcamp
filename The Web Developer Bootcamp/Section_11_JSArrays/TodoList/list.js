var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
   //handle input
   //LIST
   if (input === "list") {
      listTodos();
   }
   //ADD NEW
   else if (input === "new") {
      addTodo();
   }
   //DELETE
   else if (input === "delete") {
      deleteTodo();
   }

   input = prompt("What would you like to do?");
}
console.log("You quit the app");

function listTodos() {
   console.log("************");
   todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
   });
   console.log("************");
}

function addTodo() {
   var newTodo = prompt("Enter new todo");
   todos.push(newTodo);
   console.log("Added Todo");
}

function deleteTodo() {
   var index = prompt("Enter index of todo to delete");
   todos.splice(index, 1);
   console.log("Deleted Todo");
}
