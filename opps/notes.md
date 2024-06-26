# new keyword
```
In JavaScript, the new keyword is used for creating instances of user-defined objects or of built-in object types (function,array,string,class) that have a constructor function.
```
## what happen when using `new` keyword
```
1-A New Object is Created: An empty object is created.

       let newobj = {}; 
  
2-Link to Prototype: The new object is linked to the prototype of the class/object. This means that the new object will inherit properties and methods from the object's prototype or class's prototype. 

       newobj.__proto__ = ConstructorFunction.prototype; // function,array,string,class are constructor functions.

3- Bind this to the New Object: The constructor function is called with this set to the new object. Any properties and methods added to this inside the constructor function will belong to the new object.

       ConstructorFunction.call(newobj, ...arguments);    

4-Return the New Object: If the constructor function does not return an object, the newly created object is returned. If the constructor explicitly returns an object, that object is returned instead.
```
```javascript
let newobj = {};
newobj.__proto__ = ConstructorFunction.prototype;
ConstructorFunction.call(newobj, ...arguments);
```
## You can also use new with built-in objects in JavaScript:
```javascript
// Create a new Date object
const date = new Date();

// Create a new Array object
const arr = new Array(1, 2, 3);

// Create a new Object
const obj = new Object();

// Create a new Function object
const fn = new Function('return "Hello, World!";');

```
``` 
impotance note 
Prototype Chain: The new object’s prototype (__proto__) is set to the constructor’s prototype property. This is what allows the new object to inherit properties and methods from the constructor’s prototype.

Return Value: If the constructor function returns an object explicitly, that object will be the result of the new expression. Otherwise, the newly created object is returned.
```

# different btn __proto__ and prototype
```
__proto__ -  ->__proto__ is a legacy feature for accessing and modifying an object's prototype.
            ->Property of individual objects. It is used to link objects to their prototype.
             ->two object ko jodane ka kaam krta hai jisase ek ki propery and method (inherit ) ho sake 
prototype   -> Property of constructor functions (and classes) not on object litaral. It is used to define properties and methods that should be inherited
               by instances.
            ->ye ek  constructor functions (and classes) ke udar ek aur user define function/ propery /method add kr do jo ki all instances create by user use kr sakta hai 

__proto__
Definition: __proto__ is an internal property of an object that points to its prototype. It is part of the object's hidden, internal state.
Purpose: It is used to set or get the prototype of an object.
Usage: All objects in JavaScript have __proto__, which points to the prototype object from which they inherit properties and methods.

prototype
Definition: prototype is a property of constructor functions (including class constructors) in JavaScript. It is an object that will be assigned as the __proto__ of all instances created by that constructor.
Purpose: It is used to define methods and properties that should be shared among all instances of a particular constructor function.
Usage: When you create a function or a class, JavaScript automatically creates a prototype property for that function/class.

Usage:

__proto__: Generally accessed directly when manipulating the prototype chain of individual objects (although modifying __proto__ directly
           is not recommended; Object.getPrototypeOf and Object.setPrototypeOf are preferred).
prototype: Used when defining constructor functions or classes to specify the methods and properties that instances should inherit.
```

```javascript
// Constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Creating an instance
const alice = new Person('Alice');

// Accessing __proto__ of the instance
console.log(alice.__proto__ === Person.prototype); // Output: true

```
# static 
```
Defined on the Class: Static methods are defined on the constructor function or class itself, not on its prototype.
Called on the Class: These methods can only be invoked on the class, not on instances of the class.
No Access to Instance Data: Static methods do not have access to instance properties or methods. They can only access static properties and methods of the class.
```
```javascript
class MyClass {
    constructor(name) {
        this.name = name;
    }

    // Instance method
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    // Static method
    static staticMethod() {
        console.log('This is a static method.');
    }
}

// Create an instance of the class
const myInstance = new MyClass('Alice');

// Call the instance method
myInstance.greet(); // Output: Hello, my name is Alice.

// Call the static method
MyClass.staticMethod(); // Output: This is a static method.

```

# call , apply and bind 
## call
```
The call method calls a function with a given this value and arguments provided individually.
syntex-
functionName.call(thisArg, arg1, arg2, ...);
```
```javascript
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
    name: 'Alice'
};

greet.call(person, 'Hello', '!'); // Hello, Alice!

```

## apply
```
The apply method is similar to call, but it takes arguments as an array.
syntex-
functionName.apply(thisArg, [arg1, arg2, ...]);

```
## bind
```
The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
syntex-
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);

```
```javascript
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
    name: 'Alice'
};

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Hello, Alice!

```
```
Differences Between call and bind

Immediate Invocation:

call invokes the function immediately with the specified this context and arguments.
bind returns a new function with the specified this context and initial arguments, but it does not invoke the function immediately.

Use Case:

Use call when you want to call a function immediately and explicitly set this.
Use bind when you want to create a new function with a specific this context and optionally pre-filled arguments, which you can call later.

Summary

call and apply are used to call a function immediately with a specific this value and arguments.
bind is used to create a new function with a specific this value and optional pre-filled arguments, which can be called later.
apply is similar to call, but it takes an array of arguments instead of listing them individually.
```
# property attributes
```
the properties writable, enumerable, and configurable are attributes of object properties that define how those properties can be interacted with. These attributes are part of the property descriptor, which you can set and get using the Object.defineProperty and Object.getOwnPropertyDescriptor methods, respectively.

writable 
Determines if the value of the property can be changed.

enumerable
Determines if the property shows up during enumeration of the properties on the object (e.g., in a for...in loop or Object.keys).

configurable
Description: Determines if the property descriptor can be changed and if the property can be deleted from the object.
```