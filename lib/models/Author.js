const mongoose = require('mongoose');

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

schema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'authorId'
});

// top 3 authors with the most written pages

/*
Find top 3 authors with the most books
  [x] lookup: join books collection to authors collection on authorId
  [x] project: return total number of books
  [x] sort: sort in descending order
  [x] limit: show only top three authors
*/
schema.statics.mostBooks = () => {
  return this
    .aggregate([
      {
        '$lookup': {
          'from': 'books', 
          'localField': '_id', 
          'foreignField': 'authorId', 
          'as': 'books'
        }
      }, {
        '$project': {
          '_id': true, 
          'name': true, 
          'totalBooks': {
            '$size': '$books'
          }
        }
      }, {
        '$sort': {
          'totalBooks': -1
        }
      }, {
        '$limit': 3
      }
    ]);
};

module.exports = mongoose.model('Author', schema);
