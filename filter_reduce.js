/*The filter() method of Array*** instances creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass the test implemented by the provided function.

Return value
A shallow copy of the given array containing just the elements that pass the test. 
If no elements pass the test, an empty array is returned.

filter(callbackFn)
filter(callbackFn, thisArg)    same as foreach  
let return_data = arr.filter((i)=>{
    statement....
    return //its mendatry
})

*/

const myarr = [1,2,3,4,5,6,7,8]
const temp = myarr.filter((i)=>{
    return i>3  // return tauly vaues 
})
console.log(temp)

//map and chaining 
const mptemp = myarr.map((i)=>{
    return i*10
})

const chain = myarr.map((i)=>i*10)
                   .map((i)=>{return i+1}) // if you use {} then u must right return
                   .filter((i)=>i>30)
console.log(chain)

// reduse 
/*The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element 
of the array, in order, passing in the return value from the calculation on the preceding element 
The final result of running the reducer across all elements of the array is a single value.

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
// 0 + 1 + 2 + 3 + 4
// Expected output: 10

Return value
The value that results from running the "reducer" callback function to completion over the entire array.

*/

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {

    console.log(`acc- ${accumulator},crrval-${currentValue},total:- ${accumulator+currentValue}`)
    return accumulator + currentValue
},
  initialValue
);
console.log(sumWithInitial);