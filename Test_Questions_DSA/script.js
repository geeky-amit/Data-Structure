function addTodo() {
  let todo = document.getElementById("todo-input").value;
  localStorage.setItem(todo, 1);
  //   let arr = [];
  //   arr.push(todo);

  let ul = document.getElementById("todo-holder");

  let li = document.createElement("li");
  li.innerHTML = localStorage.getItem();
  ul.appendChild(li);

  document.getElementById("todo-input").value = "";
}
