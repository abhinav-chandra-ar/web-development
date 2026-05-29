var readline = require('readline-sync')

num1 = readline.question("Enter 2 numbers : ")
num2 = readline.question()

if (num1 > num2 ){
    console.log("Largest number is " + num1)
}
else if (num2 > num1){
    console.log("Largest numbear is " + num2)
}
else {
    console.log("The numbers are equal")
}