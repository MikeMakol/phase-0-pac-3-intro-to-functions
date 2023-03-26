// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

function doSomething(thing) {
    console.log(thing);
  }
  
doSomething("anything");

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
  
sayHelloTo("Isabel"); 
sayHelloTo("Jane"); 
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");

function add(x, y) {
    return x + y;
}
console.log(add(1, 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Sofia"));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}
console.log(say("Howdy", "partner"));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));

function mulNums(num1, num2) {
    return num1 * num2;
}
console.log(mulNums(20,30));