const myLibrary = [];

function Book(title,author,genre,read) {
  this.title = title;
  this.author = author;
  this.author = genre
  this.read = read
}

function addBookToLibrary(title,author,genre,read) {
    const newBook = Book(title,author,genre,read) 
    myLibrary.push(newBook)
}

function displayBooks(){
    const bookGrid = document.getElementById('bookGrid')
    bookGrid.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.genre}</p>`;
        bookGrid.appendChild(card);
    })
}


document.getElementById('addBookBtn').addEventListener('click', function () {
    document.getElementById('bookDialog').showModal();
})

document.getElementById('closeDialog').addEventListener('click', function () {
    document.getElementById('bookDialog').close();
})

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title,author,genre,read);
    displayBooks()
    document.getElementById('bookDialog').close()
    document.getElementById('bookForm').reset()
})

document.addEventListener('DOMContentLoaded',displayBooks)