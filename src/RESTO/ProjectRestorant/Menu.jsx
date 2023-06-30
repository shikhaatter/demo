import React from 'react'
import Button from 'react-bootstrap/Button';
const menu = ({ menuData }) => {
  return (
    <>
     {menuData.map((curElm)=>{
        return (
          <>
            <div className='col-md-4 main-box'>
              <img src={curElm.image} alt="nnbgh" className='card-media' />
              <div className="cont-box">
                <span className='card-num'>{curElm.id}</span>
                <h6 className='card-title'>{curElm.title}</h6>
                <h3 className='card-name'>{curElm.name}</h3>
                <p className='card-para'>{curElm.para}</p>
                <div className="btn-cstm">
                  <Button variant="success">{curElm.read}</Button>{' '}
                  <Button variant="success">{curElm.buy}</Button>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default menu
