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

  setList(listBook) {
    this.books = listBook;
  }
}

const library = new Library();

const form = document.querySelector('.form');
const { title, author } = form.elements;

const data = JSON.parse(localStorage.getItem('library'));
if (data !== null) library.setList(data.books);

const saveTolocalStorage = () => {
  const libraryStringify = JSON.stringify(library);
  localStorage.setItem('library', libraryStringify);
};

const loadBooks = () => {
  const bookWraper = document.querySelector('.bookWraper');
  let bookElement = '';
  library.books.forEach((book, index) => {
    bookElement += `
                <div class="book">
                <div id="book-title">${book.title} by ${book.author}</div>
                <button id="remove" onclick="remove(${index})" >Remove</button>
                </div>
                <hr> `;
  });
  bookWraper.innerHTML = bookElement.length === 0 ? '<p> No book </p> <hr><br>' : bookElement;
};
loadBooks();

const remove = (index) => {
  library.remove(index);
  saveTolocalStorage();
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