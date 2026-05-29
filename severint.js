var http = require('http')
var fs = require('fs')

http.createServer((req,res) =>{

    fs.readFile('./html files/hello.htm',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8000)