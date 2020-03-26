const { getAuthor, getBook, getBooks } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

/*
[x]`POST /api/v1/books` create a new book
[]`GET /api/v1/books/:id` get a book by id and populate author
[]`PATCH /api/v1/books/:id` update a book
[]`DELETE /api/v1/books/:id` delete a book
*/

describe('book routes', () => {
  
  it('creates a book', async() => {
    const author = await getAuthor();

    return request(app)
      .post('/api/v1/books')
      .send({
        authorId: author._id, 
        title: 'Mansfield Park',
        genre: 'literature',
        length: 387
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          authorId: author._id, 
          title: 'Mansfield Park',
          genre: 'literature',
          length: 387,
          __v: 0,
        });
      });
  });

  it('gets a book by its id', async() => {
    const author = await getAuthor();
    const book = await getBook({ authorId: author._id });

    return request(app)
      .get(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...book,
          authorId: author._id
        });
      });
  });
});
