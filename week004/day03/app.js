const express = require("express")
// console.log(express)

let countMyVisit = 0; // not going with const coz its not change through out the running

const server = express();//npm install -g express only then its works in my machine.

server.get('/',(req,res) => {
    countMyVisit++;
    res.send("<span><h1>Times Visited : " +countMyVisit +"</h1></span>") //by this you can make it in one block

});
server.get('/reset',(req,res) => {
    res.send("<h1>Reset Successful</h1>")

});

server.listen(8080); 

console.log('server running...')// ctrl+C to terminate the server 