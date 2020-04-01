require('dotenv').config();
require('./lib/utils/connect')();
const Book = require('./lib/models/Book');
const Author = require('./lib/models/Author');


Book
  .mostPages()
  // .populate('authorId')
  .then(authorArr => console.log(authorArr));

Author
  .mostBooks()
  .then(author => console.log(author));
  