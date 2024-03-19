const express=require('express');
const app= express();
const port = 1000;

app.get('/add',(req,res)=> {
    const n1=parseInt(req.query.n1)
    const n2=parseInt(req.query.n2)
    const sum = n1 + n2;
    res.send({sum})
});
app.listen(port, ()=>{
    console.log('server is listening');
});