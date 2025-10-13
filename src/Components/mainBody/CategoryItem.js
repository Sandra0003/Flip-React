import React from 'react'
import './CategoryItem.css'
import MainCategory from './MainCategory'

const CategoryItem = ({elements,heading,nameOfclass}) => {
  return (
    <div className={`section-3-div ${nameOfclass}`} >
        <div className="section-3-sub1">
            <div className="heading-div">{heading}</div>
            <div className="items-div">
                <div class="items-sub">
                {elements.map((cat,index) =>(
                    <MainCategory  
                        key={index}
                        img={cat.img}
                        name={cat.name}
                        price={cat.price}
                    />     
                ))}
                </div>
                
            </div>
            
        </div>   
      
    </div>
  )
}  


export default CategoryItem
