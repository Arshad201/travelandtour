import React from 'react'
import Hero from '../../Component/Hero/Hero'
import FeaturedDestination from '../../Component/FeaturedDestination/FeaturedDestination'

import './Home.css'

const Home = () => {
  return (
    <div className='Home-Container'>

      <Hero></Hero>
      <FeaturedDestination></FeaturedDestination>

       
    </div>
  )
}

export default Home