import React from 'react'

const Feature = () => {
    return (
        <>
            <div className="container">
                <div className="custom-feature">
                <h2>Featured Room</h2>
                <div className='featured-div'></div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="./images/r1.jpg" alt="" />
                                <div className="title-container">
                                    <h6>$ 400</h6>
                                    <h6>per height</h6>
                                    <a className='btn-primary room-link' href="">feature</a>
                                </div>
                                <p className='room-info'>Room Delux</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="./images/r2.jpg" alt="" />
                                <div className="title-container">
                                    <h6>$ 400</h6>
                                    <h6>per height</h6>
                                    <a className='btn-primary room-link' href="">feature</a>
                                </div>
                                <p className='room-info'>Family Delux</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img-container">
                                <img src="./images/r3.jpg" alt="" />
                                <div className="title-container">
                                    <h6>$ 400</h6>
                                    <h6>per height</h6>
                                    <a className='btn-primary room-link' href="">feature</a>
                                </div>
                                <p className='room-info'>Presidential</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature
