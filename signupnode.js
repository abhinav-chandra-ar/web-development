var http = require('http')
var fs = require('fs')

http.createServer((req,res)=>{

    if (req.url === '/'){
        fs.readFile('./html files/hello.htm',(err,data)=>{
            
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
            
        })
    }
    else if (req.url === '/signup'){

        fs.readFile('./html files/signup.html',(err,data)=>{
        
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
    })
}

    else if(req.url === '/login'){
        res.write('Login')
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.end()
           }
    } 

).listen(8000,()=>console.log('server started'))