# classes
### Does js have class?
``` 
Yes, JavaScript has classes. Classes were introduced in ECMAScript 6 (ES6), which was released in 2015. They are syntactic sugar over JavaScript's existing prototype-based inheritance.
JavaScript classes provide a more familiar and concise way to work with object-oriented programming principles. However, it's important to remember that under the hood, they still use the prototype-based inheritance model that JavaScript is built upon.
```
## opps
#### collection of properties and method
```
-Constructor Method: constructor function -> onstructor()
-instacces (new , this )
-prototype 
-Inheritance: by extends keyword.
-Static Methods: Static methods are defined on the class itself, not on instances of the class. They are called on the class, not on instances of the class.This means that these methods are called directly on the class, not on objects created from the class.
-Getters and Setters: Classes can have getter and setter methods to control access to properties.

```
## 4 pillers 
```
1. Encapsulation
Encapsulation is the principle of bundling the data (variables) and the methods (functions) that operate on the data into a single unit, or class.

2. Abstraction
Abstraction means hiding the complex implementation details and showing only the essential features of the object. in JavaScript, it's typically achieved by hiding the details within the class and providing a simple interface for the outside world.

3. Inheritance
Inheritance is a mechanism by which one class can inherit properties and methods from another class. 

4. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also allows the same method to have different implementations in different classes.
```