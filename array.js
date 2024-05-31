//*************array******************************* */

const myarr = [1,2,3,"huhwe",true]//its a collection of mix datatype of zero indexing
const myarr2 = new Array(1,2,3,4)

console.log(typeof(myarr))     // datatype of array is object 
console.log(typeof(myarr2))
console.log(myarr)
console.log(myarr2)

//array methods
console.log(myarr.push(8))//push as it is with same datatype andd datastrucher // it will print no of element in that array 
console.log(myarr)          //this will print array becoz no outher func is present with array 
console.log(myarr.push(myarr2))//it will push whole array as element in myarr 
console.log(myarr)
console.log(myarr.pop())//pop last elemnt in that arry and return that last element 
console.log(myarr)

myarr2.unshift(9)//add in start of array by shifting each elemnent 
console.log(myarr2) 
myarr2.shift()//delete last element 
console.log(myarr2)
console.log(myarr2.includes(5))// return in boolean 
console.log(myarr2.indexOf(19))// if element is not prasent then it will return -1

console.log(myarr.join()) // convert all element in string datatype and seprate with comma
console.log(typeof(myarr.join()))

// **********************************slice , splice *********************************

console.log("A" , myarr2)
const myn1 = myarr2.slice(1,3)//print with index 1 to less then 3[1,3) and doesnot change original array
console.log(myn1)
console.log("B" , myarr2)
const myn2 = myarr2.splice(1,3)//print with index 1 to 3[1,3] and change original array by deleting that element [1,3]
console.log(myn2)
console.log("c" , myarr2)

// ********************push ,concet , spread[...] and flat **********************************
const myarr4 = [1,2,3,"vikrant"]
const myarr5 = [4,23,true,6]
const count = myarr4.push(myarr5) // why output is not proper--------*---becose count have no of element becoz array ke sath func hai and myarr4 have all data
const myarr6 = [1,2,3,"vachana"]
const myarr7 = [4,5,true,6]
const temp2 = myarr6.concat(myarr7)//does not change the original array
console.log(myarr4)//here myarr push myarr2 array as element and make partialy 2d array and return same array but with differnt size 
console.log(temp2)//combine two or more array elements in another array
console.log(...myarr6,...myarr7)//here spread all the elements in all array
const myarr3 = [1,2,[3,4,[5,6,[7,8],9],10,11],12] 
console.log(myarr3.flat(Infinity))//return a new arry after removing depth of dimention 