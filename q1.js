const http =require('http');
const server = http.createServer((req, res) => {
    console.log("Hello");
})
server.listen(3000,()=>{
    console.log("Server is running");
})

