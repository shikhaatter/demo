import React from 'react'
const SearchRoom = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="serching-room">
        <h2>Search room</h2>
        <div className='search-div'></div>
        </div>
            <div className="myroom-form">
             <div className="row">
              <div className="col-md-4 form-group">
                <div className="room-type">
                    <label htmlFor="">R o o m  t y p e :</label>
                    <select name="type" id="type" className='room-form'>
                        <option value="all">All</option>
                        <option value="single">single</option>
                        <option value="double">double</option>
                        <option value="family">family</option>
                        <option value="presidential">presidential</option>
                    </select>
                </div>
              </div>
              <div className="col-md-2 form-group">
                <div className="room-type">
                <label htmlFor="">G u e s t :</label>
                    <select name="type" id="type" className='room-form'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
              </div>
              <div className="col-md-2 form-group">
                <div className="room-type">
                    <label htmlFor="">Room Price $600 :</label>
                   <input type="range" id="points" name="points" min="0" max="600"/>

                </div>
              </div>
              <div className="col-md-2 form-group">
                <div className="room-type">
                    <label htmlFor="">R o o m  S i z e :</label>
                    <div className="money-sec">
                        <input type="number" name="minsize" id="size" className='size-input' option="0" min="0" max="1000"/>
                        <input type="number" name="maxsize" id="size"  className='size-input' option="1000" min="100" max="1000"/>
                    </div>
                </div>
              </div>
              <div className="col-md-2 form-group">
                <div className="room-type">
                    <div className="food">
                    <label htmlFor="">Breakfast :</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="food">
                    <label htmlFor="">Pets :</label>
                        <input type="checkbox" name="" id="" />

                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default SearchRoom
