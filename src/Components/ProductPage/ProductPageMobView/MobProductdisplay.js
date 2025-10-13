import React from 'react'
// import products from '../../../Products.json'

const MobProductdisplay = ({products}) => {
  return (
    <>
    {products.map((item,index) => (
      
      
    <div className='mob-display' key={index}>
        <div className="mob-display-sub1">
          <div className="mobile-img-div">
            <div className="mob-main-div">
              <img src={item.img} className='mob-view-mobile'></img>
            </div>     
          </div>

          <div className="mob-desp all">
            {((index + 1) % 2 === 0) && (<div className="sponerd-div">Sponsored</div>)}
            <a href="" className='mob-des-a'>
              {item.name}
            </a>
            <div className="rating-star-div">
              <div className="rating-only-d">
                <div class="starsDiv-d">
                  <div class="starsDiv-one">    
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="sta bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                  </div>
                   <div class="starsDiv-one">    
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" fill="green" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                  </div>
                   <div class="starsDiv-one">    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                  </div>
                   <div className="starsDiv-one">    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                  </div>
                  <div class="starsDiv-onr">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="green" className="bi bi-star-half" viewBox="0 0 16 16"> <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/></svg>
                  </div>
                </div>
                <div class="numw">(2,885)</div>
                      
              </div>
               <div class="assured-d">
                  <img src="https://rukminim2.flixcart.com/www/120/32/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=90" alt="" className="asssu" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim2.flixcart.com/www/60/16/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=80 1x, https://rukminim2.flixcart.com/www/120/32/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=60 2x, " fetchpriority="auto" height="16" width="60" ></img>
                </div>
            </div>

            <div class="discount-div-d all">
              <div class="onlydisocunt all">
                <svg width="17" height="17" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>
                <div className='discount-num all'>{item.discount}</div>
              </div>
              <div class="ogprice-div-d">₹{item.ogPrice}</div>
              <div className='oferprice-d'>₹{item.price}</div>
            </div>
            <div class="wowDiv-all"> 
              <div class="wowImg">
                <img src="https://rukminim2.flixcart.com/www/76/32/promos/23/06/2025/cca911bb-9c66-4490-826e-9d9b807d62a5.png?q=90" alt="" className="wow" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim2.flixcart.com/www/76/32/promos/23/06/2025/cca911bb-9c66-4490-826e-9d9b807d62a5.png?q=90 1x, https://rukminim2.flixcart.com/www/76/32/promos/23/06/2025/cca911bb-9c66-4490-826e-9d9b807d62a5.png?q=90 2x, " fetchpriority="auto" height="16" width="38" ></img>
              </div>
              <div class="wowRice">₹7,314</div>
              <div class="bankOffer-d">with Bank offer + more</div>

            </div>
                          <div class="warrenty-div">1 year warranty by {item.brand}</div>

          </div>
          <div class="wishList">
          <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
          </div>
        </div> 

        {((index + 1) % 2 !== 0 ) && (
          <div class="varientsDiv">
          View All Variants 
        </div>

        )}
        
        {((index + 1) % 2 === 0)&& (
          <div className='phn-second-details'>
              <div class="detail-one-cam all">
               {item.BatteryCapacity}
              </div>
              <div class="detail-one-cam all">
               {item.PrimaryCamera}
              </div>
              <div class="detail-one-cam all">
               {item.display}
              </div>
              <div class="detail-one-cam all">
               {item['Internal Storage']}
              </div>
            </div>

        )}
             
             



      
    
  
      

                
    </div> 
    ))} 

    </>   
  )
}

export default MobProductdisplay
