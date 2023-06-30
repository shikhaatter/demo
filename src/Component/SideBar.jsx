import React from 'react'
import {Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <>
       <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar

     
  