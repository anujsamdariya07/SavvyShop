import React from 'react'
import './home.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import home_image from '../assets/hero_image.png'

function Home() {
  return (
    <div className='home'>
      <div className="home-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="home-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="home-latest-button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="home-right">
        <img src={home_image} alt="" />
      </div>
    </div>
  )
}

export default Home