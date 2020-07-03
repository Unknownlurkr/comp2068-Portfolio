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

/*home page using GET*/
router.get('/home', function (req, res) {
    res.render('home');
});

/*GET About-Me*/
router.get('/About-Me', function (req, res) {
    res.render('About-Me');
});

/*GET Projects*/
router.get('/Projects', function (req, res) {
    res.render('Projects');
});

/*GET Services*/
router.get('/Services', function (req, res) {
    res.render('Services');
});

/*GET Contact*/
router.get('/Contact', function (req, res) {
    res.render('Contact');
});



/* POST contact page */
router.post('/contact', function (req, res) {
    console.log(req.body);
    const contact = new ContactModel({ name: req.body.name, email: req.body.email, description: req.body.description, phone: req.body.phone});
    contact.save(function (err) {
        console.log(err);
        res.redirect('/');
    });
}); 

module.exports = router;