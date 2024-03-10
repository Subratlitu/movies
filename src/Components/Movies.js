import React, { Component } from 'react'
import { movies } from './getMovies'
export default class Movies extends Component {
  render() {
    let movie = movies.results
    console.log(movie,'???????????')
    return (
       <>
       {
        movie.length === 0 ?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"> </span>
         </div>:
         <div className='mov-div'>
            <h3 className='text-center'>  <strong> Trending </strong>   </h3>
            <div className='movies-list'>
                {
                    movie.map((movieObj)=>(
                        <div className="card movies-card"  >
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{height:'40vh'}} className="card-img-top movies-image" alt={movie.title}/>
                        <h4 className="card-title movies-title"> {movieObj.original_title}</h4>
                        {/* <p className="card-text banner-text"> {movieObj.overview}</p> */}
                        
                        <div className='button-wrapper' style={{display:'flex',width:'100%' , justifyContent:'center'}}>
                        <a href='#' className='btn btn-primary movies-button'>Add to Favourate</a>
                        </div>

                         </div>

                    ))
                }
            </div>
         </div>
          
       }
       </>
    )
  }
}
