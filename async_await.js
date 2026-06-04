var promise = require('promise')

function getName(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Abhinav")
    },3000)
    })
}

function getAge(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("23")
    },2000)
    })
}

promise.all([getName(), getAge()]).then((result)=>{
    console.log(result)
})