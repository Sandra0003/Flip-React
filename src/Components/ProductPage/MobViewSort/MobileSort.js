import React, { useState } from 'react'
import './MobileSort.css'

const MobileSort = ({onSortChange,initialSort="relevance"}) => {
    const [sortValue,setSortValue] = useState(initialSort)

    const sortOpt = [
        {label : "Relevance",value :"relevance"},
        {label : "Popularity", value:"popularity"},
        {label : "Price -- Low to High", value:"low"},
        {label : "Price -- High to Low", value :"high"},
        {label : "Newest First",value :"new"}
    ]         

                  


    const handleSortChange = (value) =>{
        setSortValue(value) 
        if(onSortChange)   onSortChange(value)                  
    }   
    
    
    
  return (
    <div className='sortContainer'>
        <div className="sortDiv-below">
            <div className="bottom-sec">
                <div className="belew-sort-one">SORT BY</div>
                <div className="below-sort-two"></div>
                <div className="below-sort-three">
                    {sortOpt.map((opt) => (
                        <div className="sortListt" onClick={() => handleSortChange(opt.value)}>
                        <div className="sortlist-item-one">
                            <div className='itemName'>{opt.label}</div>
                        </div>
                        <div className="radiobt">
                            <img className="radioimg" src={ sortValue === opt.value ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=90" : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=90"}></img>
                        </div>
                    </div>

                    ))}      
                    
                </div>
                    
            </div>
        </div>
      
    </div>       
  )
}       

export default MobileSort
