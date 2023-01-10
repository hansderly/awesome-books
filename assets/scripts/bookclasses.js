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



const form = document.querySelector('.form');

const { title, author } = form.elements;

const data = localStorage.getItem('library');

const library = new Library();

library.setList(JSON.parse(data));

const saveTolocalStorage = () => {
    const libraryStringify = JSON.stringify(library);
    localStorage.setItem('library', libraryStringify);
  };

  const loadBooks = () => {
    const bookWraper = document.querySelector('.bookWraper');
    let bookElement = '';
    const newlist = library.getList();
    newlist.forEach((book, index) => {
      bookElement += `
                  <div class="book">
                  <div id="book-title">${book.bookTitle} by ${book.bookAuthor}</div>
                  <button id="remove" onclick="remove(${index})" >Remove</button>
                  </div>
                  <hr> `;
    });
    bookWraper.innerHTML = bookElement.length === 0 ? '<p> No book </p> <hr><br>' : bookElement;
  };
  loadBooks();

  const remove = (index) => {
    library.remove(index);
    loadBooks();
  };
  remove();

  const addBook = (e) => {
    e.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;

    const book = new Book(bookTitle, bookAuthor);

    library.add(book);
    saveTolocalStorage();
    loadBooks();
    form.reset();
  };
  form.addEventListener('submit', addBook);
  
