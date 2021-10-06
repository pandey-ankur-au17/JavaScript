const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname));

const dbHelper = require('./db.js')

dbHelper.dbInit()

//Schema Definition
const InterviewSchema = new mongoose.Schema({

    CondidateName: {
        type: String,
        required: true
    },
    Position: {
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required:true
    },
    HiringManager: {
        type: String,
        required: true
    }

})

//creating Model
const InterviewModel = mongoose.model('Form', InterviewSchema) 

app.get('/form',(req,res) => {
    res.sendFile(`${__dirname}`+'/index.html')

});

app.get('/form', async (req,res)=>{
    try {
        
        const insertedData  = await InterviewModel.find({})
        res.send(insertedData)

    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }

})

app.get('/form/:uniqueId', async (req,res)=>{
    try {
        
        const restaurant  = await InterviewModel.findById(req.params.uniqueId)
        res.send(restaurant)

    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }

})

app.post('/form',async(req,res)=>{
    try {
        
        const data = req.body

        const insertedData  = await InterviewModel.create(data)
        res.send(insertedData)

    } catch (error) {
        res.send({
            error: true,
            errorObj: error
        })
    }

})

app.put('/form/:uniqueId',async (req,res)=>{
    try{
        const data = req.body
        const updatedData = await InterviewModel.findByIdAndUpdate(req.params.uniqueID, data)
        res.send(updatedData)
    }
    catch(err){
        res.send({
            error:true,
            errorObj:err
        })
    }
})

app.delete('/form/:uniqueId',async (req,res)=>{
    try{
        
        const deletedData = await InterviewModel.findByIdAndDelete(req.params.uniqueID)
        res.send(deletedData)
    }
    catch(err){
        res.send({
            error:true,
            errorObj:err
        })
    }
})



const PORT = process.env.PORT || 9020
app.listen(PORT, () => {
    console.log(`Interview Form listening on port ${PORT}!`);
});