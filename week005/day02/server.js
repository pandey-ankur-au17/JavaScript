const { urlencoded } = require('express');
const express = require('express')
const server=express();
server.use(urlencoded({extended:true}))


//connecting to products database

const {MongoClient}= require('mongodb') 
const dbUrl= `mongodb+srv://survey_app:I9Z5v2ZXni3ImvhP@cluster0.rhuc5.mongodb.net/Survey_form_data?retryWrites=true&w=majority`

const client = new MongoClient(dbUrl)






// **************************************THIS IS THE PRODUCT BLOCK**********************************************//




server.get('/products',(req,res) => {
    res.sendFile(`${__dirname}`+'/product.html')

});

server.post('/products', async (req,res) => {
    await client.connect()
    const db = client.db('Survey_form_data')
    let productRef = db.collection('Product_data')
    const insertResult = await productRef.insertOne(req.body)
    res.send(insertResult)

});







//************************************************THIS IS USER BLOCK *************************************************//



server.get('/users',(req,res) => {
    res.sendFile(`${__dirname}`+'/user.html')

});

server.post('/users', async (req,res) => {
    await client.connect()
    const db1 = client.db('Survey_form_data')
    let userRef = db1.collection('User_data')
    const insertResult1 = await userRef.insertOne(req.body)
    res.send(insertResult1)

});



//*****************************************************FETCHING DATA FROM DATABASE*************************************************//

server.get('/',async (req,res) => {
    await client.connect()
    const db2 = client.db('Survey_form_data')

    //Product
    let productResultRef = db2.collection('Product_data')
    const data1 = await productResultRef.find({}).toArray()
    res.send(data1)

});


// NEED HELP HERE HOW CAN I SHOW BOTH DATA IN SINGLE ROOT FOLDER  ????????????  {i am repeating everythinh for good practice so i can remmember} 

server.get('//',async (req,res) => {
    //User

    await client.connect()
    const db3 = client.db('Survey_form_data')
    let collectionuserRef = db3.collection('User_data')
    const data2 = await collectionuserRef.find({}).toArray()
    res.send(data2)
});
    

server.listen(9000);

console.log("Server Running...")
