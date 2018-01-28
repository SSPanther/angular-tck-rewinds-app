// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory

var distFolder = __dirname + '/../dist';

console.log(`distFolder: ${distFolder}`);

app.use(express.static(distFolder));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 3000);