import React from 'react'
import Hero from '../../Component/Hero/Hero'
import FeaturedDestination from '../../Component/FeaturedDestination/FeaturedDestination'
import TopRatedDes from '../../Component/TopRatedDes/TopRatedDes'
import Testimonial from '../../Component/Testimonials/Testimonial'

import './Home.css'

const Home = () => {
  return (
    <div className='Home-Container'>

      <Hero></Hero>
      <FeaturedDestination></FeaturedDestination>
      < TopRatedDes></TopRatedDes>
      <Testimonial></Testimonial>


       
    </div>
  )
}

export default Home