const express=require('express');
const server = express();
server.use('/static',express.static("./static"));

server.get('/',(request,response)=>{
    response.send("Hello World, learning Node js");
});



server.listen(3000,()=> console.log("Server is Live"));