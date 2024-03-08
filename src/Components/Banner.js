import React, { Component } from 'react'
import movies from '../Components/Movies'
export default class Banner extends Component {
  render() {
    console.log(movies,"...................")
     
    return (
        <React.Fragment> 
        {
        movies === ''?
        <div className="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
         </div>:
         <div class="card"  >
        <img src="..." class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
         </div>
       }
      </React.Fragment>
    )
  }
}
