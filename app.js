// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal


var express = require('express'),
	app = express();

// This is needed if the app is run on heroku:

//var port = process.env.PORT || 8080;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.

//var io = require('socket.io').listen(app.listen(port));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.
app.set('port', 3000);
var server = require('http').createServer(app);

var io = require('socket.io').listen(server);


require('./config')(app, io);
require('./routes')(app, io);

var ip = "127.0.0.1";

server.listen(3000 , ip, function() {

	console.log('Express server listening ' + ip+' on port ' + app.get('port'));

});


//console.log('Your application is running on http://localhost:' + port);