const {MongoClient, ObjectId} = require('mongodb');

const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))


const dbURL = `mongodb+srv://survey_app:I9Z5v2ZXni3ImvhP@cluster0.rhuc5.mongodb.net/Hotel?retryWrites=true&w=majority`
const client = new MongoClient(dbURL)

//add new resources
app.post('/hotel', async (req, res) => {


    console.log("COMING FROM INSOMNIA")

    await client.connect()

    let dbRef = client.db('Hotel')

    const productColRef = dbRef.collection('Resources')
    
    const productData =  req.body
    
    const insertedResult = await productColRef.insertOne(productData)
    
    res.json(insertedResult)
})


//get all resources
app.get('/hotel', async (req, res) => {

    await client.connect()

    let dbRef = client.db('Hotel')

    const productColRef = dbRef.collection('Resources')

    const allProducts = await productColRef.find({}).toArray()
    
    res.json(allProducts)
})

const PORT = 9090
app.listen(PORT, () => {
    console.log('Server Started')
})