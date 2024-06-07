// creation of promish
// type1
const promish1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task 1 comp ')
    },1000);
     resolve() 
    //its return type function when the Promise is resolved.
    //without resolve then will not invoke
})
promish1.then(()=>{
    console.log('promish1 consumed')
})

//type2
new Promise ((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task 2 comp')
    }, 2000);
    resolve()
}).then(()=>{
    console.log('promish2 consumed')
})

//type 3
new Promise ((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task 3 comp ')
    }, 3000);
    resolve({username : 'vikrant',age:21})
}).then((user)=>{
   console.log(user)
   console.log(user.age)
})

//type 4
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task 4 comp')
        let err = true;
        if(!err){
            resolve(['one','two','three'])
        }
        else(
            reject('something went wrong ')
        )
    }, 4000);

})
.then((arr)=>{
    console.log(arr)
    return arr[1]
})
.then((element)=>{
    console.log(element)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('the promish either resolved or rejected')
})

//type 5 (async -> trycatch->await )
const promish5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('async task 5 comp')
        let err = false;
        if(!err){
            resolve(['one','two','three'])
        }
        else(
            reject('something went wrong ')
        )
    }, 5000);
})
async function consumepromisfive(){
    try {
       const resolve = await promish5
       console.log(resolve)
    } catch (err) {
        console.log(err)
    } 
    
}
consumepromisfive()


//fetch
async function getdata(){
    try {
        const resolve = await fetch('https://api.github.com/users/vikrant48')
        // fetch return a promish
        const data  =  await resolve.json()
        console.log(data)
    } catch (error) {
        console.log('error: something went wrong')
    }
}
setTimeout(()=>{
    getdata()
},6000)

// by then and why its resopnsce is pahle then async because of spacial queue (fetch queue its priorty is high )
fetch('https://api.github.com/users/vikrant48')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    return data.login
})
.then((name)=>{
    console.log(name)
})
.catch(()=>{
    console.log('error: something went wwrong')
})






