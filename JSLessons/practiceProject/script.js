// practice 1 & 2

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
};

/* const a = prompt('Latest watched movie?', ''),
    b = prompt('How would you rate it?', ''),
    c = prompt('Latest watched movie?', ''),
    d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Latest watched movie?', ''),
            b = prompt('How would you rate it?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalAchiev() {
    if (personalMovieDB.count < 10) {
        console.log("not too many movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('good enough');
    } else if (personalMovieDB.count >= 30) {
        console.log('gamer movie watcher');
    } else {
        console.log('error');
    }
}

detectPersonalAchiev();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt('Your favorite genre number ${i}');
    }
}
