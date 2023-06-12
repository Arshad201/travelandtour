import React from 'react'
import { useState } from 'react'
import './Footer.css'
import video from '../../assets/shortOcean.mp4'
import { BsSend } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { LuCopyright } from 'react-icons/lu'


const Footer = () => {
  const [emailData, setEmailData] = useState({
    email: ''
  });

  function changeHandler(events) {
    setEmailData(prevData => {
      return {
        ...prevData,
        [events.target.name]: events.target.value
      }
    })
  }
  return (
    <div className='footer-container'>
      <div className='footer-video-container'>
        <video src={video} type="video/mp4" muted autoPlay loop className='footer-video'></video>
      </div>

      <div className='top-part'>
        <div className='top-content1'>
          <p className='content1-para'> KEEP IN TOUCH</p>
          <h2 className='content1-head'>Travel with us</h2>
        </div>
        <div className='top-content2'>
          <input type="email"
            name='email'
            value={emailData.email}
            onChange={changeHandler}
            id='email'
            placeholder='Enter Email Address'
            className='foot-email'
          />
          <button className='btn email-btn'>
            <p>SEND</p>
            <span><BsSend></BsSend></span>
          </button>
        </div>
      </div>
      <div className='bottom-part'>
        <div className='bottom-upper'>
          <div className='upper1'>
            <Link className="logo">
              <MdOutlineTravelExplore className='logoIcon' />
              <span className="logoText">Travel.</span>
            </Link>
            <p className='upper1-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum provident molestiae itaque. Animi ducimus asperiores quibusdam explicabo voluptatibus, voluptatem magnam blanditiis accusamus inventore tenetur saepe hic ex fuga ratione non sed maxime architecto temporibus natus sunt minus! </p>
            <div className='footer-icon-group'>
              <Link to="https://www.facebook.com">
                <ImFacebook className='facebook footerIcon'></ImFacebook>
              </Link>

              <Link to="https://www.instagram.com">
                <FaInstagramSquare className='instagram footerIcon'></FaInstagramSquare>
              </Link>

              <Link to="https://www.twitter.com">
                <FaTwitter className='twitter footerIcon'></FaTwitter>
              </Link>

            </div>
          </div>
          <div className='upper2'>
            <h3 className='upper-head'>OUR AGENCY</h3>
            <div className='upper-content'>
              <p>Services</p>
              <p>Insurance</p>
              <p>Agency</p>
              <p>Toursim</p>
              <p>Payment</p>
            </div>
          </div>
          <div className='upper3'>
            <h3 className='upper-head'>PARTNERS</h3>
            <div className='upper-content'>
              <p>Booking</p>
              <p>RentalCar</p>
              <p>HostelWorld</p>
              <p>Trivago</p>
              <p>TripAdvisor</p>
            </div>
          </div>
          <div className='upper4'>
            <h3 className='upper-head'>LAST MINUTES</h3>
            <div className='upper-content'>
              <p> London</p>
              <p>California</p>
              <p>Indonesia</p>
              <p>Europe</p>
              <p>Paris</p>
            </div>
          </div>

          {/* //---------------------------------------- */}
          <div className='top-part top-new'>
            <div className='top-content1'>
              <p className='content1-para'> KEEP IN TOUCH</p>
              <h2 className='content1-head'>Travel with us</h2>
            </div>
            <div className='top-content2'>
              <input type="email"
                name='email'
                value={emailData.email}
                onChange={changeHandler}
                id='email'
                placeholder='Enter Email Address'
                className='foot-email'
              />
              <button className='btn email-btn'>
                <p>SEND</p>
                <span><BsSend></BsSend></span>
              </button>
            </div>
          </div>

        </div>
        <div className='bottom-lower'>
          <p className='lower-para'>Best Travel Website</p>
          <span className='copyright'>COPYRIGHT <LuCopyright></LuCopyright> RESERVED </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
