import React from 'react'

const ImageSec = ({ room }) => {
    return (
        <>
            {room.map((curElm) => {
                return (
                    <>
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src={curElm.img} alt="" />
                                <div className="title-container">
                                    <h6>{curElm.title}</h6>
                                    <h6>{curElm.heading}</h6>
                                </div>
                                <p className='room-info'>{curElm.para}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default ImageSec
