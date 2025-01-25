const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const route = express.Router()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/tutor',(req,res)=>{
    res.sendFile(path.join(__dirname,'tutor.html'))
})
app.get('/attendence',(req,res)=>{
    res.sendFile(path.join(__dirname,'attendence.html'))
})
app.get('/infor',(req,res)=>{
    res.sendFile(path.join(__dirname,'infor.html'))
})
app.get('/student',(req,res)=>{
    res.sendFile(path.join(__dirname,'student.html'))
})
app.listen(PORT,()=>console.log('i am here'))
