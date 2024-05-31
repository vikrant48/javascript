/* Objects, in JavaScript, are the most important data type and form the building blocks for modern JavaScript.
These objects are quite different from JavaScript’s primitive data types (Number, String, Boolean, null, undefined,
and symbol) in the sense that these primitive data types all store a single value each (depending on their types).*/
/*An object is a reference data type. Variables that are assigned
 a reference value are given a reference or a pointer to that value.
A property is a “key: value” pair, where a key is a string or a symbol (also called a “property name”), and 
the value can be anything including numbers, strings, booleans, functions, arrays, or even other objects. .
 */
//An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object.
// object can be declear by two way 1-> constructor(singleton ) 2-> literals

//1) new Object(value)
// const object1 = new Object();
// object1.property1 = 42;

// 2)Object(value)  Object()  can be called with or without new. Both create a new object.
// const object1 = Object();
// object1.property1 = 42;

/*4)Using an Object Literal
   a)const object_name = {};
     object_name.key=value;

   b)let object_name = {           //we will use this one much
     key_name : value,           // the datatype of key_name is string by defalt
     ...
    }
*/

//accessed using the dot notation   objectName.memberName
//accessed using the Bracket Notation.  objectName["memberName"]

/*The property names(key) can be strings or numbers. In case the property names are numbers, 
they must be accessed using the “bracket notation”*/
/*somePerson.first name // invalid
somePerson["first name"] // valid */

//*******************************************Using an Object Literal*********************************** */

// symbol
const mysmbl1=Symbol();
const mysmbl2=Symbol("mysymble2");
const mysmbl3=Symbol("mysymble3");

const about_me = {
    name: "vikrant",
    "roll number": 163,
    branch: "ece",
    ismale: true,
    20: 40,   
    //symbol
    [mysmbl1]: "mysymble1", // for making mysmbl1 ko string se symbol datatype key ko bracket me likho
    [mysmbl2]:"",
    mysmbl2:"mysymble2",
    [mysmbl3]:"changesybl3",
    //function
    displayinfo: function () {   // here display called method and other are properties
        console.log(`my name is ${about_me.name} and roll number is ${this["roll number"]} im male ${this.ismale} and 20*2 is equal to ${about_me["20"]}`);

        // inside the object area we can acces with this or with object_name both 
    },
    displayinfoofsymble: function(){
       console.log(`dataypes:- ${typeof'name'},${typeof[20]}, ${typeof mysmbl1}, ${typeof [mysmbl2]},${typeof mysmbl2},${typeof mysmbl3}`);
       console.log(`values:- ${this[mysmbl1]}, ${this.mysmbl2},${this[mysmbl2]},${ this[mysmbl3]}`);
    },
    //nsted object 
    nsobject1: {
        pos1:"im in nsobject1",
        nsobject2:{
            pos2:"im in nsobject2"
        }
    }

}
//function 
about_me.displayinfo();
about_me.fun_1 = function(){
    console.log("outer function");
}
about_me.fun_1; //without scoping output is nothing but not gives error
about_me.fun_1();

//nested object
console.log(about_me.nsobject1.nsobject2);

// also we can acsess by 
console.log(about_me.branch);
console.log(about_me["roll number"]); // here i cant use dot notation becouse of spacing in btw and key is a number (datatype string)

console.log(about_me[20]);
console.log(about_me['20']); // here above both are give same result 

console.log(about_me['name']);
//console.log(about_me[name]); this will show error that name is not define 

about_me.displayinfoofsymble();
//console.log(about_me);

//overwrite or change 
about_me.branch="ECE";
console.log(about_me.branch);

//freez the object to overcome with change
Object.freeze(about_me);
about_me.branch="ECE,2025";
console.log(about_me.branch); // ECE ony not change 

console.log(about_me.hasOwnProperty('fun_1'));

/***************************************using singleton method ************************* */
const object1 = new Object();
object1.property1 = 42;  
//or
const object2 = Object();
object2.property1 = 43;
console.log(`with new ${object1.property1} and without new ${object2.property1}`);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~some useful prototype~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//murge /assign objects
const target = { a: 1, b: 2 };
const source1 = { c: 3, d: 4 };
const source2 = { e: 5, f: 6 };

const returnedTarget = Object.assign(target, source1, source2);  //assign returns the modified target object.
console.log(returnedTarget);

console.log(returnedTarget === target); // true 
console.log(Object.assign({},source1,source2)); // here target is user given empty object
console.log({...target,...source1,...source2}); //spread method 

//keys,values,entries,hasproperty
//console.log(`keys ${Object.keys(about_me)}`);
//console.log(`values  ${Object.values(about_me)}`);
//console.log(`both  ${Object.entries(about_me)}`);

// array of object
const arrobj =[
    {
        id:1,
        name:'vikrant'
    },
    {
        id:2,
        name:'vachana'
    },
    {
        id:3,
        name:'chauhan'
    }
]
console.log(arrobj[1].name);

// de-strucher 
//syntex - const {key_name : kya bulana hai }= kis object se key hai;
const {branch:br} = about_me;
console.log(br);

// this is change 









