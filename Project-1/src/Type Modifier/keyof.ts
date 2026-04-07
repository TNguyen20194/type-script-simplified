type Person = {
      name: string, 
      age: number
      isProgrammer?: boolean
}

const age = getValue("age", {name: "TN", age: 32})

function getValue(key: keyof Person, person: Person) {
    return person[key]
}