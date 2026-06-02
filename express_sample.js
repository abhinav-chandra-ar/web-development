var express = require('express')
const path = require('path')
const app = express();

app.get('/',(req,res)=>{
   res.sendFile('C:\\Users\\91918\\OneDrive\\Desktop\\web devolooper\\html files\\html files\\signup.html')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.listen(3000,()=> {
    console.log(__dirname)
    console.log('server started')
})