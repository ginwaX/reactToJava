// practice 1-3

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Latest watched movie?', ''),
                b = prompt('How would you rate it?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalAchiev: function() {
        if (personalMovieDB.count < 10) {
            console.log("not too many movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('good enough');
        } else if (personalMovieDB.count >= 30) {
            console.log('gamer movie watcher');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt('Your favorite genre number ${i}');
            // if (genre == '' || genre == null) {
            //     console.log('You entered an incorrect input');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt('Enter your fav genres separated by ,');
            if (genres == '' || genres == null) {
                console.log('You entered an incorrect input');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log('Your fav genre ${i+1}: ${item}');
            })
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.private = !personalMovieDB.private;
    }
};

