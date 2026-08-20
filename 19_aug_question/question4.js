const express = require('express')
const app = express();

let books = [
{ id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
{ id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
{ id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
{ id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];

app.put('/books/:id', (req, res) => {

  // step 1 — get id from URL and new price from body
  const { id } = req.params;
  const { price } = req.body;

  // step 2 — find the book
  const book = books.find((e) => e.id === Number(id));

  // step 3 — if not found send 404
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // step 4 — update the price
  book.price = price;

  // step 5 — send back the updated book
  res.status(200).json({
    message: 'Price updated successfully',
    book: book
  });

});

app.listen(3000 , ()=>{
  console.log('server is running ');
  
})