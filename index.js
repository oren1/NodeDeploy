//import express from 'express';
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/Routes/crmRoutes')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4014

const { addNewContact,
    getAllContacts, 
    getContactById,
    getContactAndUpdate,
    removeContact } = require('./src/Controllers/crmController')

var dev_db_url = 'mongodb://localhost:22017/contacts'
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


app.get("/", (req,res) => {

    res.send(`First get request on port ${process.env.PORT || PORT}`)

})


// app.route('/contact')
// .get((req,res,next) => {

//     console.log(`request from ${req.originalUrl}`)
//     console.log(`request type ${req.method}`)
//     next()
    
// },getAllContacts)


// .post(addNewContact)


// app.route('/contact/:contactID')
// .get(getContactById)

// .put(getContactAndUpdate)

// .delete(removeContact)


// routes(app)

app.get('/contact',(req,res) => {

    res.json({message: `Your server is running on port ${PORT}`})
})


app.listen(process.env.PORT || PORT, () => {

    console.log(`Your server is running on port ${PORT}`)
})