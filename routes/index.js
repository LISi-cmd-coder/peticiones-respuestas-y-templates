var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var name = req.body.name;
var email = req.boy.email;
var message = req.boy.message;

//console.log(req.body);

var obj = {
  to: 'lisandrovalenzuela524@gmail.com',
  subject: 'Contact from the web',
  html: name + "" + 'This person want to know how to be part of our project and this is his email' +email + ". <br> and left this message"+ message  
}

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
  usser: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
 }
})

var info = await transporter.sendMail(obj);
   
res.render('index',{
    message: 'this message was successful sended'
}) // cierra petición del post 

module.exports = router;
