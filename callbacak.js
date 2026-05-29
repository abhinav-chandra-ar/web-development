var hello = (data) =>{
    console.log("Data : " + data)
}

var hey = (callback)=>{

    callback('crossroads')
}

hey(hello)