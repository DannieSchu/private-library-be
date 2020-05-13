const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  comment: String,
  read: Boolean,
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  }
});

module.exports = mongoose.model('Comment', schema);
