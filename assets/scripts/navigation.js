
function showContact(){

const contact = document.querySelector('.contactInfo');
const library = document.querySelector('.library');
const addBook = document.querySelector('.addBook');

library.style.display = 'none';
addBook.style.display = 'none';
contact.style.display = 'flex';
}

function showList(){

    const contact = document.querySelector('.contactInfo');
    const library = document.querySelector('.library');
    const addBook = document.querySelector('.addBook');
    
    library.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
}

function showAdd(){

    const contact = document.querySelector('.contactInfo');
    const library = document.querySelector('.library');
    const addBook = document.querySelector('.addBook');
    
    library.style.display = 'none';
    addBook.style.display = 'block';
    contact.style.display = 'none';
}