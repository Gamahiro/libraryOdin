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



addBookToLibrary('Lord Of The Rings', 'J.R.R Tolkien', '3000', true);
addBookToLibrary('Lord Of The Rings 2', 'J.R.R Tolkien 2', '3100', true);
addBookToLibrary('Lord Of The Rings 3', 'J.R.R Tolkien 3', '3050', true);
addBookToLibrary('Lord Of The Rings 4', 'J.R.R Tolkien 4', '3200', true);

console.log(myLibrary);

function displayBooks() {

for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
    libraryContainer.innerHTML += '<div class="card"><p> Title: ' + myLibrary[i].title + '</p><p> Author: ' + myLibrary[i].author + '</p><p> Pages: ' + myLibrary[i].pages + '</p><p> Read: ' + myLibrary[i].read + '</p></div> ';

}



}

displayBooks();