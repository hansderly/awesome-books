/* eslint-disable max-classes-per-file */
const data = localStorage.getItem('library');
let library = JSON.parse(data) || [];
class Book {
  static books = []

  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add() {
    library.push(this);
  }

  remove() {
    library = library.filter((el, i) => i !== this.id);
  }

  static getBook(id) {
    this.books.filter((bookId) => console.log(bookId));
  }
  
  static setBook(book) {
    books.push(book);
  }
}

const form = document.querySelector('.form');
const { title, author } = form.elements;

const saveTolocalStorage = () => {
  const libraryStringify = JSON.stringify(library);
  localStorage.setItem('library', libraryStringify);
};

const loadBooks = () => {
  const bookWraper = document.querySelector('.bookWraper');
  let bookElement = '';
  library.forEach((book, index) => {
    bookElement += `
                <div class="book">
                <div id="book-title">${book.title} by ${book.author}</div>
                <button id="remove" onclick="remove(${book.id})" >Remove</button>
                </div>
                <hr> `;
  });
  bookWraper.innerHTML = bookElement.length === 0 ? '<p> No book </p> <hr><br>' : bookElement;
};
loadBooks();

const remove = () => {
  
  saveTolocalStorage();
  loadBooks();
};
remove();

const addBook = (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * (1000 - 0) + 0);
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(id, bookTitle, bookAuthor);
  newBook.add();
  saveTolocalStorage();
  loadBooks();
  form.reset();
};
form.addEventListener('submit', addBook);
