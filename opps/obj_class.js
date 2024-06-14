// about new 
function user (name ,age){
    this.name=name ;
    this.age=age;
    return this; // not nessasry 
}

let p1 = user('vikrant',21);
console.log(p1) // output name: 'vikrant', age: 21
let p2 = user('vachna',20);
console.log(p1) // output name: 'vachna', age: 20 even thodo we console p1 becose its p2 overwrite the function 
// thats why we need new keyword to create new intance for each object


// Define a class
class Person {
    // Constructor 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Create an instance of the class
 const person1 = new Person('Alice', 30);
// Call a method on the instance
 person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

