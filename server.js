var http = require('http')
var readline = require('readline-sync')

http.createServer(Server).listen(3030)

function Server(req,res){

    var user = getUser() 
    res.write('Hello ' + user)
    res.end()
}

function getUser(){

    var user = readline.question("Enter Useername ")
    return user
}