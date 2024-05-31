// const a = new String("Hello world"); // a === "Hello world" is false
// const b = String("Hello world"); // b === "Hello world" is true
// a instanceof String; // is true
// b instanceof String; // is false
// typeof a; // "object"
// typeof b; // "string"

const string1 = "vikrant"
const string2 = "  vachana"

console.log(string1 + string2)
// new way to print with the help of ${}
console.log(`my name is ${string1} ans my friend name is ${string2}`)

// new way to declear string
const string3 = new String("chauhan")

console.log(typeof (string1)) // string 
console.log(typeof (string3)) // object

console.log(string3[0])
console.log(string3.__proto__) //{}

// to use its pre define function
console.log(string3.length)//here lenght is not a function
console.log(string3.toUpperCase())

const teststring = "   vikrant_and_vachana    "

// try on dirrent function
console.log(teststring)
console.log(teststring.length)
console.log(teststring.charAt(5)) // zero indexing
console.log(teststring.indexOf('t'))
console.log(teststring.substring(0, 6))//last index not include if you give
//  negative num to start it will consider as zero
console.log(teststring.slice(-8, 5))//here you can give negative but it will start from end 
//extracts a section of this string and returns it as a new string, without modifying the original string.
console.log(teststring.trim())//it will remove extra spaces from front and back return new string without modify original strings
console.log(teststring)//*****all modificatin happen in stack or pass by value ******
console.log(teststring.replace('_', '->'))//replase that  only first charact with given char  
console.log(teststring.includes('->'))//this will tell that sub string is prasent or not
console.log(teststring.split('_'))// will give a array for string 