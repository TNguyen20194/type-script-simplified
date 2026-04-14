/**
 * Generic type "ArrayType" (Could be named as anytihng) allows the value can be any types at all
 * But the type will be determined when the value is passed in, when the function is called
 */

function getSecond<ArrayType>(array: ArrayType[]) {
  return array[1];
}

// const a = [1, 2, 3]
// const b = ["sdf", "sdf"]

// const retA = getSecond(a)
// const retB = getSecond(b)

// Constraint generic type to be an object with default value
/**
 * type APIResponse<TData extends object = {status: number}> = {
    data: TData
    isError: boolean
}
 */

/**
 * type UserResponse = APIResponse<{name: string, age: number}>;
type BlogResponse = APIResponse<{title: string}>;

const A: UserResponse = {
    data: {
        name: "TN",
        age: 23
    },
    isError: false
};

const B: BlogResponse = {
    data: {
        title: "Book",
    },
    isError: false
}
 */
const b: Array<number> = [1, 2, 3];

type APIResponse<TData> = {
  data: TData;
  isError: boolean;
};

const a: APIResponse<number[]> = {
  data: [1, 2, 3],
  isError: false,
};

// Function takes in Typle type array
function aToO<T>(array: [string, T][]) {
  const obj: {
    [index: string]: T;
  } = {};

  array.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arr: [string, number | boolean][] = [
  ["keyOne", 1],
  ["keyTwo", 2],
  ["keyThree", true],
];

const obj = aToO(arr);
