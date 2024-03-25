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


