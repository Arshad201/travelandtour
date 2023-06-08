import React from 'react'
import Card from '../Card/Card'
import './TopRatedDes.css'
import Img from '../../assets/venice.jpg'

const TopRatedDes = () => {

    let array = [1, 2, 3, 4, 5, 6]

    return (
        <div className='topRated-container'>
            <h1 className='topRated-heading'>Top Rated <span className='highlight'> Destinations</span></h1>
            <div className='Card-container'>

                {
                    array.map((tour,index) => (
                        <Card key={index}></Card>
                    ))
                }
            </div>
            
        </div>

        
    )

}

export default TopRatedDes