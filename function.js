function hello(){
    return "hello"
}

var readline = require('readline-sync')

var name = readline.question("Enter your name :")
console.log(hello() + " " + name)