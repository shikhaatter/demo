import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.css"
const Covid = () => {
  const [data, setData] = useState([]);

  const covidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const realData = await res.json();
    setData(realData.statewise);
    console.log(realData.statewise[0]);
  };

  useEffect(() => {
    covidData();
  }, []);

  return (
    <div className="container">
    <h2 style={{ color: "#2a80c1",fontWeight:"600",fontsize: "24px",marginbottom: "16px",textAlign:"center"}}>Covid Details StateWise</h2>
      <table className="table table-bordered mt-4 border border-dark">
        <thead className="table-dark ">
          <tr>
            <th style={{ width: "20%", height: "50px",textAlign:"left" }}>State</th>
            <th style={{ width: "10%", height: "50px" }}>Active</th>
            <th style={{ width: "10%", height: "50px" }}>Confirmed</th>
            <th style={{ width: "10%", height: "50px" }}>Deaths</th>
            <th style={{ width: "15%", height: "50px" }}>Delta Confirmed</th>
            <th style={{ width: "15%", height: "50px" }}>Delta Deaths</th>
            <th style={{ width: "20%", height: "50px" }}>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curElm, index) => {
            return (
              <tr key={index}>
                <td style={{ textAlign: "left" }}>{curElm.state}</td>
                <td style={{ textAlign: "center" }}>{curElm.active}</td>
                <td style={{ textAlign: "center" }}>{curElm.confirmed}</td>
                <td style={{ textAlign: "center" }}>{curElm.deaths}</td>
                <td style={{ textAlign: "center" }}>{curElm.deltaconfirmed}</td>
                <td style={{ textAlign: "center" }}>{curElm.deltadeaths}</td>
                <td style={{ textAlign: "center" }}>{curElm.recovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
