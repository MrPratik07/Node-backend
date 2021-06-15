const express=require('express');
const server = express();
server.use('/',express.static("./static"));
server.use(express.json());
// server.get('/',(request,response)=>{
//     response.send("Hello World, learning Node js");
// });


server.post('/login',(req,res) =>{
    console.log(req.body);
    res.send("Authenticated");    
})


server.listen(3000,()=> console.log("Server is Live"));



// fetch("/login",{
//     headers:{
//         "content-type":"application/json"
//     },
//     method:"post",
//     body:JSON.stringify({
//         userName:"PRATIK",
//         password : "12345"
//     })
// })