import React from 'react'
import video from '../../assets/ocean.mp4'
import './Hero.css'
import { useState } from 'react'

const Hero = () => {

    const [formdata,setFormdata]=useState({
        destination : " ",
        date : "",
        price:""

    })

    function changeHandler(events){

        setFormdata(prevData=>{
            return({
                ...prevData,
                [events.target.name] : events.target.value
            })
        })

    }
    function submitHandler(events){
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
                <form  className='form-container' onSubmit={submitHandler}>
                    <label  >
                        <p >Search Your Destination</p>
                        <input type="text"
                            placeholder='Enter name here...'
                            name='destination'
                            value={formdata.destination}
                            onChange={changeHandler}
                             />
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
                            <span className='max-price'>$5000</span>
                        </div>
                        <input type="range"
                         min="1000" 
                         max="5000" 
                         name='price'
                         value={formdata.price}
                         onChange={changeHandler}
                         />
                    </label>
                    name='destination'
                            value={formdata. destination}
                            onChange={changeHandler}
                </form>
            </div>
        </div>
    )
}

export default Hero