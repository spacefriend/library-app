const myLibrary = [];
const bookColoursRead = ['red', 'blue', 'purple', 'green', 'yellow'];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

myLibrary[0] = new Book('The Final Empire', 'Brandon Sanderson', '537', 'unread');
myLibrary[1] = new Book('The Rage of Dragons', 'Evan Winter', '535', 'unread');
myLibrary[2] = new Book('Red Rising', 'Pierce Brown', '382', 'read');

let addBookForm = document.getElementById('addBookForm');
let addBookBtn = document.getElementById('addBookBtn');
let exitAddBookBtn = document.getElementById('exit');
let bookInfoList = document.getElementsByClassName('book-info-list');
let bookCount = 3;

addBookBtn.addEventListener('click', (e) => {
    document.getElementById('hidden').id = 'visible';
})

exitAddBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('visible').id = 'hidden';
    
})

/* 
Creates book object using user input, adds the object to the myLibrary array, and displays the new book
*/
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = addBookForm.elements['readStatus'].value
    
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    addBookForm.reset();
    displayAddedBook();
})
function addBookToLibrary(){
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary = [...myLibrary, newBook];


}

/*
Function for displaying a newly added book
*/
function displayAddedBook(){
    const shelf = document.getElementById('shelf');
    const addBook = document.createElement('div');

    let colour = bookColoursRead[Math.floor(Math.random()*4)];
    bookColoursRead.push(bookColoursRead.splice(bookColoursRead.indexOf(colour), 1)[0]);

    let readStatusColour = '';
    if (myLibrary[bookCount].readStatus == 'unread'){
        readStatusColour = 'unread';
    }

    let bookLength = 'short';

    if (myLibrary[bookCount].pages <= 300){
        bookLength = 'short';
    }else if(myLibrary[bookCount].pages <= 450 ){
        bookLength = 'medium'
    }else if(myLibrary[bookCount].pages <= 600){
        bookLength = 'long'
    }else{
        bookLength = 'xlong'
    }

    addBook.innerHTML = `<div class='book ` + bookLength +` `+ colour + ` `+ readStatusColour + `'><span>` + myLibrary[bookCount].title + `</span></div>`;
    
    shelf.appendChild(addBook);
    displayBookInfo(addBook, myLibrary[bookCount]);
    bookCount++;

}
/*
Function to display initial books already in the array
*/

function initialDisplayBook(){
   const shelf = document.getElementById('shelf');
    for (book of myLibrary){
        console.log(book);
        const newBook = document.createElement('div');

        let readStatusColour = '';
        if (book.readStatus == 'unread'){
            readStatusColour = 'unread';
        }

        let colour = bookColoursRead[Math.floor(Math.random()*4)];
        bookColoursRead.push(bookColoursRead.splice(bookColoursRead.indexOf(colour), 1)[0]);
        let bookLength = 'short';

        if (book.pages <= 300){
            bookLength = 'short';
        }else if(book.pages <= 450 ){
            bookLength = 'medium'
        }else if(book.pages <= 600){
            bookLength = 'long'
        }else{
            bookLength = 'xlong'
        }
        newBook.innerHTML = `<div class='book ` + bookLength +` `+ colour + ` `+ readStatusColour + `'><span>` + book.title + `</span></div>`;
        displayBookInfo(newBook, book);
        shelf.appendChild(newBook);
        
    }

}

function displayBookInfo(bookEle, bookObj){
    bookEle.addEventListener('click', (e) => {
        let bookInfoList = document.getElementById('book-info-list');
        bookInfoList.innerHTML = `<li>Title: </li><span class="temp">` + bookObj.title + `</span>
        <li>Author: </li><span class="temp">`+ bookObj.author + `</span>
        <li>Pages: </li><span class="temp">` + bookObj.pages + `</span>
        <li>Status: </li><span class="temp">` + bookObj.readStatus + `</span>`;
    })
}

function getBookInfo(){

}

window.onload = function(){
    initialDisplayBook();
}