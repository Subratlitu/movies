import React, { Component } from 'react'
import {movies} from './getMovies'
export default class Banner extends Component {
  render() {
      let movie = movies.results[0]
    
     return (
        <React.Fragment> 
        {
        movie === ''?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"> </span>
         </div>:
         <div className="card banner-card"  >
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-image" alt={movie.title}/>
         
          <h1 className="card-title banner-title"> {movie.original_title}</h1>
          <p className="card-text banner-text"> {movie.overview}</p>
         
         </div>
       }
      </React.Fragment>
    )
  }
}
