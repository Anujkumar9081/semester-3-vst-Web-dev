const express = require('express')
const app = express();

let books = [
{ id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
{ id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
{ id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
{ id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];

app.get('/books' , (req , res)=>{
      res.status(200).json({books:books})
})

app.get('/books/:id' , (req , res)=>{
 const {id} = req.params;
 const data = books.find((e)=>e.id==id)
if(!data){
  return res.status(404).json({message:"book not found"})
}
 res.status(200).json({books:data});
})

app.listen(3000 , ()=>{
  console.log('server is running ');
  
})