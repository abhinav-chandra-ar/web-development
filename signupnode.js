var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req,res)=>{

    var q = url.parse(req.url,true);

    if (q.pathname === '/'){
        fs.readFile('./html files/hello.htm',(err,data)=>{
            
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
            
        })
    }
    else if (q.pathname === '/signup'){

        fs.readFile('./html files/signup.html',(err,data)=>{
        
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }

    else if(q.pathname === '/login'){
        res.write('Login')
        res.end()
    }

    else if(q.pathname=== '/signupaction'){

        res.write('Form submitted')
        res.end()
        console.log(q.query)
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.end()
           }
    } 

).listen(8000,()=>console.log('server started'))