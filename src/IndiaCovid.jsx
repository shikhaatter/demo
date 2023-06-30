import React, { useEffect, useState } from 'react'
const IndiaCovid = () => {
  const [data, setData] = useState([]);
  const covidData = async () => {
    const res = await fetch('https://data.covid19india.org/data.json');
    const realData = await res.json();
    setData(realData.statewise[0]);
    console.log(realData.statewise[0]);
  }
  useEffect(() => {
    covidData();
  }, [])
  return (
    <>
      <table className='w-100 '>
        <thead>
          <tr className='border text-center'>
          <th>state</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Death</th>
            <th>DeltaConfirmed</th>
            <th>DeltaDeeaths</th>
            <th>active</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curElm, index) => {
            return (
              <tr className='border text-center' key={index}>
              <td>{curElm.state}</td>
                <td>{curElm.active}</td>
                <td>{curElm.confirmed}</td>
                <td>{curElm.deaths}</td>
                <td>{curElm.deltaconfirmed}</td>
                <td>{curElm.deltadeaths}</td>
                <td>{curElm.active}</td>
                <td>{curElm.recovered}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default IndiaCovid
