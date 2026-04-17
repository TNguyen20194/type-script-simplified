type Todo = {
    id: string,
    name: string, 
    status: string,
    completed: boolean
}

type NewTodo = Omit<Todo, "id">
type NewTodo2 = Pick<Todo, "name" | "status" | "completed">

function saveTodo(todo: NewTodo): Todo {
    return {...todo, id: crypto.randomUUID()}
};

function renderTodo(todo: Todo) {
    const div = document.createElement("div")
    div.id = todo.id
}