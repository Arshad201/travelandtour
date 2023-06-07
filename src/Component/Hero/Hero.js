import React from 'react'
import video from '../../assets/ocean.mp4'
import './Hero.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrLocation } from 'react-icons/gr'
import {FaFilter} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Hero = () => {

    const [formdata, setFormdata] = useState({
        destination: " ",
        date: "",
        price:1000

    })

    function changeHandler(events) {

        setFormdata(prevData => {
            return ({
                ...prevData,
                [events.target.name]: events.target.value
            })
        })

    }
    function submitHandler(events) {
        events.preventDefault();
        console.log(formdata);
    }


    return (
        <div className='hero-container'>
            <div className='video-container'>
                <video src={video} type="video/mp4" muted autoPlay loop className='video'></video>

            </div>
            <div className='hero-content'>
                <h2 className='hero-heading1'>Our Packages</h2>
                <h1 className='hero-heading2'>Search your Holiday</h1>
                <form className='form-container' onSubmit={submitHandler}>
                    <label  >
                        <p >Search Your Destination</p>
                        <div className='destination-container'>
                            <input type="text"
                                className='destination'
                                placeholder='Enter name here...'
                                name='destination'
                                value={formdata.destination}
                                onChange={changeHandler}

                            />
                            <span className='location-container'>
                                <GrLocation className='location-icon'></GrLocation>
                            </span>
                        </div>
                    </label>
                    <label>
                        <p>Search your date</p>
                        <input type="date"
                            name='date'
                            value={formdata.date}
                            onChange={changeHandler}
                        />
                    </label>
                    <label >
                        <div className='price-container'>
                            <p>Max price</p>
                            <span className='max-price'>${formdata.price}</span>
                        </div>
                        <input type="range"
                            min="1000"
                            max="5000"
                            name='price'
                            value={formdata.price}
                            onChange={changeHandler}
                        />
                    </label>

                    <div className='filter'>
                         <FaFilter className='filter-icon'></FaFilter>
                         <p className='filter-text'>More Filters</p>
                    </div>
                  
                </form>
                <div className='icon-group'>
                    <Link to="https://www.facebook.com">
                    <FiFacebook className='facebook icon'></FiFacebook>
                    </Link>

                    <Link to="https://www.instagram.com">
                    <FiInstagram className='instagram icon'></FiInstagram>
                    </Link>

                    <Link to="https://www.twitter.com">
                        <FiTwitter className='twitter icon'></FiTwitter>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Hero