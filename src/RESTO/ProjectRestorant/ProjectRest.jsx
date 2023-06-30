import React, { useState } from 'react'
import Services from './Services'
import Api from './RestoApi'

const ProjectRest = () => {
    const[restoData,setRestoData]=useState(Api)
  return (
    <>
    <div className="main-hotel-container">
    <div className="container">
    <div className="services">
    <h2>services</h2>
    <div className="title-services"></div>
    </div>
    <div className="row">
      <Services restoData={restoData}/>
      </div>
      </div>
      </div>
    </>
  )
}

export default ProjectRest
