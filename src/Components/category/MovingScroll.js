import React, { useRef } from 'react'
import './MovingScroll.css'
import '../mainBody/MainBody.css'

const imgs =[
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8c2598b5c820a42b.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f16ce51e6dd8a20c.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f12b23456036aa64.jpeg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/565443527bf7e6ee.jpeg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/9de2411d67e1bd0c.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/122911c45334a187.jpg?q=90",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/743a28e0bbe6db09.jpeg?q=90"
]

const MovingScroll = () => {
  const scrollRef =useRef(null)

  const scroll = (direction) =>{
    if (scrollRef.current){
      const scrollAmount = 1000
      if(direction === 'left'){
        scrollRef.current.scrollLeft -= scrollAmount
      }
      else {
        scrollRef.current.scrollLeft += scrollAmount
      }
    }
  }        
  return (<>
    <div className='movingscroll-main'>
      <div className="subscroll" ref={scrollRef}>
        {[...imgs,...imgs].map((item,index) => (
          <div key={index} className="scroll-item-one">
            <div className="sub-scroll">
          <img src={item} className="scorllimgMain"></img>
        </div>
        </div>

        ))}
      
      </div>
       <button className='left-side-scroll sb' onClick={() =>scroll('left')}>
        <span className='leftarrow'></span>
       </button>
       <button className="right-side-scroll sb" onClick={()=> scroll('right')}>
        <span className='rightarrow'></span>
       </button>
      <div class="slider">
        <div className='slider-one'></div>
        <div className='slider-one'></div>
        <div className='slider-one'></div>
        <div className='slider-one'></div>
        <div className='slider-one'></div>
        <div className='slider-one'></div>
        <div className='slider-one'></div>


      </div>


    
        
    </div> 
     
    </> 

  )
}

export default MovingScroll
