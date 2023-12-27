import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb://127.0.0.1/test')
.then(() => console.log('database connected!!!'))

// create schema
const userSchema = new mongoose.Schema({
    name : String,
    gender : String,
    nationality : String,
    email: String,
    phone: Number,
    address: String,
    message: String
})

//create model
const User = mongoose.model('User', userSchema)

app.use(cors())
app.use(bodyParser.json())

// create user's data
app.post('/test', async (req, res) => {
    let user = new User()
    user.name = req.body.name,
    user.gender = req.body.gender,
    user.nationality = req.body.nationality,
    user.email = req.body.email,
    user.phone = req.body.phone,
    user.address = req.body.address,
    user.message = req.body.message
    

    // save user's data in the database
    const doc = await user.save()
    console.log(doc);
    res.json(doc)
})

// Find all the user's data
app.get('/test', async (req, res) => {
    const docs = await User.find({})
    res.json(docs)
})

app.listen(8000, () => {
    console.log('server is running on port', 8000)
})