const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
  { id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
  { id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];

app.get('/search', (req, res) => {
  let genre = req.query.genre;   

  const data = books.filter((e) => e.genre === genre); 

  if (data.length === 0) {          
    return res.status(404).json({ message: "no data found" });
  }

  res.status(200).json({ data: data });
});

app.listen(3000, () => {
  console.log('Server is running');
});