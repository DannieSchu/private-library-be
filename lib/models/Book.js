const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true,
    enum: ['literature', 'science fiction', 'horror', 'satire']
  },
  length: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Book', schema)