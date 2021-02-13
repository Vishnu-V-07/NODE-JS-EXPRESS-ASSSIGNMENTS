const http=require('http');
const server=http.createServer((req,res) =>{
    if(req.url==='/3030'){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<form action='/validate' method='POST'>");
    res.write("<input type='text' placeholder='User' name='username'><br><br>");
    res.write("<input type='text' placeholder='Password' name='password'><br><br>");
    res.write("DOB:<input type='date'  placeholder='mm/dd/yyyy' name='date'><br><br>");
    res.write("Gender:<input type='radio' name='Gender' value='Male'>Male &nbsp;<input type='radio' name='Gender' value='Female'>Female<br><br>");
    res.write("Remarks:<input type='text'  name='Remarks'><br><br>");
    res.write("<button type='submit'> Submit</button></form>");
    res.end();
    }
    if(req.url === '/validate' && req.method==='POST')
    {
        let arr=[];
        let username;
        let password;
        let date;
        let gen;
        let remarks;
        req.on('data',chunk =>{
            arr.push(chunk);
        });
        req.on('end',()=>{
            arr=Buffer.concat(arr).toString();
            username=arr.split('&')[0].split('=')[1];
            password=arr.split('&')[1].split('=')[1];
            date=arr.split('&')[2].split('=')[1];
            gen=arr.split('&')[3].split('=')[1];
            remarks=arr.split('&')[4].split('=')[1];
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(`<b>Welcome ${username} <br><br>
                            pwd: ${password} <br><br>
                            DOB: ${date} <br><br>
                            Gender:${gen} <br><br>
                            Remarks: ${remarks} </b>`);

        });

    }
})

server.listen(3030,()=>{
    console.log("Server is running at port 3030");
})