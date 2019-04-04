var fs=require('fs');
var express=require('express');
var app=express();
const port=process.env.PORT || 8007
app.use(express.static(__dirname + '/static'));
app.get('/', function(req,res) {
data= fs.readFile('a.html',   function (err, data) {
res.setHeader('Content-Type', 'text/html');
res.send(data);
});
});
app.get('/b.html', function(req,res) {
data= fs.readFile('b.html',   function (err, data) {
res.setHeader('Content-Type', 'text/html');
res.send(data);
});
});
app.get('/c.html', function(req,res) {
data= fs.readFile('c.html',   function (err, data) {
  if(err){
    console.log(err);
  }
res.setHeader('Content-Type', 'text/html');
res.redirect(301, '/g.html');
console.log("url",res);
res.send(data);
});
});
app.get('/d.html', function(req,res) {
data= fs.readFile('d.html',   function (err, data) {
  if(err){
    console.log(err);
  }
res.setHeader('Content-Type', 'text/html');
res.redirect(301, '/f.html');
console.log("url",res);
res.send(data);
});
});
app.get('/e.html', function(req,res) {
data= fs.readFile('e.html',   function (err, data) {
  if(err){
    console.log(err);
  }
res.setHeader('Content-Type', 'text/html');
res.redirect(301, '/g.html');
console.log("url",res);
res.send(data);
});
});
app.get('/g.html', function(req,res) {
data= fs.readFile('g.html',   function (err, data) {
res.setHeader('Content-Type', 'text/html');
res.send(data);
});
});
app.get('/f.html', function(req,res) {
data= fs.readFile('f.html',   function (err, data) {
res.setHeader('Content-Type', 'text/html');
res.send(data);
});
});
app.get('/i.html', function(req,res) {
data= fs.readFile('i.html',   function (err, data) {
res.setHeader('Content-Type', 'text/html');
res.send(data);

});
});
app.listen(port,() => {
console.log(`Server running at port `+port);
});
