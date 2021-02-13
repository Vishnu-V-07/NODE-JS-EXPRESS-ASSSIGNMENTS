var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.get('/home',function(req,res){
       console.log("Welcome to Home page");
       res.sendFile(__dirname+'/views/home.html');
})
app.get('/login',function(req,res){
    console.log("Welcome to login page");
    res.sendFile(__dirname+'/views/login.html');
})
app.get('/signup',function(req,res){
    console.log("Welcome to signup page");
    res.sendFile(__dirname+'/views/signup.html');
})
app.get('/user/fgpwd',function(req,res){
    console.log("Welcome to forgot password page");
    res.sendFile(__dirname+'/views/Forgotpassword.html');
})
app.get('/',function(req,res){
    console.log("page not found");
    res.send(`<b>404 page not found</b>`)
    
})
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})