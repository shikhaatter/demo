import React from "react";
import { Button } from "react-bootstrap";
const Resto=()=>{
  return(
    <>
    <section className="resto-box-1">
  <div className="container-fluid">
    <div className="sec-contain">
    <div className="main-box-1">
    <h1>WELCOME TO MY RESTORANT</h1>
      <h3>Super Delicious Food In Town</h3>
      <h4>Food is any substance consumed to provide nutritional support for an organism. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus fugiat dignissimos cum, esse eveniet culpa aliquid voluptas odit distinctio quibusdam, eligendi ut saepe sapiente reiciendis possimus porro iusto? Ratione.</h4>
      <Button variant="danger" className="btn-1">BOOK A PLATE</Button>
      </div>
    </div>
  </div>
  </section>
    </>
  )
}
export default Resto