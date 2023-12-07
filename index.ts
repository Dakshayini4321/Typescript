console.log('hello');
let age: number =20;
age = "a"; //error, automatically shows

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let color: string = "blue";

let n: null = null;
let u: undefined = undefined;

function logMessage(): void {
    console.log("log");
}

let anyType: any = 5;
anyType = "text";

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

let unionType: number | string = 10;
unionType = "hello";


let literalType: "small" | "medium" | "large" = "medium";

type ID = number;
let userId: ID = 123;

enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;


let numArray: number[] = [1, 2, 3];

let tuple: [string, number] = ["hello", 10];


let user: { name: string, age: number } = { name: "John", age: 25 };


let add: (x: number, y: number) => number = function(x, y) { return x + y; };

let inferredType = "string"; 

let nonNullable: string | null | undefined = "value";
nonNullable = null; 

let unknownType: unknown = 4;
let numFromUnknown: number = unknownType as number;

function throwError(message: string): never {
    throw new Error(message);
}

let obj: object = { prop: "value" };

let myFunction: Function = () => console.log("Hello, world!");


let sym: symbol = Symbol("key");

let bigIntVal: bigint = 100n;

let variable: number;
let typeOfVariable: typeof variable = 5;

class MyClass {}
let instance: MyClass = new MyClass();
let isInstance: boolean = instance instanceof MyClass;

type Point = {
    x: number;
    y: number;
    printCoordinates(this: Point): void;
};

let readonlyArray: ReadonlyArray<number> = [1, 2, 3];


type Person = { name: string; age: number };
let people: Record<string, Person> = {
    john: { name: "John", age: 25 },
    jane: { name: "Jane", age: 30 },
};

type ExtractExample = Extract<"a" | "b" | "c", "a" | "b">; 

type NonNullableExample = NonNullable<string | null | undefined>; 

function exampleFunction(a: number, b: string): boolean {
    return true;
}
type Params = Parameters<typeof exampleFunction>; 
type Return = ReturnType<typeof exampleFunction>; 

let numbers: number[] = [1, 2, 3];

let names: string[] = ["John", "Jane", "Doe"];
console.log (names);

let firstElement: number = numbers[0];

numbers[1] = 10;

let arrayLength: number = numbers.length;

numbers.push(4);

let lastElement: number | undefined = numbers.pop();

let combinedArray: number[] = numbers.concat([5, 6]);

for (let num of numbers) {
    console.log(num);
}

let squaredNumbers: number[] = numbers.map(num => num * num);

let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);

let sum: number = numbers.reduce((acc, num) => acc + num, 0);

let [first, second, ...rest] = numbers;

let matrix: number[][] = [[1, 2], [3, 4]];



let newArray: number[] = [...numbers, 7, 8];

let index: number = numbers.indexOf(3);
console.log(index);