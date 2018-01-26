//Load HTTP module
// require('newrelic');
var express = require('express');
const app = express();
var http = require("http");
const path = require('path');
// const routes = require('express').Router();
var port = process.env.PORT|| 8000 ;
var serveStatic = require('serve-static');

/*var appDir = path.dirname(require.main.filename);*/

/*var DIST_DIR = path.join("dist");
console.log("\n\n Dist path is "+DIST_DIR);*/
/*console.log("\n\nMain path is "+appDir);
app.use(express.static(__dirname, '/assets'));*/

// app.use('/css', express.static(__dirname + '/assets/homepage/'));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/src/index.html'));
// });
console.log("\n\npath is "+__dirname);
app.use(express.static(__dirname + '/dist'));
// Print URL for accessing server
app.listen(port);
var date =new Date();
console.log('Server running at '+port+' at time: '+date);
