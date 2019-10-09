import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(
      function(movie, index) {
        return <MovieCard key={index} title = {movie.title} IMDBRating = {movie.IMDBRating} poster = {movie.poster} genres={movie.genres}></MovieCard>
      }
    );
  }

  render() {
    return (
      <div id="movie-showcase">{this.generateMovieCards()}</div>
    )
  }
}
