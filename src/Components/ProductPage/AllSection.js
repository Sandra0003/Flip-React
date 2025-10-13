import React, { useState } from 'react'
import './Sections.css'
import FilterSection from './FilterSection'
import ProductDisplay from './ProductDisplay'
import products from "../../Products.json"

const AllSection = () => {

  const [filterSelected,setFilterSelected] =useState({})

  const [minPrice,setMinPrice] = useState(0)
  const [maxPrice,setMaxPrice] =useState(Infinity)
  return (
    <div id='sectionMain'>
        <div className="sectionMain-sub">
            <FilterSection filterSelected={filterSelected} setFilterSelected={setFilterSelected} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
            <ProductDisplay products={products} filterSelected={filterSelected}  minPrice={minPrice} maxPrice={maxPrice}/>
        </div>
    
    
         
      
    </div>  
  )
}

export default AllSection
