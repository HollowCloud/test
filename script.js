const numberOfFilms = +prompt("How many films have you watched?", "");

console.log(numberOfFilms);

const arr = [];
const obj = {};
const ObjMov = {};



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const Movies = prompt("What was the last movie you have watched?", "");
const Movies1 = prompt("How would you rate it?", "");
const Movies2 = prompt("What was the last movie you have watched?", "");
const Movies3 = prompt("How would you rate it?", "");

personalMovieDB.movies[Movies] = Movies1; //Запись будет примерно такой: movies: {'Logan': 8.1}
personalMovieDB.movies[Movies2] = Movies3;

console.log(personalMovieDB);