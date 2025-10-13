import React from 'react'

const MainCategory = ({img,name,price}) => {
  return (
   
       <div className="element">
                <a href="" className='element-sub'>
                    <div class="sub-two">
                        <div class="sub-two-img-div">
                            <img class="IImg" src={img}></img>
                        </div>
                        <div class="sub-two-word-div">
                            <div class="name-div">{name}</div>
                            <div class="price-div">{price}</div>
                        </div>
                    </div>
                </a>
        </div>
    
  )
}

export default MainCategory
