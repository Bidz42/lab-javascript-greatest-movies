// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie)=> movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//filter the array for steven spielberg movies that are drama 
//return this new array as a number 
function howManyMovies(moviesArray) {
    counter = 0;
    let spielbergMovies = moviesArray.filter( movies => movies.director === "Steven Spielberg");
    spielbergMovies.forEach( element => {
      if(element.genre.includes("Drama")){
        counter++;
      }
      return counter;
    })   
    return counter;
    }  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// sum all scores in array
//divide by moviesArray.lenght
// to 2 decimal places
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
          return 0;
        }
    let sum = moviesArray.reduce( (previousV, CurrentV) => { return previousV + CurrentV.score}, 0)
    let result = sum/moviesArray.length;
      return Math.round(result * 100) / 100;
      }
      
  //why does this fail 'should return average even if one of the movies does not have score'. isnt this a given

// Iteration 4: Drama movies - Get the average of Drama Movies
//filter for drama
//make numerical to find average
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(drama => drama.genre.includes('Drama'));
    let sumDrama;
    let result;
    if (dramaMovies.length > 0){
    sumDrama = dramaMovies.reduce((accumulator, next) => { return accumulator + next.score}, 0)
    result = sumDrama/dramaMovies.length
    }
    else {
        result = 0
    }
    return Math.round(result*100)/100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// copy array
// sort by year
//if 2 same year sort alphabetically
function orderByYear(moviesArray) {
    function compareT(a, b) {
        if (a.title < b.title ) {return -1;}
        if (a.title > b.title) {return 1;}
        return 0;}
        moviesArray.sort(compareT);      
        
        function compareY(a, b) {
        if (a.year < b.year ) {return -1;}
        if (a.year > b.year) {return 1;}
        return 0;}
        moviesArray.sort(compareY);

        let arr=[];
        moviesArray.forEach(v => arr.push(v));

    return arr;
}

    /*const moviesArray2 = [...moviesArray];
    moviesArray2.sort(function (x, y) {return x.title - y.title; });
    moviesArray2.sort(function (x, y) {return x.year - y.year; });
    return moviesArray2;
}*/
//also tried with new syntax and failed last test. Cannot figure out why

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    function compareT(a, b) {
        if (a.title < b.title ) {return -1;}
        if (a.title > b.title) {return 1;}
        return 0;}
    moviesArray.sort(compareT);

    const title=moviesArray.map(d => d.title);

    let arr=[];
    if(title.length>20){
        for(let i=0; i<20 ; i++){
            arr.push(title[i]);
        }
        }else{
            arr=title;
        }
    return arr;
}
/*const sortedArray =[...moviesArray];
sortedArray.sort(function (x, y) {return x.title - y.title;})
for ()
return sortedArray;
}*/
//why doesnt the new syntax work the same? 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
