var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/q8',function(req,res){
    console.log('Welcome to Login Page');
    res.sendFile(__dirname +'/views/q8.html');
})
app.post('/validate',function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    console.log("Login done Successfully");
    res.send(`<b>Hello  ${username} have a Good day..! </b>`);
})
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})