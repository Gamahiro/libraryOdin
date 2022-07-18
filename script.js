const libraryContainer = document.querySelector('.libraryContainer');
const newBookBtn = document.querySelector('#newBookBtn');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('#closeBtn');

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






/* const cardContent = '<div class="card"><p> Title: ' + myLibrary[i].title + '</p><p> Author: ' + myLibrary[i].author + '</p><p> Pages: ' + myLibrary[i].pages + '</p><p> Read: ' + myLibrary[i].read + '</p></div> ';
 */

/* function displayBooks() {

for(let i = myLibrary.length - 1; i >= 0; i--) {
    console.log(myLibrary[i]);
    libraryContainer.innerHTML += '<div class="card"><p> Title: ' + myLibrary[i].title + '</p><p> Author: ' + myLibrary[i].author + '</p><p> Pages: ' + myLibrary[i].pages + '</p><p> Read: ' + myLibrary[i].read + '</p></div> ';
const para = document.createElement('div');
para.innerText = 'Title: ' + myLibrary[i].title + 'Author: ' + myLibrary[i].author + 'Pages: ' + myLibrary[i].pages + 'Read: ' + myLibrary[i].read;
libraryContainer.appendChild(para);

}
}
 */

function clearLibrary() {
    libraryContainer.innerHTML = '';
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
    
    
    
    });

}







function newBookForm() {
    document.querySelector('#newBookForm').style.display = 'flex';
 
}

closeBtn.addEventListener('click', function () {
    document.querySelector('#newBookForm').style.display = 'none';
})
 newBookBtn.addEventListener('click', newBookForm);

document.querySelector('form').onsubmit = function(e){
    e.preventDefault();
    title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    pages = document.getElementById('pages').value,
    read = document.getElementById('read').value
    if(read === 'on') {
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