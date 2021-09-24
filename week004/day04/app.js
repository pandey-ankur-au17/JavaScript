const { urlencoded } = require('express');
const express = require('express')


// console.log(express)

const server=express();

server.use(urlencoded({extended:true}))


server.get('/',(req,res) => {
    res.sendFile(`${__dirname}`+'/index.html')

});

server.get('/submitted',(req,res) => {
    res.send("<h2>Form Submitted</h2>")

});

server.post('/submit',(req,res) => {
    res.send(req.body)
    console.log(req.body)
});

server.get('*',(req,res) => {
    res.sendFile(`${__dirname}`+'/Error.html')

});

server.listen(8090);

console.log("Server Running...")


