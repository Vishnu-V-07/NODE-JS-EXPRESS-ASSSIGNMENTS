    const http= require("http");
    const server=http.createServer((req,res) =>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("<h3>Hi user, You are accessing the following URL</h3>");
        res.write(`URL: ${req.url} <br><br>`);
        res.write(`Method: ${req.method}`);
        res.end();
    })
    server.listen(3000,()=>{
        console.log("Server is running");
    })