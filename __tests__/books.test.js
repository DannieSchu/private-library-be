const { getAuthor, getBook, getBooks, getNotes } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  it('creates a book', async() => {
    const author = await getAuthor();

    return request(app)
      .post('/api/v1/books')
      .send({
        authorId: author._id, 
        title: 'Mansfield Park',
        genre: 'literature',
        pages: 387
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          authorId: author._id, 
          title: 'Mansfield Park',
          genre: 'literature',
          pages: 387,
          __v: 0,
        });
      });
  });

  it('gets all books', async() => {
    const books = await getBooks();

    return request(app)
      .get('/api/v1/books')
      .then(res => {
        expect(res.body).toEqual(books);
      });
  });

  it('gets a book by its id', async() => {
    const author = await getAuthor();
    const book = await getBook({ authorId: author._id });
    const notes = await getNotes({ book: book._id });

    return request(app)
      .get(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...book,
          notes,
          authorId: author
        });
      });
  });

  it('updates a book genre', async() => {
    const book = await getBook();

    return request(app)
      .patch(`/api/v1/books/${book._id}`)
      .send({ genre: 'science fiction' })
      .then(res => {
        expect(res.body).toEqual({
          ...book,
          genre: 'science fiction'
        });
      });
  });

  it('deletes a book', async() => {
    const book = await getBook();

    return request(app)
      .delete(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual(book);
      });
  });
});
