console.log('hello');
let age: number =20;
age = "a"; //error, automatically shows5

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


type Person = 
{ name: string; age: number; address?: string };

const person: Person = { name: "John", age: 25 };
console.log(person);

enum Color { Red, Green, Blue };
const selectedColor: Color = Color.Green;
console.log(selectedColor);

type Point = { x: number; y: number };
interface Shape { draw(): void; }

type Result = number | string;
const result1: Result = 42;
console.log(result1);

const result2: Result = "success";
console.log(result2);

function add(a: number, b: number): number { return a + b; }
const sum: number = add(3, 5);
console.log(sum);

const value: any = "123";
const numberValue: number = value as number;
console.log(numberValue);

class Animal { constructor(public name: string) {}
 makeSound(): void
  { console.log("Some generic sound"); } 
}
class Dog extends Animal { makeSound(): void { console.log("Bark! Bark!"); } 
}


const circle: Shape = { draw: () => console.log("Drawing a circle") };
console.log(circle);

const dog: Dog = new Dog("Buddy");
dog.makeSound();
console.log(dog);

const point2: Point = { x: 3, y: 4 };
console.log(point2);

const colors: Color[] = [Color.Red, Color.Blue];
console.log(colors);

interface Vehicle { start(): void; stop(): void; }
class Car implements Vehicle 
{ start(): void { 
    console.log("Car started"); } 
stop(): void { console.log("Car stopped"); } }

const myCar: Vehicle = new Car();
console.log(myCar);

const ageArray: number[] = [25, 30, 35];
console.log(ageArray);

const greeting: string = "Hello, TypeScript!";
console.log(greeting);

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(4, 7));

const square = (x: number): number => x ** 2;
console.log(square(5));

const squaredNumbers: number[] = [1, 2, 3].map(square);
console.log(squaredNumbers);

const address: string | undefined = person.address;
console.log(address);

const squaredSum: number = squaredNumbers.reduce(add, 0);
console.log(squaredSum);

const animalArray: Animal[] = [new Dog("Max"), new Animal("Cat")];
console.log(animalArray);

const reversedColors: Color[] = [...colors].reverse();
    console.log(reversedColors);

const dogName: string = (animalArray[0] as Dog).name;
console.log(dogName);

const circleDrawFunction: () => void = circle.draw;
console.log(circleDrawFunction);
const resultType: string = typeof result1;
console.log(resultType);





const uppercaseName: string = person.name.toUpperCase();
console.log(uppercaseName);

const ageUnder30: boolean = person.age < 30;
console.log(ageUnder30);
const roundedValue: number = Math.round(4.567);
console.log(roundedValue);

const uppercaseGreeting: string = greeting.toLocaleUpperCase();
console.log(uppercaseGreeting);

const dogSoundFunction: () => void = dog.makeSound.bind(dog);
console.log(dogSoundFunction);



const ageDifference: number = person.age - 20;
console.log(ageDifference);

const colorsLength: number = colors.length;
console.log(colorsLength);
const oddNumbers: number[] = [1, 3, 5];
console.log(oddNumbers);

const filteredColors: Color[] = colors.filter((color) => color !== Color.Blue);
console.log(filteredColors);
const slicedColors: Color[] = colors.slice(0, 1);
console.log(slicedColors);

const doubledSum: number = sum * 2;
   console.log(doubledSum);

const personCopy: Person = { ...person };
console.log(personCopy);

const animalNames: string[] = animalArray.map((animal) => animal.name);
console.log(animalNames);

   const isEven: boolean = sum % 2 === 0;
console.log(isEven);

const colorNames: string[] = Object.keys(Color);
console.log(colorNames);

const squaredSumString: string = squaredSum.toString();
console.log(squaredSumString);