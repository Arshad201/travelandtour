import React from 'react'
import video from '../../assets/ocean.mp4'
import './Home.css'

const Home = () => {
  return (
    <div className='Home-Container'>
        <div className='video-container'>
        <video src={video} type="video/mp4" muted autoPlay loop className='video'></video>
        </div>
    </div>
  )
}

export default Home