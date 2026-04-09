type Person = {
      name: string,
      skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master"
}

const person: Person = {name: "TN", skillLevel: "Intermediate"}
printSkillLevel(person.skillLevel)

function printSkillLevel(skillLevel: Person["skillLevel"]){
    console.log(skillLevel)
}

type PeopleGroupedBySkillLevel = {
    [index: string] : Person[]
}

const a: PeopleGroupedBySkillLevel = {
    dadas: [{name: "Peter", skillLevel: "Expert"}]
}


const b = {
    name: "John",
    age: 28,
    isProgrammer: true
}

type B = (typeof b)[keyof typeof b]