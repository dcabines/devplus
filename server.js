'use strict';

var express = require('express');
var home = require('./routes/home');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use('/*', home);

app.listen(app.get('port'), function () {
		console.log("Express server listening on port " + app.get('port'));
});