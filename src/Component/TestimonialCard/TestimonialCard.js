import React from 'react'
import './Testimonial.css'
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import Timg from '../../assets/person.jpg'

const TestimonialCard = () => {
  return (
    <div className='Tcard'>
       
        <div className='Timg-bg'>    </div>
        <img src={Timg} alt="img" className='T-image'/>
     
    
        <div className='T-desc'>
           
            <p className='desc'>
            <span className='quoteIcon'><ImQuotesLeft></ImQuotesLeft></span>
            We are back from our wonderful trip and all thanks to you . Planning and bookings were well done as expected. Your set itinerary made the best use of our time. The hotels and tours were very comfortable, especially with kids. <span className='quoteIcon'><ImQuotesRight></ImQuotesRight></span>
            </p>

            <p className='T-name'>
                Abhay Dixit
            </p>
            
        </div>

    </div>
  )
}

export default TestimonialCard