const fs = require('fs')
const readline = require('readline-sync')

let name = readline.question("Enter Name: ")

fs.writeFile('user.txt', name, (err) => {

    if(err){
        console.log(err)
        return
    }

    console.log("Data Saved")

})