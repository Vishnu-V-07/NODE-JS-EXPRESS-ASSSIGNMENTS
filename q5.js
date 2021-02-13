var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/q5',function(req,res){
    console.log('hi');
    res.sendFile(__dirname +'/views/q5.html');
})

app.post('/validate',function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        var date=req.body.date;
        var gen=req.body.Gender;
        var remarks=req.body.Remarks;
        console.log("data submitted");
        res.send(`<b>Welcome ${username} <br><br>
        pwd: ${password} <br><br>
        DOB: ${date} <br><br>
        Gender:${gen} <br><br>
        Remarks: ${remarks} </b>`);
})
app.listen(3030,()=>{
    console.log("server is running at the port 3030");
})