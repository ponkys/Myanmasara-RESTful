var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var Post = require('./models/Post.model.js');
var User = require('./models/User.model.js');
var db = 'mongodb://localhost/myanmasara';
cors = require('cors');



mongoose.connect(db);

var port = process.env.PORT || 4000;

// cors
var originsWhitelist = [
  'http://localhost:3000',      //this is my front-end url for development
];

var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));

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