import express from 'express';
import cors from 'cors';

const app= express()

app.use(express.json()) //Server will accept JSON

// Handling CORS-Error 
app.use(cors({
    origins:[
        //Adding valid origins which are known to server and allowed to do any kind of request.
        "http://localhost:5173", //vite
        "http://localhost:5174", //vite
        "http://localhost:3000"  //node-server
    ],
    credentials:true,
    methods:['GET','POST','PUT','DELETE']
}))

//a GET request endpoint set-up.
app.get('/api/message',(req, res)=>{
    res.json({'message':'Hello from the server'})
})

const port=8858
const ip="0.0.0.0"
app.listen(port,ip,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})