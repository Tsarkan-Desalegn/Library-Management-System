const BookInput = document.getElementById("bookInput");
const AuthorInput = document.getElementById("authorInput");
const ShelfInput = document.getElementById("shelfInput");
const DateInput = document.getElementById("dateInput");
const AddBookButton = document.getElementById("Add-book");
const displaySection = document.getElementById("displaySection");
const BookContainer =document.querySelectorAll(".book-container")


function User (title, author, shelf, date ){
    this.title = title;
       this.author = author;
          this.shelf = shelf;
              this.date = date;
};
User.prototype.getitle = function() { return this.title; }
User.prototype.getauthor = function() { return this.author; }
User.prototype.getshelf = function() { return this.shelf; }
User.prototype.getdate = function() { return this.date; }

AddBookButton.addEventListener("click", ()=>{
    
    const ValueOfBook   = BookInput.value.trim();
    const ValueOfAuthor = AuthorInput.value.trim();
    const ValueOfShelf  = ShelfInput.value.trim();
    const ValueOfDate   = DateInput.value.trim();


    if(ValueOfBook && ValueOfAuthor&& ValueOfShelf&& ValueOfDate){
const ReleaseBook = new User(ValueOfBook, ValueOfAuthor, ValueOfShelf, ValueOfDate);

  const bookDiv = document.createElement("div");
      bookDiv.classList.add("book-container"); 

      bookDiv.innerHTML = 
      `     <div class="title">
               <h3>Book Title </h3>
               <p>${ReleaseBook.getitle()}</p>
            </div>
      
        <div class="author">
             <h3 >Book Author</h3>
             <p>${ReleaseBook.getauthor()}</p>
       </div>
            <div class="date">
               <h3> Shelf Number</h3>
               <p>${ReleaseBook.getshelf()}</p>
            </div>
        <div class="date">
             <h3>Date</h3>
             <p>${ReleaseBook.getdate()}</p>
        </div>`;

          bookDiv.style.border = "2px solid rgb(123, 255, 0)";
             bookDiv.style.boxShadow = "1px 1px 12px 2px";
                 bookDiv.style.borderRadius = ".5rem";
                    bookDiv.style.backgroundColor = "aqua";
                            bookDiv.style.fontFamily = "cursive";
                              bookDiv.style.margin = "10px 0";
                                 bookDiv.style.padding = "10px";
    displaySection.appendChild(bookDiv);

    BookInput.value =""; 
    AuthorInput.value ="";
    ShelfInput.value = "";
    DateInput.value ="";
    }
});

displaySection.addEventListener("click", (event)=>{
    const container =event.target.closest(".book-container");
    container.style.transform = "rotatex(180deg)";
     container.style.transition = "transform 0.6s";

  
});
displaySection.addEventListener("click", (event)=>{
  const container =event.target.closest(".book-container");
  container.textContent = `"Hi man This is new content"`;
  container.style.transform= "rotate(0deg)";
  
});




