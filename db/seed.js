const Book = require('../lib/models/Book');
const Author = require('../lib/models/Author');
const chance = require('chance').Chance();

module.exports = async({ authorsToCreate = 10, booksToCreate = 100 } = {}) => {
  const genre = ['literature', 'science fiction', 'horror', 'satire'];
  const authors = await Author.create([...Array(authorsToCreate)].map(() => ({
    name: chance.name()
  })));

  await Book.create([...Array(booksToCreate)].map(() => ({
    authorId: chance.pickone(authors)._id,
    title: chance.sentence(),
    genre: chance.pickone(genre),
    length: chance.integer({ min: 40, max: 700 })
  })));
};


