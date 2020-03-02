
class Library {
  constructor(books = []) {
  this.books = books;
  }

bookCount(){
  return this.books.length;
}
// Library.prototype.bookCount = function () {
//   return this.books.length;
// };

addBook(newBook){
  this.books.push(newBook);
}

// Library.prototype.addBook = function (newBook) {
//   this.books.push(newBook);
// };

addBooks(newBooks){
  newBooks.forEach((book) => this.books.push(book));
}
//
// Library.prototype.addBooks = function (newBooks) {
//   newBooks.forEach(book => this.books.push(book));
// };
//

printInventory(){
  const  {title, author} = book;
  this.books.forEach((book) => {
  console.log(`${title} by ${author}`);
  })
}


// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };
}


export default Library;
