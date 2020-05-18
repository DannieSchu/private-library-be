const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', (req, res, next) => {
    Note
      .create(req.body)
      .then(note => res.send(note))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Note
      .findByIdAndDelete(req.params.id)
      .then(note => res.send(note))
      .catch(next);
  });
