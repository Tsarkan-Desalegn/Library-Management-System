const BookInput = document.getElementById("bookInput");
const AuthorInput = document.getElementById("authorInput");
const ShelfInput = document.getElementById("shelfInput");
const DateInput = document.getElementById("dateInput");
const AddBookButton = document.getElementById("Add-book");
const displaySection = document.getElementById("displaySection");
const BookContainer =document.querySelectorAll(".book-container");


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
 const borrowReturnBtn = document.createElement("button");
     borrowReturnBtn.classList.add(".borrow-return");

      bookDiv.innerHTML = 
      `     <div class="title">
               <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height = "29px"; style="position:relative; top:7px;"><title>book-open-variant-outline</title><path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19M14 16.35C14.96 16 16.12 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57C19.13 14.41 18.29 14.33 17.5 14.33C16.16 14.33 15 14.5 14 14.76V16.35M14 13.69C14.96 13.34 16.12 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67C16.22 11.67 15.05 11.82 14 12.12V13.69M14 11C14.96 10.67 16.12 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C16.18 9 15 9.15 14 9.46V11Z" /></svg>Book Title </h3>
               <p>${ReleaseBook.getitle()}</p>
            </div>
      
        <div class="author">
             <h3 ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height = "29px";style="position:relative; top:17px;"><title>account-tie</title><path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" /></svg>Book Author</h3>
             <p>${ReleaseBook.getauthor()}</p>
       </div>
            <div class="date">
               <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height = "29px"; style="position:relative; top:7px;"><title>bookshelf</title><path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" /></svg> Shelf Number</h3>
               <p>${ReleaseBook.getshelf()}</p>
            </div>
        <div class="date">
             <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height = "29px"; style="position:relative; top:7px;"><title>calendar-month-outline</title><path d="M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13V11H17V13H15M11 13V11H13V13H11M7 15H9V17H7V15M15 17V15H17V17H15M11 17V15H13V17H11Z" /></svg>Registered On</h3>
             <p>${ReleaseBook.getdate()}</p><br>
        </div>
        
        <div>
        <button class="borrow-return"> <p class="changeBtn">Borrow</p></button><br><br>
        <p class="available">Available</p><br>
        <button class="delete"> ✨Delete </button>
        </div>
        `;

      
             bookDiv.style.boxShadow = "1px 1px 12px 2px";
                 bookDiv.style.borderRadius = ".5rem";
                    bookDiv.style.backgroundColor = " rgb(65, 39, 6)";
                            bookDiv.style.fontFamily = "cursive";
                              bookDiv.style.margin = "10px 0";
                                 bookDiv.style.padding = "10px";
    displaySection.appendChild(bookDiv);

    BookInput.value =""; 
    AuthorInput.value ="";
    ShelfInput.value = "";
    DateInput.value ="";

    const deleteBtn = bookDiv.querySelector(".delete");
        deleteBtn.addEventListener("click", ()=>{
            bookDiv.remove();
        });
     const borrowBtn = bookDiv.querySelector(".borrow-return");
     const DisplayAvailability = bookDiv.querySelector(".available");
     const changeBtn = bookDiv.querySelector(".changeBtn");
      const borrowReturnDiv = bookDiv.querySelector(".borrow-return");

          borrowBtn.addEventListener("click", ()=>{
            if(changeBtn.textContent ==="Borrow"){
            DisplayAvailability.textContent = "Borrowed";
            changeBtn.textContent = "Return";
             borrowReturnDiv.style.backgroundColor ="rgb(196, 14, 213)";
             borrowReturnDiv.style.border ="none";
             DisplayAvailability.style.backgroundColor ="red"
           
            }
            else {
                DisplayAvailability.textContent = "Available";
                changeBtn.textContent = "Borrow";
                 DisplayAvailability.style.backgroundColor ="green";
                   changeBtn.style.backgroundColor ="";
                   borrowReturnDiv.style.backgroundColor ="green"
            }
      
          }) 
    }
});


 




