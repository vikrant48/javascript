// example 1
function f1(username){
    this.username = username
    console.log("f1 called")
}
function f2 (username,age){
    // f1(username) // why i cant use 
    f1.call(this,username)
    this.age = age
}

const temp = new f2( 'vikrant' ,21)
console.log(temp)

// exapmle2

// function f3(username){
//     this.username = 'vikrant'
// }
const user ={
    username: 'vikrant'
}

function f4 (age){
    this.age = age
    console.log(`my name is ${this.username} and age is ${this.age}`)
}
f4.call(user,21)//my name is vikrant and age is 21

// f4.call(f3,21)
// console.log(f3.username)

