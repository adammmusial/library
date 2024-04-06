class Book {
    constructor(title,author,genre,read){

        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = read;
    }
}

class Library {

    constructor(){
        this.books=[]
    }

    addBook(book){
        this.books.push(book)
    }

    delete(index){
        this.books.splice(index, 1)
    }

    getBooks() {
        return this.books;
    }
}

class UI {
    static displayBooks(books) {
        const bookGrid = document.getElementById('bookGrid');
        bookGrid.innerHTML = '';

        books.forEach((book, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            let statusClass = book.read.replace(/\s+/g, '-').toLowerCase();
            card.classList.add(statusClass);

            card.innerHTML = `
            <div class="card-content">
                <div class="labels">
                    <p>Title:</p>
                    <p>Author:</p>
                    <p>Read:</p>
                    <p>Genre:</p>
                </div>
                <div class="values">
                    <p>${book.title}</p>
                    <p>${book.author}</p>
                    <p>${book.read}</p>
                    <p>${book.genre}</p>
                </div>
            </div>
            <button class="deleteBtn" data-index="${index}">Delete</button>
            `;

            bookGrid.appendChild(card);
        });

        UI.deleteBookEvent(library);
    }

    static deleteBookEvent(library) {
        document.querySelectorAll('.deleteBtn').forEach(button => {
            button.addEventListener('click', function() {
                const bookIndex = this.getAttribute('data-index');
                library.delete(bookIndex);
                UI.displayBooks(library.getBooks());
            });
        });
    }
}

const library = new Library();

document.addEventListener('DOMContentLoaded',() => UI.displayBooks(library.getBooks()));

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

    const book = new Book(title,author,genre,readStatus);
    library.addBook(book)
    UI.displayBooks(library.getBooks())
    document.getElementById('bookDialog').close()
    document.getElementById('bookForm').reset()

})

