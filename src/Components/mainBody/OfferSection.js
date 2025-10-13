import React from 'react'
import './OfferSection.css'
import './CategoryItem.css'
import OfferSectionItems from './OfferSectionItems'
const OfferSection = ({item,nameOfclass}) => {
  return (
    <div className={`section-4 ${nameOfclass}`}>
        <div className="section-3-sub1">
            <div class="offerSec-Main-div">
                {item.map((item1,index) =>(
                    <OfferSectionItems
                        key={index}
                        img={item1.img}
                    />

                ))}
                
            </div>
        </div>
                                                            
    </div>
  )             
}

export default OfferSection
