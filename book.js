const form = document.querySelector('.form');
const { title, author } = form.elements;
const library = [];

const addBook = (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const book = { bookTitle, bookAuthor };
  library.push(book);

  let newBook = document.createElement('div');
    string = `<div id="book-title">${title.value}</div>
    <div id="book-author">${author.value}</div>
    <button id="remove">Remove</button>
    <hr></hr>`;
    newBook.innerHTML = string;
    document.querySelector('.bookWraper').appendChild(newBook);

};

const loadBooks = (e) => {

    
    const container =  document.querySelector('.bookWraper');
    string = `
    <div class="book"> 
    <div id="book-title">${title.value}</div>
    <div id="book-author">${author.value}</div>
    <button id="remove">Remove</button>
    <hr>
    </div>`;
    container.innerHTML = string;
}

const buttonRemove = document.querySelector('#remove');

const removeBook = (e) => {

}

buttonRemove.addEventListener('click', removeBook );

form.addEventListener('submit', addBook);
