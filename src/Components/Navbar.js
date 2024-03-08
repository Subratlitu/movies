import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
            <h1 style={{display:'flex', marginLeft:'2rem',marginTop:'2rem'}}>Movies App</h1>
            <h2 style={{marginLeft:'2rem',marginTop:'2rem'}}>Favourite items</h2>
      </div>
    )
  }
}
