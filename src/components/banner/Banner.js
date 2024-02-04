import React from 'react'
import  "./Banner.css"
import bannerimg from "../../assets/Annotation 2024-02-04 114414.png"

function Banner() {
  return (
    <div className='banner container'>
        <img src={bannerimg} alt="" />
    </div>
  )
}

export default Banner