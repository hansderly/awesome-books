const form = document.querySelector('.form');
const { title, author } = form.elements;
const library = [];

const addBook = (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const book = { bookTitle, bookAuthor };
  library.push(book);
};

form.addEventListener('submit', addBook);
