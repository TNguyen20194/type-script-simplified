type Person =  {
    name: string
    age: number
}

type PersonWithId = Person & {id: string }


const person: PersonWithId = { id: "adasd", name: "TN", age: 32 }