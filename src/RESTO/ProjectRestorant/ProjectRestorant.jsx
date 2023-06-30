import React, { useState } from 'react'
import Menu from './Menu';
import Menuu from './MenuApi';
const ProjectRestorant = () => {
  const[menuData,setMenuData]=useState(Menuu)
  return (
    <>
     {/* <Header/> */}
   
    <section className='main-box'>
    <div className='container'>
    <div className='row'>
      <Menu menuData={menuData}/>
     </div>
     </div>
     </section>
    </>
  )
}
export default ProjectRestorant
