//console.log(Math.PI) // we cant over write the value here

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor) 
/* {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}*/


// we can change descriptor of own object 
const object_name = {
    name : 'vikrant',
    age: 21,
    greet: function(){
        console.log('code fut gya ')
    }
}

const owndescriptor = Object.getOwnPropertyDescriptor(object_name , 'name')
console.log(owndescriptor)
for (const [key,value] of Object.entries(object_name)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`) 
    }
    
}

// now change it  by setproprty

Object.defineProperty(object_name,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(object_name, 'name'))

for (const [key,value] of Object.entries(object_name)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`) 
    }
    
} // gives only age: 21 because name is not ittreable after changing its ittoroatr prop


