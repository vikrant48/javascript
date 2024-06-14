// prototype

// const user = {
//     name : 'vikrant',
//     age : 21
// }

// user.prototype.print = function(){
//     console.log(`my name is ${this.name} and age is ${this.age}`)
// }

// const user1 = new user
// user1.print();

/*Using prototype with an object literal: The prototype property is used with constructor functions or classes,
not with regular object literals.Instantiating an object literal with new: The new keyword is used with 
constructor functions or classes, not with regular object literals.*/  

//Using Constructor Functions:
function user(name, age) {
    this.name = name 
    this.age = age
}

user.prototype.print = function(){
    console.log(`my name is ${this.name} and age is ${this.age}`)
}

const user1 = new user('vikrant' , 21)
const user2 = new user('vachana' , 20)
user1.print();
//user2.print();

// using object.create
const personPrototype = {
    name: 'vikrant',
    age: 21,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const alice = Object.create(personPrototype);
//const alice = new personPrototype()  //ERROR: personPrototype is not a constructor
alice.greet(); // Hello, my name is vikrant and I am 21 years old.



//__proto__
//Accessing the Prototype:
const person ={
    name : 'vikrant',
    greet : function(){
        console.log(`im a person and my name is ${this.name} and age is ${this.age}`)
    }
}
const adduser={
    age : 21,
    __proto__ : person // Setting the prototype of user to person
}

adduser.greet(); //im a person and my name is vikrant and age is 21
console.log(adduser.__proto__ === person); // true


//modify prototype
const addemail = {
    email : 'vikrant@gmail.com',
    print : function(){
        console.log(`im a person and my name is ${this.name} and age is ${this.age} and email is ${this.email}`)
    }

}

// changing the prototype fron person to addemail andd remove person access 
adduser.__proto__ = addemail

adduser.print();  //im a person and my name is undefined***(cant accsess of person object now bcz we change the prototype ) and age is 21 and email is vikrant@gmail.com
// adduser.greet(); //TypeError: adduser.greet is not a function
console.log(adduser.__proto__ === person); // false
console.log(adduser.__proto__ === addemail); //true


const human ={
    name : 'vikrant',
    greet : function(){
        console.log(`im a person and my name is ${this.name} and age is ${this.age} by setprototyoeof`)
    }
}
const man ={
    age : 21,
    // __proto__ : person // Setting the prototype of user to person
}

Object.setPrototypeOf(man , human)
man.greet(); //im a person and my name is vikrant and age is 21 
console.log(Object.getPrototypeOf(man)===human)//true 

// modify prototype 
const animal = {
    eat: function() {
        console.log('Eating...');
    }
};
const dog = Object.create(animal);
dog.eat(); // Eating...

const newPrototype = {
    sleep: function() {
        console.log('Sleeping...');
    }
};
Object.setPrototypeOf(dog, newPrototype);
dog.sleep(); // Sleeping...
// dog.eat();   // TypeError: dog.eat is not a function

