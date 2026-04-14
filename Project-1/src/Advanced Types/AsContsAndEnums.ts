const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const;

type Person = {
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach((skillLevel) => {
  console.log(skillLevel);
});

const person = {
  name: "TN",
  age: 33,
  address: {
    street: "Main St",
  },
} as const;

person.age = 2;
