/*
 * File Name: Contact.js
 * Website: Protfolio
 * Author: Brittany Samuels
 * Creating a mongoose schema for the contact infromation entered in 
 * Contact.pug page.
 * */
const mongoose = require('mongoose');
//Create Schema
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: Int,
        required: true,
        trim: true
    }
});
//Create and instantiate model with schema
const Contact = mongoose.model("Contact", ContactSchema);//instantiate m,oodel articles and create the table looking for name and descriptioon
module.exports = Contact;
//everytime you create a new table you create a new model that keeps it neat and follows the architexture