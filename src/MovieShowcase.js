import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return movieData.map(movieObj => {
      // console.log(movieObj)
      return (<MovieCard key={movieObj.title} title={movieObj.title} IMDBRating={movieObj.IMDBRating} genres={movieObj.genres} poster={movieObj.poster}/>)
    });
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
