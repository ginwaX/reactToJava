'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelectorAll('.promo__interactive-list')[0],
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //prevents reload of the page
        
        const newFilm = addInput.value;
        const fav = checkbox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(ad => {
            ad.remove();
        });
    };
    deleteAdv(ads);

    genre.textContent = 'Drama';
    poster.style.backgroundImage = 'url("img/bg.jpg")';

    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((movie, i) => {
            parent.innerHTML += `
                    <li class="promo__interactive-item">${i+1} ${movie}</li>
                `;
            });
    };

    createMovieList(movieDB.movies, movieList);

});