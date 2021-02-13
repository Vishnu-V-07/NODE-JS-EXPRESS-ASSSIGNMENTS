var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/q9',function(req,res){
    console.log('Welcome to Marksheet Page');
    res.sendFile(__dirname +'/views/q9.html');
})
app.post('/validate',function(req,res){
    var Name=req.body.Name;
    var FatherName=req.body.FatherName;
    var InstituteName=req.body.InstituteName;
    var Batch=req.body.Batch;
    var OfficeAutomation=req.body.OfficeAutomation;
    var WebDesigning=req.body.WebDesigning;
    var It=req.body.It;
    var Programming=req.body.Programming;
    

    console.log("Login done Successfully");
    res.send(`<b>Student Information</b><br>
    Name:${Name}<br>
    FatherName:${FatherName}<br>
    InstituteName:${InstituteName}<br>
    Batch:${ Batch}<br>
    <br>
    <b>Subjects Marks</b><br>
    OfficeAutomation:${ OfficeAutomation}<br>
    WebDesigning:${ WebDesigning}<br>
    It:${ It}<br>
    Programming:${ Programming}<br>
    
    `);
})
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})