const { getBook, getComment } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('comment routes', () => {
  it('creates a comment', async() => {
    const book = await getBook();

    return request(app)
      .post('/api/v1/comments')
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

  it('deletes a comment', async() => {
    const comment = await getComment();

    return request(app)
      .delete(`/api/v1/comments/${comment._id}`)
      .then(res => {
        expect(res.body).toEqual(comment);
      });
  });
});
