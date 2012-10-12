var express = require('express');
var app = express();


// configuration
app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use('/static', express.static(__dirname + '/public'));


// Dummy posts
var posts = [
    {title: "Title 1", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 2", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 3", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 4", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 5", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 6", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 7", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 8", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 9", "desc": "xxxxxxxxxxxxxxxxx"},
    {title: "Title 10", "desc": "xxxxxxxxxxxxxxxxx"}
];


// routes
app.get('/', function(req, res){
    res.render('index');
});

app.post('/posts/add', function(req, res){
    console.log("new post was saved in DB");
});

app.get('/posts/list', function(req, res){
    res.send(posts);
});


app.listen(3000);
console.log('check 127.0.0.1:3000 out');