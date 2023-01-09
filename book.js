const form = document.querySelector('.form');
const buttonRemove = document.querySelector('#remove');
const { title, author } = form.elements;
const library = [
	{
		title: 'Book1',
		author: 'Author1',
	},
];

const addBook = (e) => {
	e.preventDefault();
	const bookTitle = title.value;
	const bookAuthor = author.value;
	const book = { bookTitle, bookAuthor };
	library.push(book);
	console.log(library);
};

const loadBooks = (e) => {
	const bookWraper = document.querySelector('.bookWraper');

	library.forEach((book) => {
		const bookElement = document.createElement('div');
		bookElement.classList.add('book');
		bookElement.innerHTML = `
                <div id="book-title">${book.title}</div>
                <div id="book-author">${book.author}</div>
                <button id="remove">Remove</button>
                <hr>
        `;

		bookWraper.appendChild(bookElement);
	});
};

loadBooks();

form.addEventListener('submit', addBook);
