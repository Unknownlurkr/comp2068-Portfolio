/*
 * File Name: pages.js
 * Website: Protfolio
 * Author: Brittany Samuels
 * users.js to get the user listings
 * 
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('users', { name: 'Brittany'}); //send sends json obj back
});

module.exports = router;
