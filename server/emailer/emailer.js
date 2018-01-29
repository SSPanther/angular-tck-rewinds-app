var nodemailer = require('nodemailer');
//var config = require("./../../config/secrets");

//console.log('Running emailer svc');

var transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.tck_sendGridUser,
      pass: process.env.tck_sendGridPassword
    },
    tls: { rejectUnauthorized: false }
  });

  //console.log('Created transport');
  
  var dummyMailOptions = {
    from: process.env.tck_gmailUser,
    to: process.env.tck_YahooUser,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  //console.log('Set up mail options: ', JSON.stringify(dummyMailOptions));
/*
  var sendMail = function (mailOptions) {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  };
*/
  var sendMail = function (emailRequest) {

    var mailOptions = {
      from: process.env.tck_gmailUser,
      to: process.env.tck_YahooUser,
      subject: 'Email request from TCK Website',
      text: `Details: First Name: ${emailRequest.firstName}, Last Name: ${emailRequest.lastName}`
    };

    console.log('From :', mailOptions.from);
    console.log('To :', mailOptions.to);
    console.log('Sending email with text : ', mailOptions.text);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  };
  
  //sendMail(dummyMailOptions);

  //console.log('Finished');

  module.exports = { sendMail };