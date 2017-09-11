const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
let books = [
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  },
  { title: 'Harry Potter',
    author: 'J.K. Rowling'
  }
];

//Middleware
app.use(bodyParser.json());


// Routes:
// app.get('/', (req, res) => {
//   res.send("hello world")
// });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.get('/books', (req, res) => {
  res.send(books);
});

app.post('/books', (req, res) => {
  books.push({title: req.body.title, author: req.body.author});
  res.send("added book");
  // console.log(req)
});

const port = 4040;
app.listen(port);
console.log('Listening on port ' + port);
