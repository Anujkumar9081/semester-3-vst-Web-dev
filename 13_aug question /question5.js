const express = require('express')
const app = express();

app.use((req , res , next)=>{
  console.log('hii form the middleware');
  next();
})
app.get('/' , (req , res)=>{
    res.send('home page')
})

app.get('/prodects' , (req , res)=>{
    res.send('our product')
})
app.get('/login' , (req , res)=>{
    res.send('login page')
})
app.listen(3000 , ()=>{
  console.log('server is running');
  
})