var nodemailer = require('nodemailer');
var config = require("./../../config/secrets");

console.log('Running emailer svc');

var transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: config.sendGridUser,
      pass: config.sendGridPassword
    },
    tls: { rejectUnauthorized: false }
  });

  console.log('Created transport');
  
  var dummyMailOptions = {
    from: config.gmailUser,
    to: config.yahooUser,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  console.log('Set up mail options');

  var sendMail = function (mailOptions) {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  };
  
  sendMail(dummyMailOptions);

  console.log('Finished');