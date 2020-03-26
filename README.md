# Mongo Aggregations

This is a book application with Book and Author models
  * Static methods on models for aggregations:
    * Top 3 authors with the most books
    * Top 3 authors with the most written pages

## Routes
`POST /api/v1/authors` to create a new author
`GET /most-books` to get the three authors with the most books
`GET /api/v1/authors/:id` to get an author by ID
`GET /api/v1/authors` to get all authors
`PATCH /api/v1/authors/:id` to update an author
`DELETE /api/v1/authors/:id` to delete an author

`POST /api/v1/books` to create a new book
`GET /most-pages` to get the ids for the three authors with the highest page counts
`GET /api/v1/books` to get all books
`GET /api/v1/books/:id` to get a book by id and populate author
`PATCH /api/v1/books/:id` to update a book
`DELETE /api/v1/books/:id` to delete a book