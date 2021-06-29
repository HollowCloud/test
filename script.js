'use strict';

let numberOfFilms;

function start(){
     numberOfFilms = +prompt("How many films have you watched?", "");
}

start();


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


// const Movies = prompt("What was the last movie you have watched?", "");
// const Movies1 = +prompt("How would you rate it?", "");
// const Movies2 = prompt("What was the last movie you have watched?", "");
// const Movies3 = +prompt("How would you rate it?", "");



// personalMovieDB.movies[Movies] = Movies1; //Запись будет примерно такой: movies: {'Logan': 8.1}
// personalMovieDB.movies[Movies2] = Movies3;

// if(numberOfFilms == 0 || Movies == null || Movies1 == 0 || Movies2 == null || Movies3 == 0){
//     alert("You have to fill IT!!!!");
// }

// for(let i = 1; i < Movies.length; i++){
//     if(i < 50){
//         alert("It has to be more than 50!!!");
//         break;
//     }
// }



function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const Movies = prompt("What was the last movie you have watched?", "");
        const Movies1 = +prompt("How would you rate it?", "");
    
        if(Movies != null && Movies1 != null && Movies != '' && Movies1 != '' && Movies.length < 50){
            personalMovieDB.movies[Movies] = Movies1;
            console.log("It was reading here...");
        }else {
            console.log("You have to fill it...");
            i--;
        }    
    }
}

rememberMyFilms();

function detect(){
    if(personalMovieDB.count < 10){
        console.log("It is a little amount of films...");
    }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("A classic viewer.");
    }else if(personalMovieDB.count > 30){
        console.log("You are a kinoman! Monster...");
    }else{
        console.log("There was an error in your answer...........");
    }
}

detect();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

console.log(personalMovieDB);