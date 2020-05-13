# Mongo Aggregations

This is a book application with Book and Author models
  * Static methods on models for aggregations:
    * Top 3 authors with the most books
    * Top 3 authors with the most written pages

## Routes
`POST /api/v1/authors` to create a new author<br>
`GET /most-books` to get the three authors with the most books<br>
`GET /api/v1/authors/:id` to get an author by ID<br>
`GET /api/v1/authors` to get all authors<br>
`PATCH /api/v1/authors/:id` to update an author<br>
`DELETE /api/v1/authors/:id` to delete an author<br><br>

`POST /api/v1/books` to create a new book<br>
`GET /most-pages` to get the ids for the three authors with the highest page counts<br>
`GET /api/v1/books` to get all books<br>
`GET /api/v1/books/:id` to get a book by id and populate author<br>
`PATCH /api/v1/books/:id` to update a book<br>
`DELETE /api/v1/books/:id` to delete a book<br>

`POST /api/v1/comments` to create a new comment<br>
`DELETE /api/v1/comments` to delete a comment<br>
