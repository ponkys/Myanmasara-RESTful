var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var Post = require('./models/Post.model.js');
var User = require('./models/User.model.js');
var db = 'mongodb://localhost/myanmasara';

mongoose.connect(db);

var port = process.env.PORT || 4000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('hello');
});

setupController(app);
apiController(app);

app.listen(port, function(){
    console.log('app listening on port ' + port);
});