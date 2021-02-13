var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/q11',function(req,res){
     console.log('Welcome to reg page');
     res.sendFile(__dirname+'/views/q11.html');
})
app.post('/validate',function(req,res){
    var radio=req.body.radio;
    var firstname=req.body.firstname;
    var middlename=req.body.middlename;
    var lastname=req.body.lastname;
    var suffix=req.body.suffix;
    var ph=req.body.ph;
    var dob=req.body.dob;
    var sa=req.body.sa;
    var city=req.body.city;
    var state=req.body.state;
    var zc=req.body.zc;
    var hp=req.body.hp;
    var license=req.body.license;
    var is=req.body.is;
    var ed=req.body.ed;
   
    console.log("Login done Successfully");
    res.send(`<b>
    Account Type:${radio}<br>
    FirstName:${firstname}<br>
    MiddleName:${middlename}<br>
    LastName:${lastname}<br>
    Suffix:${suffix}<br>
    telephone num:${ph}<br>
    DOB:${dob}<br>
    Street Address:${sa}<br>
    City:${city}<br>
    State:${state}<br>
    Zip code:${zc}<br>
    Home phn:${hp}<br>
    License:${license}<br>
    Issuing State:${is}<br>
    Expiration date:${ed}<br>
    
    </b>
    
    `);
})
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})
