console.log("Hello World");
// Implicit Types
var helloWorld = "Hello, World!";
// Explicit Types
var firstName = "Rooney";
var age = 25;
var x = ["Hello", 1];
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["South_America"] = 0] = "South_America";
    Continents[Continents["East_Asia"] = 1] = "East_Asia";
    Continents[Continents["North_Europe"] = 2] = "North_Europe";
    Continents[Continents["Australia"] = 3] = "Australia";
    Continents[Continents["Antartica"] = 4] = "Antartica";
    Continents[Continents["Africa"] = 5] = "Africa";
})(Continents || (Continents = {}));
// Usage
var region = Continents.Africa;
