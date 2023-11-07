// import the Media class:
const Media = require('./Media');
// create your Book class:
class Book extends Media {

    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }


    summary() {
        return "Title: " + this.title + ", Author: " + this.author + ", Year: " + this.year + ", Page Count: " + this.numPages + ", Genre: " + this.genre + ", Rating: " + this.rating;
    }
    
    static highestRating(books) {
        let highest = books[0];
        // let rating = "";
        // for (const book in books) {
        //     rating = book.rating;
        //     if (rating > highest) {
        //         highest = rating;
        //     }
        // }
        // for (const book in books) {
        //     if (book.rating == rating) {
        //         return book;
        //     }
        // }
        books.map((book) => {
            if (book.rating > highest.rating) {
                highest = book;

            }
        })
        return highest;
    }
}
// don't change below
module.exports = Book;
