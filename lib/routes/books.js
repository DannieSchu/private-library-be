const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .post('/', (req, res, next) => {
    Book
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Book
      .find()
      .then(book => res.send(book))
      .catch(next);
  })
  
  .get('/most-pages', (req, res, next) => {
    Book
      .mostPages()
      .then(authorArr => res.send(authorArr))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Book
      .findById(req.params.id)
      .populate('authorId')
      .then(book => res.send(book))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Book
      .findByIdAndUpdate(req.params.id, { genre: req.body.genre }, { new: true })
      .then(book => res.send(book))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Book
      .findByIdAndDelete(req.params.id)
      .then(book => res.send(book))
      .catch(next);
  });
