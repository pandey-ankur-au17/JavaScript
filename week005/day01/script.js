const { urlencoded } = require('express');
const express = require('express')
const server=express();
server.use(urlencoded({extended:true}))


//connecting to databases
const {MongoClient}= require('mongodb') //I9Z5v2ZXni3ImvhP password
const dbUrl= `mongodb+srv://survey_app:I9Z5v2ZXni3ImvhP@cluster0.rhuc5.mongodb.net/Survey_form_data?retryWrites=true&w=majority`

const client = new MongoClient(dbUrl)

server.post('/', async (req,res) => {
    await client.connect()
    const db = client.db('Survey_form_data')
    const collectionRef = db.collection('Survey_Responce')
    const insertResult = await collectionRef.insertOne(req.body)
    // res.send(insertResult)

    
    //RESULT OF DATABASE WITHIN THE TAB
    const data = await collectionRef.find({}).toArray()
    res.send(data)
    console.log(insertResult)

});

//Normal processess
server.get('/',(req,res) => {
    res.sendFile(`${__dirname}`+'/index.html')

});

server.get('/submitted',(req,res) => {
    res.send("<h2>Form Submitted</h2>")

});

// server.get('/submit',async (req,res) => {
//     const data = await collectionRef.find({}).toArray()
//     res.send(data)
// });

server.get('*',(req,res) => {
    res.sendFile(`${__dirname}`+'/404page.html')

});

server.listen(8090);

console.log("Server Running...")


