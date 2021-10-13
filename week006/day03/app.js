const express = require('express');
const morgan = require('morgan')
const dbHelper = require('./db.js')
const jwt = require('jsonwebtoken')

const empSchemaRoutes = require('./schema/signupSchema')

const app = express();

const UserModel = require('./models/User')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))

app.use(express.static('public')) 
app.use(express.static('views'))

dbHelper.dbInit()

app.use("/empSchemas", empSchemaRoutes)



//Add a user to the database
app.post('/users', async (req, res) => {


    try {
        const {email, pass} = req.body
        console.log("app.post ~ req.body", req.body)

        //validations
        if (!email || !pass) {
            res.json({
                error: true,
                message: "Empty data"
            })
            return
        }

        const oldUserPresent = await UserModel.findOne({ email: email})
        
        if (oldUserPresent && oldUserPresent.email === email) {
            res.json({
                error: true,
                message: "User already existing"
            })
            return
        }

        const userInserted = await UserModel.create({ email: email, password: pass })


        res.json(userInserted)
    
    } catch (err) {
        res.json({
            error: true,
            errorObj: err,
            message: "Unknown Error"
        })
    }

})



app.post('/login', async (req, res) => {


    try {
        const {email, pass} = req.body
        console.log("app.post ~ req.body", req.body)

        //validations
        if (!email || !pass) {
            res.json({
                error: true,
                message: "Empty data"
            })
            return
        }

        const oldUserPresent = await UserModel.findOne({ email: email})
        
        if (oldUserPresent && oldUserPresent.email === email && oldUserPresent.password === pass) {
            //

            //generate a token
            const secret = "This is my secret key"
            const jwtToken = jwt.sign({ currentUser: oldUserPresent.email }, secret, { expiresIn: '2d' })

            res.json({
                error: false,
                message: "User Logged in",
                token: jwtToken
            })
            return
        }


        res.json({
            error: true,
            message: "User credentials does not match"
        })

    
    
    } catch (err) {
        res.json({
            error: true,
            errorObj: err,
            message: "Unknown Error"
        })
    }

})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(` listening on port ${PORT}!`);
});