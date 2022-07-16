
let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;



}

Book.prototype.info = function() {
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

function displayBooks() {
    myLibrary.forEach(console.log(title, author, pages, read));


}