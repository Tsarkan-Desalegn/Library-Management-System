const BookInput = document.getElementById("bookInput");
const AuthorInput = document.getElementById("authorInput");
const ShelfInput = document.getElementById("shelfInput");
const DateInput = document.getElementById("dateInput");
const AddBookButton = document.getElementById("Add-book");
const DisplayBookTitle = document.getElementById("title");
const Displayauthor = document.getElementById("author");
const DisplayBookTitle = document.getElementById("title");
const DisplayShelfNumber = document.getElementById("shelfNumber");

function User (title, author, shelf, date ){
    this.title = title;
    this.author = author;
    this.shelf = shelf;
    this.date = date;
};

User.prototype.book = function () {
    return this.title;
}
User.prototype.author = function () {
    return this.author;
}
User.prototype.shelf = function () {
    return this.shelf;
}
User.prototype.date = function () {
    return this.date;
}
AddBookButton.addEventListener("click", ()=>{
    const ValueOfBook = BookInput.value;
    const ValueAOfuthor = AuthorInput.value;
    const ValueOfShelf = ShelfInput.value;
    const ValueOfDate = DateInput.value;
    
})

