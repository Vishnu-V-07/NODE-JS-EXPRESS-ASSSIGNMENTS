var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/q6',function(req,res){
    console.log('hi');
    res.sendFile(__dirname +'/views/q6.html');
})
app.post('/validate',function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    console.log("data submitted");
    res.send(`<b>Email: ${email} <br><br>
    pwd: ${password} </b>`);
})
app.listen(3000,()=>{
    console.log("server is running at the port 3030");
})