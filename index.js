document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input")
  const addButton = document.getElementById("add-button")
  const todoList = document.getElementById("todo-list")

  addButton.addEventListener("click", addTodo)

  function addTodo() {
    const taskText = input.value.trim()
    if (taskText !== "") {
      const li = document.createElement("li")
      li.textContent = taskText

      const deleteButton = document.createElement("span")
      deleteButton.textContent = "❌"
      deleteButton.className = "delete-button"
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(li)
      })

      li.appendChild(deleteButton)
      todoList.appendChild(li)
      input.value = ""
    }
  }
})
