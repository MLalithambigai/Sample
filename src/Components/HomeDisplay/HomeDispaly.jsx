import React, { useState,useEffect } from 'react'
import "./HomeDisplay.css"
import left_arrow from "../Assets/left_arrow.png"
import right_arrow from "../Assets/r1.png"


export const HomeDispaly = ({slides}) => {

  const[currentIndex,setCurrentIndex]=useState(0)

  const GoToPrevious = ()=>{
    const isFristSlide = currentIndex === 0;
    const newIndex = isFristSlide? slides.length-1 : currentIndex -1;
    setCurrentIndex(newIndex)
  }

  const GoToNext = ()=>{
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex = isLastSlide? 0 : currentIndex +1;
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(GoToNext, 2000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);


  return (
    <>
      <div className='image-container'>
        
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='slideimage'>
          <div><img src={left_arrow} alt="" onClick={GoToPrevious}/></div>
          <div><img src={right_arrow} alt="" onClick={GoToNext} /></div>
        </div>
        
      </div>
    </>
    
  )
}
