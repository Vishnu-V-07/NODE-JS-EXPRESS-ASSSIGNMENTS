var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/q10',function(req,res){
     console.log("Welcome to reg page");
     res.sendFile(__dirname+'/views/q10.html');
})
app.post('/validate',function(req,res){
    var Name=req.body.Name;
    var Email=req.body.Email;
    var radio=req.body.radio;
    var check=req.body.check;
    var drop=req.body.drop;
    var textarea=req.body.textarea;
    console.log("Login done Successfully");
    res.send(`<b>
    Name:${Name}<br>
    Email:${Email}<br>
    yes:subscriber to the news letter<br>
    
    Format of the Email:<br>
    ${ radio}<br>
     Type of Subscription you want:${ drop}<br>
    Comment to the Editor:${ textarea}<br>
    </b>
    
    `);
})
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})
