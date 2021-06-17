const express=require('express');
const server = express();
server.use('/',express.static("./static"));
const moongoose = require("mongoose");
server.use(express.json());


const connection = moongoose.createConnection(
    "mongodb://localhost:27017/User_input",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
)

const inputSchema= new moongoose.Schema(
    {any:{}},
    {strict:false,collection:"login"}
)

const inputQuery = connection.model("login",inputSchema);


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