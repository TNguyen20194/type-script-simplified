const person = {name: "TN", age: 32, isProgrammer: true}
const people: (typeof person)[] = []

people.push(person)
people.push({name: "Sally", age: 28, isProgrammer: true})


function sayHi(name: string) {
    console.log(name)
}

type FuncType = typeof sayHi

