import React, { useState } from 'react'

import "./MobileFilter.css"
import filterDetails from "../../../FilterDetails.json"



const filterCatogories = ["Network Type","Ram","Internal Storage","Processor Brand","Battery Capacity","Resolution Type","Primary Camera","Sim Type","Customer Ratings","Discount","Gst Invoice available","screen size","secondary camera","offers","Features","type","number of cores","availabilty","clock speed"]


const MobileFilter = ({onClose,onApply,onfilterChange,initialSelected ={}}) => {

  const [showFilter,setShowFilter] = useState("")

  const [selectedFilters,setSelectedFilters] = useState(initialSelected)

  const handleClicks =(category) =>{
    setShowFilter(category)
  }

   const handleCheckboxChange = (category, option) => {
    setSelectedFilters(prev => {
      const prevOptions = prev[category] || [];
      if (prevOptions.includes(option)) {
        // remove
        return { ...prev, [category]: prevOptions.filter(o => o !== option) };
      } else {
        // add
        return { ...prev, [category]: [...prevOptions, option] };
      }
    });
  };


    const handleClearFilters = () => {
    setSelectedFilters({});
  };
       
  const handleApplyFilters = () => {
    onApply(selectedFilters); // send selected filters to parent
    onClose(); // close overlay
  };


                                      
  return (
    <div>
      <div id="filterDiv" >
        <div class="filterHeader">
            <a href="" class="backbt" >
                <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
            </a>
            <div class="wordFil">
               <h1> Filters  
                {Object.values(selectedFilters).some(values => values.length > 0) && (<span id="clear"  onClick={handleClearFilters}>Clear Filters</span>)} </h1>
            </div>

        </div>
        <div class="filterCatogories">
            <div class="side">
              {filterCatogories.map((item) => ( 
                 <div class={`list ${showFilter === item ? "activew" :""}`} id="priceonLoad" onClick={()=> handleClicks(item)}>
                    <div class="price-fil"  >{item}</div>
                </div> 

              ))}
                 
            </div>
            <div class="filterDetails">
                <div class="filterDetails-sub1" id="filtercont">
                 {showFilter ? (
                         filterDetails[showFilter] && filterDetails[showFilter].length > 0 ? (
                            filterDetails[showFilter].map((option, id) => (
                              <div className="filterCb-one" key={id}>
                                    <div className="filterCb-div">
                                        <input type="checkbox" checked={selectedFilters[showFilter]?.includes(option) || false}  onChange={() => handleCheckboxChange(showFilter,option)}/>

                                    </div>
                                    <div className="filterCb-div-sub">{option}</div>
                              </div>
                  ))
                  ) : ( <p></p>)) : ( <p>Select a category to see options</p>) }
                  </div>
            </div>
        </div>
        <div class="filterFooter">
            <div class="numOfProduct">
                <div class="Num">11,118</div>
                <div class="productsFound">products found</div>
            </div>
            
            <div id="apply"  onClick={handleApplyFilters}><div>Apply</div></div>
            
        </div>


    </div>

           

    </div>
  )
}

export default MobileFilter
