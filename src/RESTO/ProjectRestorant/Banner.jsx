import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="custom-bg">
      <div className="banner">
        <h1>Luxurious Rooms</h1>
        <div></div>
        <p>Deluxe Rooms Starting At $299</p>
        <Link className='btn-btn-primary 'to='/return-room'>our Rooms</Link>
      </div>
      </div>
    </>
  )
}

export default Banner
