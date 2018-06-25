import React, { Component } from 'react'
import mountainScene from '../assets/mountain-scene-2.svg'

class AppIntro extends Component {

  render() {
    return (
      <div className='app-intro'>
        <div className='app-intro-text-container'>
          <div className='app-intro-text'>
            <h2>Giffy Jane.<br/>The giffy friend for your strain.</h2>
            <h2>Select a strain below to see it's vibe...</h2>
          </div>
        </div>
        
        <img className="mountain-scene" src={ mountainScene } alt=""/>
      </div>
    )
  }
  
}

export default AppIntro
