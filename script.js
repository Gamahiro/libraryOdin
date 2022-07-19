const libraryContainer = document.querySelector('.libraryContainer');
const newBookBtn = document.querySelector('#newBookBtn');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('#closeBtn');
const para = document.createElement('p');

let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let id;
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

function clearLibrary() {
    libraryContainer.innerHTML = '';
}

function readEmoji(value) {
    if(value === true) {
        return '<span style="color:green; font-size:32px; background-color:white; border:2px solid black">✔</span>';
    }
    else return '<span style="color:red; font-size:32px; background-color:white; border:2px solid black">❌</span>';
}

function updateLibrary() {
    clearLibrary();




    myLibrary.forEach(function (value, i) {

        myLibrary[i].id = i;
        let card = document.createElement('div');
        card.className = 'card';
        card.id = 'id' + i;
        let name = document.createTextNode('Title: ' + value.title);
        console.log(value);
        card.appendChild(name);

        let author = document.createTextNode('Author: ' + value.author);
        card.appendChild(author);


        let pages = document.createTextNode('Pages: ' + value.pages);
        card.appendChild(pages);

        let read = document.createTextNode('Read: ' + value.read);
        card.appendChild(read);

        card.innerHTML = "<p>" + 'Title: ' + value.title + "</p> <p>" + 'Author: ' + value.author + "</p> <p>" + 'Pages: ' + value.pages + "</p> <p>" + 'Read: ' + readEmoji(value.read) + "</p>";
        libraryContainer.appendChild(card);

        let btn = document.createElement('button');
        btn.className = 'rmBookBtn';
        btn.textContent = 'Remove Book';
        btn.id = 'rmbtn' + i;
        card.appendChild(btn);

        btn.addEventListener('click', () => {
            const index = myLibrary.indexOf(value);
            console.log(value.id);
            console.log(index);

            let removed = myLibrary.splice(index, 1);
            console.log(removed);

            libraryContainer.removeChild(card);

        });

        let readBtn = document.createElement('button');
        readBtn.className = 'readBookBtn';
        readBtn.textContent = 'Read';
        card.appendChild(readBtn);

        readBtn.addEventListener('click', () => {
            value.read = !value.read;
            updateLibrary();

        })

    });

}







function openBookForm() {
    document.querySelector('#newBookForm').style.display = 'flex';
    document.querySelector('#newBtn').style.display = 'none';
}

function closeBookForm() {
    document.querySelector('#newBookForm').style.display = 'none';
    document.querySelector('#newBtn').style.display = 'flex';
}

closeBtn.addEventListener('click', closeBookForm);
newBookBtn.addEventListener('click', openBookForm);

document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();

        title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        pages = document.getElementById('pages').value,
        read = document.getElementById('read').value
    if (read === 'on') {
        read = true;
    }
    else {
        read = false;
    }

    addBookToLibrary(title, author, pages, read);
    updateLibrary();
}


function init() {
    addBookToLibrary('Lord Of The Rings', 'J.R.R Tolkien', '3000', true);
    addBookToLibrary('Lord Of The Rings 2', 'J.R.R Tolkien 2', '3100', true);
    addBookToLibrary('Lord Of The Rings 3', 'J.R.R Tolkien 3', '3050', true);
    addBookToLibrary('Lord Of The Rings 4', 'J.R.R Tolkien 4', '3200', true);
    updateLibrary();
}

init();