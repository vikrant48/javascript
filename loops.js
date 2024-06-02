// for of and for in  and foreach
// for of 
/*The for...of statement creates a loop Iterating over iterable objects 
(including Array, string, Map, Set, arguments object and so on)
but not on object */

/*for (variable of it_object_name)
    statement...
*/

// for in 
/* The for...in statement iterates a specified variable over all the enumerable properties of an object.
but not for map */

/* for (variable in object)
  statement....
*/

//foreach array pr hi lga sakte hsi 
/* It calls a provided callbackFn function once for each element in an array*** in ascending-index order.*/

/*forEach(callbackFn)
forEach(callbackFn, thisArg)

object_name.forEach(function (variable){
  statement...
})

object_name.forEach( () => {
  statement...
})
*/

//~~~~~~~~~~~~~~~~~~~array

const myarr = [2,34,556,67655,3334,5554,45]
for (const i of myarr) {
  console.log(i) // print valus 
}
for (const i in myarr) {
  console.log(i) //print keys
  console.log(myarr[i]) // print value
}
myarr.forEach((i)=>{
  console.log(i) // print values 
})

// ~~~~~~~~~~~~~~~~~~~~map

const mp = new Map()
mp.set(1,'one')
mp.set(2,'two')
mp.set(3,'three')
mp.set('four', 4)

//console.log(mp)
for (const i of mp) {
    //console.log(i) //return whole map 
}
for (const [key,value] of mp) {
    console.log(`${key} - ${value}`)
}
// for (const key in mp) {
//     console.log(key) // not irrtable  
// }
mp.forEach((key)=>{
  console.log(`${key}`) // print value 
})


//~~~~~~~~~~~~~~~~~~`object

const myobj = {
  key1 : 'value1',
  key2 : 'value2',
  key3 : 'value3'
}

console.log(myobj)
// for (const i of myobj) { // here myobj is not iterable
//   //console.log(i)
// }
for (const key in myobj) {
  console.log(`${key} :- ${myobj[key]}`)
}

//~~~~~~~~~~~~array with objs

const arrobj = [
  {
    name:"vikrant",
    age:23
  },
  {
    name:"vachana",
    age:21
  },
  {
    name:"sheetal",
    age:23
  }
]

arrobj.forEach((obj)=>{
     console.log(obj.name)
})








/*the difference between a for...of loop and a for...in loop.
While for...in iterates over property names, for...of iterates over property values*/
/*
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i); // for in tell about their key name as in array  index 0,1,2,are keys for their values 
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);  // for of tells about the values 
}
// Logs: 3 5 7
*/


/*
Falsy values
The following values evaluate to false (also known as Falsy values):

false
undefined
null
0
NaN
the empty string ("")*/