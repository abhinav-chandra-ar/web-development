const promise = require('promise')

function addNum(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1 == 0 ){
            reject('The firstt number is 0')
        }
        else{
            resolve(num1+num2)
        }
    })
}

function MultiplyNum(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1 == 0 ){
            reject('The firstt number is 0')
        }
        else{
            resolve(num1*num2)
        }
    })
}

function DIvideNum(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1 == 0 ){
            reject('The firstt number is 0')
        }
        else{
            resolve(num1/num2)
        }
    })
}


addNum(10,20).then((sum)=>{
    console.log(sum)
    return MultiplyNum(sum,10)
}).then((product)=>{
    console.log(product)
    return DIvideNum(product,10)
}).then((quotient)=>{
    console.log(quotient)
}).catch((err)=>{
    console.log(err)
})