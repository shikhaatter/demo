import React from 'react'
import { Link } from 'react-router-dom'
const RestoRoom = () => {
    return (
        <>
            <div className="container-fluid">
            <div className="room-container">
                <div className="room-banner">
                    <h1>Our Rooms</h1>  
                                 <div className='ban-room'></div>
                                 <ul>
                                    <li> <Link className='btn-btn-success ' to='/return-home'>Return Home</Link></li>
                                 </ul>
                   
                </div>
                </div>
            </div>
        </>
    )
}

export default RestoRoom
