import React from 'react'
import './Card.css'
import tourImg from '../../assets/cherry.jpg'
import {BiDetail} from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'

const Card = () => {
  return (
    <div className='card'>
        <img src={tourImg} alt="tour" />
        <div className='tour-content'>
        <div className='name-container'>
            <h1>Cherry Blossom</h1>
            <h2 className='cityName'> <span><GrLocation></GrLocation></span> Japan</h2>
        </div>
      
        <p className='tour-price'>$700</p>
        <p className='tour-desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sint iste porro est nesciunt fuga consequatur incidunt quibusdam, voluptatum at vitae sequi dolore ducimus beatae sit dicta delectus. Ad, culpa.
        </p>
        <button className='detail-btn btn'>
           <p>DETAILS</p>
           <span className='detail-icon'><BiDetail></BiDetail></span>
        </button>
        </div>
       
   </div>
  )
}

export default Card