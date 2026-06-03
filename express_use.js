 const express = require('express')
 const path = require('path')
 const app = express()
 var readLine = require('readline-sync')

 var name = readLine.question("Enter your name :")

 app.use ((req,res,next)=>{
    console.log('Hello')
    next()
 })

app.get('/',(req,res)=>{
    res.send("Hi " +  name)
})
 app.get('/signup',(req, res,next)=>{
    console.log('Middle')
    res.sendFile(path.join(__dirname,'signup.html'))
    next()
 })

 app.use((req,res,next)=>{
    console.log("end")
 })

 app.listen(3000,()=>{
    console.log(__dirname)
    console.log("server started")
 })