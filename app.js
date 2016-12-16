var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res){
	res.send('Hello Worldasdfsd');
});

app.get('/about', function(req,res){
	res.sendFile('about.html' , { root : __dirname});	
});

app.listen('3000', function(){
	console.log('Running on port 3000');
});