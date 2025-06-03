const main = document.getElementById("main")
const form = document.getElementById("form");

// localStorage.clear()
let todoArray = []
loadTodoList()

function Todo(text) {
    const time = new Date().getTime()
    this.time = time;
    this.text = text;
    this.isDone = false;
}

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const text = form.todo.value
    const todo = new Todo(text)
    addNewTodo(todo)

    updateTodoStore()
})

function addNewTodo(todo) {
    todoArray.push(todo)

    const p = document.createElement("p")
    p.textContent = todo.text
    p.classList.add("todo-p")
    if (todo.isDone) {
        p.classList.add("isDone")
    }
    
    p.addEventListener("click", function () {
        p.classList.toggle("isDone")
        todo.isDone = !todo.isDone
        
        updateTodoStore()
    })

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.textContent = "삭제"

    deleteButton.addEventListener("click", function () {
        const row = deleteButton.parentNode
        main.removeChild(row)

        const filteredArray = todoArray.filter((oldTodo) => oldTodo.time !== todo.time)
        todoArray = [...filteredArray]
        updateTodoStore()
    })

    const row = document.createElement("div")
    row.classList.add("todo-row")
    row.appendChild(deleteButton)
    row.appendChild(p)

    main.appendChild(row)
}

function updateTodoStore() {
    const payload = JSON.stringify(todoArray)
    localStorage.setItem("todolist", payload)
}

function loadTodoList() {
    const todoArrayString = localStorage.getItem("todolist")
    const result = JSON.parse(todoArrayString)
    if (!result) { return }

    for (const todo of result) {
        addNewTodo(todo)
    }
    todoArray = [...result]
}