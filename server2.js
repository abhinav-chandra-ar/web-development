var http = require('http')

http.createServer((req,res)=>{

    res.write("hello")
    res.end()

}).listen(3030)


var app = http.createServer((req,res) => {

    res.write("hey")
    res.end()

})

app.listen(8000)