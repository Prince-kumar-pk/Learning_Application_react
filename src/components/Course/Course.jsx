import React from 'react'
import  './Course.css'
import Data from '../../CourseData/CourseData'
import Slider from '../Slider/Slider'
export default function Course() {
  return (
    <div>

    <Slider/>
    
    <div className= "wraper">

        {Data.map((item) => {
            return(
                
    <div className="container">
    <div className="card">
      <div className="card-header">
        <img src={item.courseImg} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{item.tagName}</span>
        <div> {item.disc} </div>
        <div> Date: { item.date}  &  Duration: {item.duration}</div>
        <div className="user">
          <img src= {item.profile}alt="user" />
          <div className="user-info">
            <h5>{item.insname}</h5>
            <small>Instructure</small>
          </div>
        </div>
      </div>
    </div>
  </div>
            )
        })}
  </div>
  </div>
  )
}
