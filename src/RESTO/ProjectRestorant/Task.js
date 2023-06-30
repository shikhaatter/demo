import React from 'react';
 import '../ProjectRestorant/Resto.css'
import { BrowserRouter , BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
const Task = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/Our Rooms' element={<Room />} />
              <Route exact path='/return-home' element={<Home />} />
              <Route exact path='/return-room' element={<Room />} />
          </Routes>
     
      </BrowserRouter>
    </>
  )
}
export default Task
