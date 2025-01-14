// import the Media class:
const Media = require('./Media');
// create your Movie class:
class Movie extends Media{
    constructor(title, genre, year, director, duration, rating){
        super(title, genre, year);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(movies){
        return movies.reduce((longest, currentMovie) => {
            return currentMovie.duration > longest.duration ? currentMovie : longest;
          });
    }
    
}

// don't change below
module.exports = Movie;