//import express from 'express';
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/Routes/crmRoutes')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4000


mongoose.connect("mongodb://localhost:22017/Tests", (err) => {

    if(err) throw err

    console.log('successfuly connected')


})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public/images'));


routes(app)

app.get("/", (req,res) => {

    res.send(`First get request on port ${PORT}`)

})

app.listen(PORT, () => {

    console.log(`Your server is running on port ${PORT}`)
})