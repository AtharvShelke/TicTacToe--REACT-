import express from 'express';

const app = express();
const port = 3000;
app.use('/', (req,res)=>{
    res.send('Hello');
})

app.listen(port, ()=>console.log("Server Started\nPort: http://localhost:3000"));