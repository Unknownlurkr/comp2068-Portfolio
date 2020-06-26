/*
 * File Name: index.js
 * Website: Protfolio
 * Author: Brittany Samuels
 * index page that includes 
 * the routes for all of the pages within the portfolio
 * */
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/About-Me', function (req, res) {
    res.render('About-Me');
});

router.get('/Projects', function (req, res) {
    res.render('Projects');
});

router.get('/Services', function (req, res) {
    res.render('Services');
});

router.get('/Contact', function (req, res) {
    res.render('Contact');
});

/* POST insert page */
router.post('/Contact', function (req, res) {
    //Create a new article using the Articles Model Schema
    const contact = new ContactModel({ name: req.body.name, email: req.body.email, description: req.body.description, phone: req.body.phone});
    //Insert article into DB
    contact.save(function (err) {
        console.log(err);
        res.redirect('/');
    });
});

module.exports = router;