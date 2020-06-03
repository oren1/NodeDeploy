const mongoose = require("mongoose") 

var ContactSchema = new mongoose.Schema({
    firstName: { type : String, required : 'enter first name'},
    lastName: { type : String, required : 'enter last name'},
    email: { type : String },
    company: { type : String },
    phoneNumber: { type : Number },
    created_date: { type : Date, default: Date.now },
  });


  
  module.exports = mongoose.model('Contact', ContactSchema)