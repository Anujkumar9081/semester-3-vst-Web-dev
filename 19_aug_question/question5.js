const express = require('express')
const app = express();

let books = [
{ id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
{ id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
{ id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
{ id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];

app.delete('/books/:id', (req, res) => {

  // step 1 — get id from URL
  const { id } = req.params;

  // step 2 — check if book exists
  const book = books.find((e) => e.id === Number(id));

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // step 3 — filter out the book with that id
  books = books.filter((e) => e.id !== Number(id));

  // step 4 — send success message
  res.status(200).json({
    message: 'Book deleted successfully',
    deletedBook: book
  });

});

app.listen(3000 , ()=>{
  console.log('server is running ');
  
})