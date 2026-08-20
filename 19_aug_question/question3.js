const express = require('express')
const app = express();
app.use(express.json());  
let books = [
{ id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
{ id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
{ id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
{ id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];

const books_length = books.length;

app.post('/add' , (req , res)=>{
  const add  = req.body;

  books.push(add);
  const e = books.length;

  if(books_length==e){
    return res.status(400).json({message:"book is not added"})
  }
else{
  res.status(200).json({data:books , 
    message:'book is added'
  })}
})



//book is not add is not work only else conditon is working 

app.listen(3000 , ()=>{
  console.log('server is running ');
  
})