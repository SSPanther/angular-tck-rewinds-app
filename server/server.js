// server.js
const express = require('express');
const bodyParser = require('body-parser');
const emailer = require('./emailer/emailer');

const app = express();

// Run the app by serving the static files
// in the dist directory

var distFolder = __dirname + '/../dist';

//console.log(`distFolder: ${distFolder}`);

app.use(express.static(distFolder));
app.use(bodyParser.json());

app.post('/email', (req, res) => {

    //console.log('req.body: ', JSON.stringify(req.body));

    var firstName = req.body.firstName;

    //console.log('Extracted FirstName');

    var emailRequest = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };

    //console.log('Setup email request');

    emailer.sendMail(emailRequest).then((doc) => {
        res.send(doc);
    }).catch((e) => res.status(400).send(e));

    /*
    res.send({
        msg: "Email request sent"
    });
    */

    /*
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    */
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 3000);

console.log('Server listening on port', process.env.PORT || 3000);