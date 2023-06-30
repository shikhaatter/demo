import React from 'react'
const Services = ({restoData}) => {
  return (
    <>
    {restoData.map((curElm)=>{
        return(
            <>
            <div className="col-md-3 resto-services">
            <span>{curElm.icon}</span>
            <h6>{curElm.title}</h6>
            <p>{curElm.para}</p>
            </div>
            </>
        )
    })}
    </>
  )
}

export default Services
