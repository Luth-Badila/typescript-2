console.log("Hello World");

// Implicit Types
let helloWorld = "Hello, World!";
// Explicit Types
let firstName: string = "Rooney";
let age: number = 25;

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hello", 1];

// Enums

enum Continents {
  South_America,
  East_Asia,
  North_Europe,
  Australia,
  Antartica,
  Africa,
}

// Usage
let region = Continents.Africa;
