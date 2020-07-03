/*
 * File Name:routes.js
 * Website: Protfolio
 * Author: Brittany Samuels
 * routes.js
 * */
const router = require('express').Router();

(require('./routes/pages'))(router);

module.exports = router;