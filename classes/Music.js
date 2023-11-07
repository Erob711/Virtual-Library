// import the Media class:
const Media = require("./Media")
// create your Music class:
class Music extends Media {
    constructor(title, genre, year, artist, length){

    super(title, genre, year)

    this.artist = artist
    this.length = length
}

static shortestAlbum(music) {
    let shortest = music[0]
    music.map((song) => {
        if (song.length < shortest.length) {
            shortest = song
        }
    })
    return shortest
}

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
}


// don't change below
module.exports = Music;
