// after ES6 
class user {
    constructor(name, age){
        this.name=name
        this.age=age
    }

    //method
    print(){
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
    
}

const user1 = new user('vikrant', 23)
user1.print()
console.log(user1.__proto__ === user.prototype )

//BTS

function users(name,age){
    this.name=name
    this.age=age
}

users.prototype.print = function (){
    console.log(`my name is ${this.name} and age is ${this.age} in bts`)
}
const user2 = new users('vikrant', 23)
user2.print()
console.log(user2.__proto__ === users.prototype )

// static we cant inherit or we cant excess

//extant and super

class animal {
    constructor(name){
        this.name=name
    }
    //method
    print(){
        console.log(`my name is ${this.name}`)
    }   
}

class type extends animal {
    constructor(name , type){
        super(name)
        this.type = type
    }
    //method
    print(){
        console.log(`there is a ${this.name} and its type is ${this.type} `)
    }   
}

const animal1 = new type('dog','german')
animal1.print()

//instanceof 
console.log(animal1 instanceof type)
console.log(animal1 instanceof animal)
console.log(type instanceof animal)
console.log(animal instanceof type)

