const libraryContainer = document.querySelector('.libraryContainer');

let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;



}

Book.prototype.info = function () {
    return title, author, pages, read;
}



function addBookToLibrary(title, author, pages, read) {
    const newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;
    myLibrary.push(newBook);
}

function createCard {
    
}


function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {

        libraryContainer.appendChild(card);
        card.innerHTML = '<p> Title: </p>' + this.title + '<p> Author: </p>' + this.author + '<p> Pages: </p>' + this.pages + '<p> Read: </p> ' + this.read;


    }


}

addBookToLibrary('Lord Of The Rings', 'J.R.R Tolkien', '3000', true);
displayBooks();