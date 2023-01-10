/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  remove(id) {
    this.books = this.books.filter((el, i) => i !== id);
  }

  getList() {
    return this.books;
  }

  setList(listBook) {
    this.books = listBook;
  }
}
