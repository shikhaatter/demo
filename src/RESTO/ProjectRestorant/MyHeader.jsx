import React, { useState,useEffect } from 'react';
import {Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
const MyHeader = () => {
  const [showButton,setShowButton]=useState();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <header>
      <div className="container-fluid">
      <div className="row">
        <div className="col">
            <div className="logo">
                <a href='#'><span className='main'>B e a c h</span> <span>R e s o r t</span></a>
            </div>
        </div>
        <div className="col mynav"> 
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/Our Rooms'>Our Rooms</Link></li>
                </ul>
            </div>
        </div>
      </div>
      </div>
      </header>
      {showButton && (
        <button className="btn btn-success hello" onClick={scrollTop}>
      {<FaArrowUp/>}
        </button>
      )}

    </>
  )
}
export default MyHeader



