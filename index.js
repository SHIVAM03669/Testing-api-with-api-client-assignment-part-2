const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Helper: Read and write to JSON
const readData = () => JSON.parse(fs.readFileSync('data.json', 'utf8'));
const writeData = (data) => fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

// Routes

// GET /books - Retrieve all books
app.get('/books', (req, res) => {
  const books = readData();
  res.status(200).json(books);
});

// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id', (req, res) => {
  const books = readData();
  const book = books.find(b => b.book_id === req.params.id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
});

// POST /books - Create a new book
app.post('/books', (req, res) => {
  const books = readData();
  const newBook = req.body;

  // Validate input
  if (!newBook.book_id || !newBook.title || !newBook.author || !newBook.genre || !newBook.year || !newBook.copies) {
    return res.status(400).json({ error: 'Invalid book data' });
  }

  // Check if book_id already exists
  if (books.some(b => b.book_id === newBook.book_id)) {
    return res.status(409).json({ error: 'Book ID already exists' });
  }

  books.push(newBook);
  writeData(books);

  res.status(201).json(newBook);
});

// PUT /books/:id - Update book information
app.put('/books/:id', (req, res) => {
  const books = readData();
  const bookIndex = books.findIndex(b => b.book_id === req.params.id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const updatedBook = { ...books[bookIndex], ...req.body };
  books[bookIndex] = updatedBook;

  writeData(books);
  res.status(200).json(updatedBook);
});

// DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
  const books = readData();
  const bookIndex = books.findIndex(b => b.book_id === req.params.id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const deletedBook = books.splice(bookIndex, 1);
  writeData(books);

  res.status(200).json({ message: 'Book deleted', deletedBook });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
