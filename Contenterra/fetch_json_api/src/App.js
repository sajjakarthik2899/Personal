
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';
export const Data  = () => {
  
  const [records, setRecords] = useState([]);
  
  useEffect(()=>{
    fetch('https://www.reddit.com/r/reactjs.json')
    .then(response => response.json())
    .then((json)=>{
      console.log(json.data.children);
      setRecords(json.data.children);
      console.log(records)
    })
  },[])
  return (
    <div className='app_body'>
      <table className='table'>
        <thead>
          <tr>
            <td>title</td>
            <td>self_text_html</td>
            <td>url</td>
            <td>score</td>
          </tr>
        </thead>
        <tbody>
            {records.map((e)=>{
              //Title, SelfText_HTML, URL and score
              const {id,title, selftext_html, url, score} = e;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{selftext_html}</td>
                  <td>{url}</td>
                  <td>{score}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default Data