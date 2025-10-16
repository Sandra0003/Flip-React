import React, { use, useState } from 'react'
import filterDetails from "../../FilterDetails.json"




const filterCatogories = ["Network Type","Ram","Internal Storage","Processor Brand","BatteryCapacity","Resolution Type","PrimaryCamera","Sim Type","Customer Ratings","Discount","Gst Invoice available","screen size","secondary camera","offers","Features","type","number of cores","availabilty","operating system version name","clock speed"]
const Brand =["Apple","Google","MOTOROLA","REDMI","vivo","OPPO","Infinix","Nothing","POCO","Samsung","Nokia"]


const FilterSection = ({filterSelected,setFilterSelected,minPrice,setMinPrice,setMaxPrice,maxPrice}) => {

    const [showDetails,setShowDetails] = useState([])
    const [brandSearch, setBrandSearch] = useState('')
    

      

                            


    const toggleFilter = (category) =>{
        if(showDetails.includes(category)) {
            setShowDetails(showDetails.filter(f => f !== category))

        }
        else{
            setShowDetails([...showDetails, category])

        }
          
    }      

    const handleFilter = (category , value) =>{
        setFilterSelected((prev) =>{
            const current = prev[category] || []
            if(current.includes(value)){
                return {
                    ...prev,
                    [category]: current.filter((v) => v !== value)
                }
            }
            else{
                return{
                    ...prev,
                    [category]:[...current,value]
                }
            }
        })
    }



    const filterBrands = Brand.filter(brand => brand.toLowerCase().includes(brandSearch.toLowerCase()))

   
        
    
              
       
  return (
    <div id='filterSection'>
        <div className="filterSection-two">
        <section className='filterSection firstSec'>
            <div className='Word-one'>
                <span>Filters</span> 
              {(Object.values(filterSelected).some(values => values.length > 0) || minPrice > 0 || maxPrice <Infinity) &&  (
                    <div className='clear-div' onClick={() => {setFilterSelected({}); setMinPrice(0); setMaxPrice(Infinity); }}>CLEAR ALL</div>

              )}
              

            </div>

            <div className="displaySelected">
                {Object.entries(filterSelected).map(([category,valuees]) => valuees.map((val) => ( 
                    <div className="selectedFilter">
                    <div className="cross2" onClick={() => setFilterSelected(prev =>({
                        ...prev,
                        [category]:prev[category].filter(v=> v !== val)
                    }))}>✕</div>
                    <div className="selectedWord" >{val}</div>                               
                </div>

                )))}
                {(minPrice > 0 || maxPrice <Infinity) && (
                    <div className='selectedFilter'>
                        <div className="cross2" onClick={() => {setMinPrice(0); setMaxPrice(Infinity)}}> ✕</div>
                        <div className="selectedWord" > ₹{minPrice || 0} - {maxPrice === Infinity? "₹30000+" : `₹${maxPrice}`}</div>                               

                    </div>
                )}
                          
            </div>
        </section>
        <section className='filterSection '>
            <div className='div-one'>Categories</div>
            <div className='div-two'>
                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="P3pAQJ"></path></svg>
                <a href="" className='catogories-a'>Mobiles & Accessories</a>
            </div>
            <div className='div-three'>
                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="white" class="P3pAQJ"></path></svg>
                <a href="" className='mobiles-a'>Mobiles</a>
            </div>
        </section>

        <section className='filterSection'>
            <div class="subDiv">
                <div className="wordDiv">BRAND</div>
                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" className="SV+H35"></path></svg>
            </div>
            <div class="brandDet">
                <div class="searchBrandDiv">
                    <svg width="20" height="20" viewBox="0 0 17 18" class="searchI" xmlns="http://www.w3.org/2000/svg"><g fill="grey" fill-rule="evenodd"><path class="JVQyl9" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="JVQyl9" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                    <input type="text" name="" id="searchINPUT" placeholder='Search Brand' onChange={e =>setBrandSearch(e.target.value)}/>
                </div>
                <div class="brandNames">
                    {filterBrands.map((brand) =>(
                         <label for="" className='bname' key={brand}>
                        <input type="checkbox" name="" id="" value={brand} className='cb' checked={filterSelected['brand']?.includes(brand) || false}  onChange={() => handleFilter('brand',brand)}/>
                        <div class="brandItem">{brand}</div>
                        </label>
                    
                    ))}                                                    
                                         
                </div>

            </div>                                            
        </section>
        <section className='filterSection'>
            <div className='price-word'>
                <div className='price'>Price</div>     
            </div>
            <div className='bgdiv'>
                <div className="bgdiv-one"></div>
                <div className="bgdiv-one"></div>
                <div className="bgdiv-one"></div>
                <div className="bgdiv-one"></div>
                <div className="bgdiv-one"></div>
            </div>
            <div className='slider'>
                <div className="leftSide ball">
                    <div className="bb"></div>
                </div>
                <div className="rightSide ball">
                    <div className="bb"></div>
                </div>
                <div className="sliderline"></div>
                <div className="bluecolor"></div>
                <div className="dotDiv">
                    <div className="dotdiv-one">.</div>
                    <div className="dotdiv-one">.</div>
                    <div className="dotdiv-one">.</div>
                    <div className="dotdiv-one">.</div>
                    <div className="dotdiv-one">.</div>
                    <div className="dotdiv-two">.</div>

                </div>
            </div>
            <div className='selectBox'>
                <div className="maxPrice">
                    <select name="" id="Max" onChange={(e)=> setMinPrice(parseInt(e.target.value.replace("₹"," ")) || 0 )}>
                        <option value="Min">Min</option>
                        <option value="₹10000">₹10000</option>
                        <option value="₹15000">₹15000</option>
                        <option value="₹20000">₹20000</option>
                        <option value="₹30000">₹30000</option>
                    </select>
                </div>
                <div className='to'>to</div>
                <div className="minPrice">
                    <select name="" id="Min" onChange={(e) => {
                        const value = e.target.value
                        if(value === "30000+") setMaxPrice(Infinity)
                        else  setMaxPrice(parseInt(value.replace("₹","")) || Infinity)
                    }}>
                        <option value="₹10000">₹10000</option>
                        <option value="₹15000">₹15000</option>
                        <option value="₹20000">₹20000</option>
                        <option value="₹30000">₹30000</option>
                        <option value="₹30000+">₹30000+</option>  


                         
                    </select>
                </div>  
            </div>                                                                           

        </section>

        {filterCatogories.map((word,idd) =>(
            <section className='filterSection' key={idd}>
                <div className='subDiv' onClick={() => toggleFilter(word) }>
                    <div className="wordDiv">{word}</div>
                    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className={`arrow ${showDetails.includes(word) ? "rotate" : ""}`}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" className="SV+H35"></path></svg>
                </div>
                {showDetails.includes(word) && (
        
                    
                    <div className='details'>
                        {filterSelected[word]?.length > 0 && ( 
                        <div class="sectionClear-sub" onClick={() =>setFilterSelected(prev => ({...prev, [word]:[]}))}>
                            <div class="crossDiv">✕</div>
                            <div class="clearWordDiv">Clear all</div>
                        </div>
                        )}
                        {filterDetails[word]?.map((item,id) =>(
                            <label key={id} className='checkboxlabel'>
                                <input type="checkbox" value={item} className='cb' checked={filterSelected[word]?.includes(item) || false} onChange={() => handleFilter(word,item)}/>
                                <div className='allitems'>{item}</div>


                            </label>
                        ))}
                    </div>
                  

                )}
             </section>

        ))}
        </div>
        <div className='belowFilter'>
            <div className="needHelp">Need help?</div>
            <div className='HelpMe'>Help me decide <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="VQiHOk"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="jVpjWi"></path></svg></div>
            <img alt="Buying Guide" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/buying-guide-illustration_4dd325.png"></img>
        </div>
                   
                
    </div>
    
                                               
  )
}     

export default FilterSection
    