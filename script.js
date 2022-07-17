const libraryContainer = document.querySelector('.libraryContainer');
const newBookBtn = document.querySelector('#newBookBtn');
const container = document.querySelector('.container');

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
    console.log(myLibrary);

}



addBookToLibrary('Lord Of The Rings', 'J.R.R Tolkien', '3000', true);
addBookToLibrary('Lord Of The Rings 2', 'J.R.R Tolkien 2', '3100', true);
addBookToLibrary('Lord Of The Rings 3', 'J.R.R Tolkien 3', '3050', true);
addBookToLibrary('Lord Of The Rings 4', 'J.R.R Tolkien 4', '3200', true);


function displayBooks() {

for(let i = myLibrary.length - 1; i >= 0; i--) {
    console.log(myLibrary[i]);
    libraryContainer.innerHTML += '<div class="card"><p> Title: ' + myLibrary[i].title + '</p><p> Author: ' + myLibrary[i].author + '</p><p> Pages: ' + myLibrary[i].pages + '</p><p> Read: ' + myLibrary[i].read + '</p></div> ';
}



}

function newBookForm() {
    document.querySelector('#newBookForm').style.display = 'flex';

/* container.innerHTML =  */
}


displayBooks();
newBookBtn.addEventListener('click', newBookForm);

document.querySelector('form').onsubmit = function(){
    
    addBookToLibrary(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
        )
        console.log(myLibrary);
displayBooks()

}


