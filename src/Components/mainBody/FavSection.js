import React from 'react'
import './FavSection.css'

const FavSection = ({heading,nameOfclass,elements}) => {
  return (
    <div className={`favSectionOne ${nameOfclass} `}>
        <a href="" className='favSec-heading'>
            <div class="favsec-head">{heading}</div>
            <div class="fav-sec-arrow"><svg width="16" height="16" fill="none" viewBox="0 0 17 17"><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
        </a>
        <div class="sub-fav-sec">

        {elements.map((item,index) => ( 

         
          <div class="fav-img-main" key={index}>
            <div class="sub-fav-img">
              <div class="colImg-one">
                <div class="Fav-img-div">
                  <img src={item.img} alt="" className='fv-img'/>
                </div>
                <div class="fav-des-div">
                  <div class="des-name">{item.name}</div>
                  <div className='det-sec'>{item.des}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
          



          </div> 
        


  


 </div>                      
  )
}

export default FavSection
