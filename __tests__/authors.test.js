const { getAuthor, getBooks } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
// const connect = require('../lib/utils/connect');
// const mongoose = require('mongoose');
// const Author = require('../lib/models/Author');

/*
[x]`POST /api/v1/authors` to create a new author
[]`GET /api/v1/authors` to get all authors
[]`GET /api/v1/authors/:id` to get an author by ID
[]`PATCH /api/v1/authors/:id` to update an author
[]`DELETE /api/v1/authors/:id` to delete an author

[]`POST /api/v1/books` create a new book
[]`GET /api/v1/books/:id` get a book by id and populate tweet
[]`PATCH /api/v1/books/:id` update a book
[]`DELETE /api/v1/books/:id` delete a book
*/



describe('author routes', () => {
  it('creates an author', () => {
    return request(app)
      .post('/api/v1/authors')
      .send({
        name: 'Fyodor Dostoyevski'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Fyodor Dostoyevski',
          __v: 0
        });
      });
  });

  it('gets an author', async() => {
    const author = await getAuthor();
    const books = await getBooks();

    return request(app)
      .post(`/api/v1/${author._id}`)
      .send({
        name: 'Fyodor Dostoyevski'
      })
      .then(res => {
        expect(res.body).toEqual({
          ...author,
          books        
        });
      });
  });
});
