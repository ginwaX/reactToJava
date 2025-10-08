// practice 1 & 2

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

/* const a = prompt('Latest watched movie?', ''),
    b = prompt('How would you rate it?', ''),
    c = prompt('Latest watched movie?', ''),
    d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

for (let i = 0; i < 2; i++) {
    const a = prompt('Latest watched movie?', ''),
        b = prompt('How would you rate it?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("not too many movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('good enough');
} else if (personalMovieDB.count >= 30) {
    console.log('gamer movie watcher');
} else {
    console.log('error');
}

console.log(personalMovieDB);