require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// Config JSON response
app.use(express.json()) // without it, Express won’t understand JSON data sent in a POST or PUT request.

app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a nossa API!'})
})

// Register User
app.post('/auth/register', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body

    // validations
    if(!name){
        return res.status(422).json({mgs: 'O nome é obrigatório!'}) // We use 422 when the server understands the request but cannot process it due to semantic errors
    }
})

// Credentials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.vc0cn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    app.listen(3000)
    console.log("Conectou ao banco!")
})
.catch((err) => console.log(err))
