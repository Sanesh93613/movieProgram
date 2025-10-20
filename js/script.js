"use strict";

// 4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?");
    let filmRaiting = prompt("На сколько оцените его?");

    if (lastFilm && filmRaiting && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = filmRaiting;
    } else {
        i = 0;
    }
}
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    ("Вы киноман");
} else {
    alert("Произошла ошибка");
}
