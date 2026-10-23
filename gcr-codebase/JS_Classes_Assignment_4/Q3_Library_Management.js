// Q3: Library Management System (Classes + Objects)
class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return `${this.title} is already issued.`;
    }
    this.isIssued = true;
    return `${this.title} has been issued successfully.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `${this.title} was not issued.`;
    }
    this.isIssued = false;
    return `${this.title} has been returned successfully.`;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
  new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
  new Book("1984", "George Orwell", "ISBN103", true)
];

function displayAvailableBooks() {
  const available = books.filter(book => !book.isIssued);
  console.log("Available books:");
  available.forEach(book => console.log(`${book.title} by ${book.author} (${book.ISBN})`));
}

function issueBookByISBN(isbn) {
  const book = books.find(item => item.ISBN.toLowerCase() === isbn.toLowerCase());
  if (!book) {
    console.log("No book found with that ISBN.");
    return;
  }
  console.log(book.issueBook());
}

displayAvailableBooks();
issueBookByISBN("ISBN101");
displayAvailableBooks();
