/* three way to declear a function in js 
  1) function functionName(Parameter1, Parameter2, ...)  // no need to give datatype of parameters
   {
       // Function body
       but here we can call this function before its declearation 
       return statement ke baad ka code excute nhi hota hai 
   }
   2)let functionName= function (Parameter1, Parameter2, ...)
   {
       // Function body
       here we cant call this function before its decearation
   }
   3)let function_name = (argument1, argument2 ,..) => expression */

function fun1(para1 ,para2 ){
    const name = "vikrant"
    //console.log(this.name)  // undefined we can use this in object not in function
    //console.log(this) will display current contest from this scope lots of data in case of function
    return para1+para2

}
//console.log(this) // {} in node invirnment and window in browser invirnment 
console.log(fun1()) // NaN
console.log(fun1(2,7)) // 9
console.log(fun1(5)) // NaN
console.log(fun1(5,"five")) //5five
console.log(fun1("six" ,6)) //six6
console.log(fun1(2,4,6)) //6 it consider only first two

function fun2(name)
{
    if(name===undefined){
        console.log("please enter your name ")
        return 
    }
    return `my name is ${name}` // this will return undefined statement after excuting above code if no orgument will pass
}
console.log(fun2()) // my name is undefined before apply conditional statement is body
console.log(fun2("vikrant")) // my name is vikrant


// rest oprater when we dont know the no of arrgument 
 function itemprize(val1,val2,...p1){
    console.log(`val1 is ${val1}, val2 is ${val2} and rest is in p1 in the form of array ${p1} like at index 1 of p1${p1[1]}`)
 }
 itemprize(10,20,30,40,599,534)

 //arrow function 
 /*let function_name = (argument1, argument2 ,..) => {
     if more the one expression then use {}
 }*/
 let arrowfun = (num1 ,num2) => num1+num2; // this work only for one statement otherwise use {}
//  let arrowfun = (num1 ,num2) => (num1+num2); // no need to write return but if we use {} then return should be there 
// let arrowfun = () => ({name: vikrant}); //to return an object 
 console.log(arrowfun(4,7))

 let arrowfun2 = (name) => {
    const mn= "vachna"
    console.log(this) // {}  but not in normal function 
    console.log(name) //vikrant
    console.log(this.mn) // undefined 
 }
 arrowfun2("vikrant")

// IIFE
//  (fun_stru)(to call)
 /*three type 
  1)(function fun_name() {
    // …
  })(); // here ; is mendatry to stop iif 
  
  2)((parameter...) => {
    // …
  })(argument...);
  
  3)(async () => {
    // …
  })();
Use Cases Of IIFE
Avoid polluting the global namespace.
To create closures in JavaScript.
IIFE is used to create private and  public variables and methods.
It is used to execute the async and await function.
It is used to work with require function.*/