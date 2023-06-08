import React from 'react'
import './FeaturedDestination.css'
import Card from '../Card/Card'

const FeaturedDestination = () => {

   let array = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className='featuredDestination-container'>
       <h1 className='featured-heading'>Most Visited <span className='highlight'> Destinations</span></h1>
       <div className='Card-container'>
        
        {
           array.map((tour)=>(
            <Card></Card>
           ))
        }
        </div>
    </div>
  )
}

export default FeaturedDestination