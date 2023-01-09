const form = document.querySelector('.form');
const { title, author } = form.elements;

let data = localStorage.getItem('library');
let library = JSON.parse(data);
const loadBooks = () => {
	const bookWraper = document.querySelector('.bookWraper');
	let bookElement = '';
	library.forEach((book) => {
		bookElement += `
                <div class="book">
                <div id="book-title">${book.bookTitle}</div>
                <div id="book-author">${book.bookAuthor}</div>
                <button id="remove">Remove</button>
                </div>
                <hr> `;
	});
	bookWraper.innerHTML = bookElement;
};

loadBooks();

const remove = (index) => {
	library = library.filter((el, i) => i !== index);
	const libraryStringify = JSON.stringify(library);
	localStorage.setItem('library', libraryStringify);
	location.reload();
};

const addEventOnButton = () => {
	const listButtonRemove = document.querySelectorAll('#remove');
	listButtonRemove.forEach((button, index) => {
		button.addEventListener('click', () => remove(index));
	});
};

addEventOnButton();

const addBook = (e) => {
	e.preventDefault();
	const bookTitle = title.value;
	const bookAuthor = author.value;
	const book = { bookTitle, bookAuthor };
	library.push(book);
	const libraryStringify = JSON.stringify(library);
	localStorage.setItem('library', libraryStringify);
	location.reload();
	form.reset();
};

form.addEventListener('submit', addBook);
