 const express = require('express');
 const app= express();
 const port =3000;

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
let tasks=[];

app.get('/',(req, res)=>{
    res.render('index',{tasks:tasks})
});

app.post('/add',(req,res)=>{
    const newTask =req.body.task;
    tasks.push(newTask);
    res.redirect('/');
})

app.listen(port,()=>{
    console.log('Server is Running on port',port);
});