const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  comment: String,
  rating: Number,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }
});

module.exports = mongoose.model('Comment', schema);
