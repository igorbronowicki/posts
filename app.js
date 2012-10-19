var db = require('./db');
var express = require('express');
var app = express();


// configuration
app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use('/static', express.static(__dirname + '/public'));


// routes
app.get('/', function(req, res){
    res.render('index');
});

app.post('/posts/add', function(req, res){
    db.savePost();
});

app.get('/posts/list', function(req, res){
    var posts = db.getPosts();
    res.send(posts);
});


app.listen(3000);
console.log('check 127.0.0.1:3000 out');