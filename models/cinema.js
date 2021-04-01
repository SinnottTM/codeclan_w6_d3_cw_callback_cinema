const Cinema = function (films) {
  this.films = films;
};

// First attempt, worked but poor use of filter
// Cinema.prototype.movieFilterGenreAlpha = function(genre){
//   let filterFilmsGenre = [];
//   this.films.filter((film) => {
//     if (film.genre === genre){
//       filterFilmsGenre.push(film)
//     }
//   })
//   return filterFilmsGenre;
// }

// Second attempt, works much better but can be cleaned
// Cinema.prototype.movieFilterGenreBeta = function (genre) {
//   const filterFilmsGenre = this.films.filter(film => film.genre === genre)
//   return filterFilmsGenre
// }

// final form of filter, extremely tidy
Cinema.prototype.movieFilterGenre = function (genre) {
  return this.films.filter(film => film.genre === genre)
}

Cinema.prototype.movieFilterYear = function (year) {
  const filterFilmsYear = this.films.filter(film => film.year === year)
  if (filterFilmsYear.length === 0) {
    return "No films came out this year. Weird"
  }
  return filterFilmsYear
}

Cinema.prototype.movieFilterLength = function (length) {
  const filterFilmsLength = this.films.filter(film => film.length >= length)
  return filterFilmsLength
}

Cinema.prototype.totalMovieLength = function () {
  const reduceFilmLength = this.films.reduce((runningTotal, film) => runningTotal + film.length, 0)
  return reduceFilmLength
}

Cinema.prototype.movieFilter = function (property, value) {
  const filterFilms = this.films.filter(film => film[property] === value)
  return filterFilms
}

module.exports = Cinema;
