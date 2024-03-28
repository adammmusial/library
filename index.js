const myLibrary = [];

function Book(title,author,genre,read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
}


function addBookToLibrary(title,author,genre,read) {

    const newBook = new Book(title,author,genre,read) 
    myLibrary.push(newBook)
}

function displayBooks(){
    const bookGrid = document.getElementById('bookGrid')
    bookGrid.innerHTML = "";

    myLibrary.forEach((book, index) => {

        const card = document.createElement('div')
        card.classList.add('card')
        let statusClass = ''

        switch (book.read.toLowerCase()) {
            case 'read':
                statusClass = 'read';
                break;
            case 'in progress':
                statusClass = 'in-progress';
                break;
            case 'unread':
                statusClass = 'not-read';
                break;
        }

        card.classList.add(statusClass)

        card.innerHTML = `

        <h3> Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Read: ${book.read}</p>
        <p>Genre: ${book.genre}</p>
        <button class="deleteBtn" data-index="${index}">Delete</button>'`
        ;

        bookGrid.appendChild(card);
    });

    deleteCard()
}

function deleteCard() {
    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', function() {
            const bookIndex = this.getAttribute('data-index');
            myLibrary.splice(bookIndex,1);
            displayBooks();
        })
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
    const readStatusRadios = document.getElementsByName('book-status');
    let readValue = '';

    for (const radio of readStatusRadios) {
        if (radio.checked) {
            readValue = radio.value;
            break;
        }
    }

    let readStatus = '';
    switch (readValue) {
        case 'status-read':
            readStatus = 'Read';
            break;
        case 'status-in-progress':
            readStatus = 'In Progress';
            break;
        case 'status-unread':
            readStatus = 'Unread';
            break;
    }

    addBookToLibrary(title,author,genre,readStatus);
    displayBooks()
    document.getElementById('bookDialog').close()
    document.getElementById('bookForm').reset()

})

document.addEventListener('DOMContentLoaded',displayBooks)


function getRandomColor() {
    const getRandom = () => Math.floor(Math.random() * 256);
    return `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  }