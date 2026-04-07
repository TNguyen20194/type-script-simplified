type Todo = {
    name: number | string;
    status: "Complete" | "Incomplete" | "Draft"
};

type Person = {
    name: string;
    age: number
}

type TodoPerson = Todo | Person

const todo: TodoPerson = { name: "Laundry", status : "Incomplete"}