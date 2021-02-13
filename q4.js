const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/3000')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("<form action='/validate' method='POST'>");
        res.write("<input type='email' placeholder='Email' name='email'><br><br>");
        res.write("<input type='password' placeholder='Password' name='password'><br><br>");
        res.write("<button type='submit'> Submit</button></form>");
        res.end();
    }
    if(req.url === '/validate' && req.method==='POST')
    {
        let arr=[];
        let email;
        let password;
        req.on('data',chunk =>{
            arr.push(chunk);
        });
        req.on('end',()=>{
            arr=Buffer.concat(arr).toString();
            email=arr.split('&')[0].split('=')[1];
            password=arr.split('&')[1].split('=')[1];
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(`<b>Email ${email} <br><br>
                            pwd: ${password} </b>`);
                           
        });

    }
})

server.listen(3000,()=>{
    console.log("Server is running at port 3000");
})