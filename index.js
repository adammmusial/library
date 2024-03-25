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
