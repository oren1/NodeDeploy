//import express from 'express';
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/Routes/crmRoutes')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4004

var dev_db_url = 'http://localhost:4000'
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, (err) => {

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

    res.send(`First get request on port ${process.env.PORT || 5000}`)

})

app.listen(process.env.PORT || 5000, () => {

    console.log(`Your server is running on port ${PORT}`)
})