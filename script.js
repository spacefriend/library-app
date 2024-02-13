const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

myLibrary[0] = new Book('Mistborn', 'Brandon Sanderson', '100', 'Unread');
myLibrary[1] = new Book('Rage of Dragons', 'BEvan Winter', '100', 'Unread');
myLibrary[2] = new Book('Red Rising', 'Pierce Brown', '100', 'Read');

let addBookForm = document.getElementById("addBookForm");
let addBookBtn = document.getElementById("addBookBtn");
let exitAddBookBtn = document.getElementById("exit");
let bookCount = 3;

addBookBtn.addEventListener("click", (e) => {
    document.getElementById('hidden').id = 'visible';
})

exitAddBookBtn.addEventListener("click", (e) => {

    document.getElementById('visible').id = 'hidden';
    
})

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readStatus = addBookForm.elements["readStatus"].value
    
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    addBookForm.reset();
    displayAddedBook();
})
function addBookToLibrary(){
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary = [...myLibrary, newBook];


}


function displayAddedBook(){
    const shelf = document.getElementById("shelf");
    const addBook = document.createElement('div');

    addBook.innerHTML = `<div class='book'>` + myLibrary[bookCount].title + `</div>`;
    shelf.appendChild(addBook);
    bookCount++;

}

function initialDisplayBook(){
   const shelf = document.getElementById("shelf");
    for (book of myLibrary){
        console.log(book);
        const newBook = document.createElement('div');
        newBook.innerHTML = `<div class='book'>` + book.title + `</div>`;
        shelf.appendChild(newBook);
        
    }

}

function getBookInfo(){

}

window.onload = function(){
    initialDisplayBook();
}