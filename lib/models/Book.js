const mongoose = require('mongoose');

// model for Book
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
  pages: {
    type: Number,
    required: true
  }
});

// find ids of top 3 authors with most written pages
schema.statics.mostPages = function() {
  return this
    .aggregate([
      {
        '$group': {
          '_id': '$authorId', 
          'pageCount': {
            '$sum': '$pages'
          }
        }
      }, {
        '$sort': {
          'pageCount': -1
        }
      }, {
        '$limit': 3
      }, {
        '$project': {
          '_id': true
        }
      }
    ]);
};

module.exports = mongoose.model('Book', schema);

