const { getBook, getNote } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('note routes', () => {
  it('creates a note', async() => {
    const book = await getBook();

    return request(app)
      .post('/api/v1/notes')
      .send({
        comment: 'Some comment here',
        rating: 4,
        book: book._id
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          comment: 'Some comment here',
          rating: 4,
          book: book._id,
          __v: 0
        });
      });
  });

  it('deletes a note', async() => {
    const note = await getNote();

    return request(app)
      .delete(`/api/v1/notes/${note._id}`)
      .then(res => {
        expect(res.body).toEqual(note);
      });
  });
});
