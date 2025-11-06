"use strict";
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
const personalMovieDB = {
    count: 0,
    movies: [],
    actors: {},
    genres: [],
    privat: false,
    writeYourGenres: function () {
        let genre;
        for (let i = 1; i <= 3; i++) {
            genre = (
                prompt(`Ваш любимый жанр под номером ${i}`, "") || ""
            ).trim();
            if (
                genre === null ||
                genre == "" ||
                !genre ||
                genre === undefined
            ) {
                console.log("Вы ничего не ввели :(");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((elem, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${elem}`);
        });
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            ("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt(
                "Один из последних просмотренных фильмов?"
            ).trim();
            let filmRaiting = +prompt("На сколько оцените его?");

            if (
                lastFilm &&
                filmRaiting &&
                (lastFilm && filmRaiting) != "" &&
                (lastFilm && filmRaiting) != null &&
                lastFilm.length < 50
            ) {
                personalMovieDB.movies[lastFilm] = filmRaiting;
            } else {
                i = 0;
            }
        }
    },
    start: function () {
        personalMovieDB.count = +prompt(
            "Сколько фильмов вы уже посмотрели?",
            ""
        );
        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                "Сколько фильмов вы уже посмотрели?",
                ""
            );
        }
        personalMovieDB.count = numberOfFilms;
    },
};

personalMovieDB.writeYourGenres();
