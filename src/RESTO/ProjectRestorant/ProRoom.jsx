import React, { useState } from 'react'
import ImageSec from './ImageSec'
import RoomApi from './RoomApi'
const ProRoom = () => {
    const[room,setRoom]=useState(RoomApi)
  return (
    <>
    <div className="container">
    <div className="row">
      <ImageSec room={room}/>
      </div>
      </div>
    </>
  )
}

export default ProRoom
