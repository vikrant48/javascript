//*******************date******************/
let mydate = new Date()//gives in not readable
console.log(typeof(mydate)) //object
console.log(mydate.toString()) // Tue Dec 24 2024 11:26:57 GMT+0530 (India Standard Time)
console.log(mydate.toISOString()) // 2024-12-24T05:56:57.284Z
console.log(mydate.toUTCString()) // Tue, 24 Dec 2024 05:56:57 GMT
console.log(mydate.toDateString()) // Tue Dec 24 2024
console.log(mydate.toLocaleString()) // 24/12/2024, 11:26:57 am
console.log(mydate.toLocaleString('default',{ weekday: "long"}))//custmize date reprasentation
console.log(mydate.toLocaleTimeString()) // 11:26:57 am
console.log(mydate.toTimeString()) // 11:26:57 GMT+0530 (India Standard Time)

//give date as input

// let createddate = new Date(2024 ,0 ,25)// here in js months start  with 0 
let createddate = new Date("2024-01-25")// but in case of yyyy-mm-dd put in "" ans months start with 01
console.log(createddate.toLocaleDateString())

// *************************time**********************

let timestamp = Date.now()
console.log(timestamp)// gives time from 1 jan 1970 to to till now in miliseconds
console.log(createddate.getTime())// it convert from date to time from 1970 to till given date
console.log(Math.floor(timestamp/1000))//convert milisecond to second 

