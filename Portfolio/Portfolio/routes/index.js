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



/* POST contact page */
router.post('/contact', function (req, res) {
    console.log(req.body);
    const contact = new ContactModel({ name: req.body.name, email: req.body.email, description: req.body.description, phone: req.body.phone});
    contact.save(function (err) {
        console.log(err);
        res.redirect('/');
    });
});



/*postt method for the send page once contact info has been submitted
app.post('/send', (req, res) => {
    //output string in the body of the email
    const output = `<p>New contact request</p>
<h3>Contact Details</h3>
<ul>
<li>Name: ${req.boody.name}</li>
<li>email: ${req.boody.email}</li>
<li>description: ${req.boody.description}</li>
<li>phone: ${req.boody.phone}</li>
</ul>`;

    /*attempting to use nodemailer while following the docs:
     https://nodemailer.com/about/
     video tutorial:
     https://www.youtube.com/watch?v=nF9g1825mwk
     */
    /*creating reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", //usng googles free smtp server 
        port: 587, //port 587 since I am not using ssl only using tls
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'unkwnbot@gmail.com', // generated ethereal user full email account
            pass: ThisIsATest, // gmail password the account is spam for a chat bot i made and the acocunt will be deleted after this has been graded
            //does not include any of my personal information
        }
        });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Nodemailer Contact" <unkwnbot@gmail.com>', // sender address
        to: "200404362@student.georgianc.on.ca", // list of receivers
        subject: "Testing 123", // Subject line
        text: "This is a text", // plain text body
        html: output, // html body using output to display the html content
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    main().catch(console.error);

});
*/


module.exports = router;