const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  comment: String,
  rating: Number,
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
    min: 0,
    max: 5
  }
});

module.exports = mongoose.model('Comment', schema);
