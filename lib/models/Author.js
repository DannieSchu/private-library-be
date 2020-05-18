const mongoose = require('mongoose');

// model for Author
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  }
});

// display each author's books
schema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'authorId'
});


// find top 3 authors with the most books
schema.statics.mostBooks = function() {
  return this
    .aggregate([
      {
        // join books collection to authors collection on authorId
        '$lookup': {
          'from': 'books', 
          'localField': '_id', 
          'foreignField': 'authorId', 
          'as': 'books'
        }
      }, {
        // return total number of books
        '$project': {
          '_id': true, 
          'name': true, 
          'totalBooks': {
            '$size': '$books'
          }
        }
      }, {
        // sort in descending order
        '$sort': {
          'totalBooks': -1
        } 
      }, {
        // display only top three authors
        '$limit': 3
      }
    ]);
};

module.exports = mongoose.model('Author', schema);
