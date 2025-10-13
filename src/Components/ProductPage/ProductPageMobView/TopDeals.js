import React from 'react'
import products from '../../../Products.json'



const TopDeals = ({products}) => {
  return (
    <div className='topDeals'>
        <div class="topDeals-head">
            <div class="topDeals-word">
                <div class="word-one-d">Top Sale Deals</div>
                <div class="word-two-d">
                    <div className='clock'><img src="https://rukminim1.flixcart.com/www/28/28/promos/14/09/2022/ab7b4a1c-376c-43f1-b196-851182802980.png?q=90" alt="" className="clockimg" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim1.flixcart.com/www/14/14/promos/14/09/2022/ab7b4a1c-376c-43f1-b196-851182802980.png?q=80 1x, https://rukminim1.flixcart.com/www/28/28/promos/14/09/2022/ab7b4a1c-376c-43f1-b196-851182802980.png?q=60 2x, " fetchpriority="auto" height="14" width="14" /> </div>
                     <div className='clockWord'>Shop at unbeateble prices</div>
                </div>
            </div>
            <div class="view-all-d">
                <div class="view-all-div">
                <img src="https://rukminim1.flixcart.com/www/32/32/promos/16/03/2020/14ee4679-024a-4748-bb04-0d3a378c09b4.png?q=90" alt="" className="view-arrow" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim1.flixcart.com/www/16/16/promos/16/03/2020/14ee4679-024a-4748-bb04-0d3a378c09b4.png?q=80 1x, https://rukminim1.flixcart.com/www/32/32/promos/16/03/2020/14ee4679-024a-4748-bb04-0d3a378c09b4.png?q=60 2x, " fetchpriority="auto" height="16" width="16" ></img>
                </div>
            </div>
        </div>
        <div class="topDeals-items">
            <div class="topDeals-items-scroll">

                {products.map((items,index) => (

               
                <div class="scroll-items-one">
                    <div class="phone-item-scroll">
                        <div class="phone-image-top all">
                            <div class="phone-image-top-sub">
                                <img className='top-deals-phone-img' src={items.img} ></img>
                            </div>
                           

                        </div>
                         <div class="phone-img-top-words">
                                <div class="top-deals-phone-det all">
                                    <div class="img-name-top ">
                                        {items.name}
                                    </div>
                                    <div class="ramDiv all">{items.Ram} RAM</div>
                                </div>
                                <div class="price-other-det">
                                    <div class="price-other-det-one">
                                        <div className='price-one-top'>{items.ogPrice}</div>
                                        <div className='price-two-top'>₹{items.price} </div>
                                    </div>
                                    <div class="price-other-det-two">
                                        {items.discount} off
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="phone-item-scroll-details">
                        <div class="details-sqaure">
                            <div class="squre-one">{items.BatteryCapacity}</div>
                        </div>
                         <div class="details-sqaure">
                            <div class="squre-one">{items['Internal Storage']}</div>
                        </div>
                         <div class="details-sqaure">
                            <div class="squre-one">{items.PrimaryCamera}</div>
                        </div>
                         <div class="details-sqaure">
                            <div class="squre-one">{items.Ram}</div>
                        </div>
                    </div>
                </div>

                 ))}
            </div>     
        </div>  
        
    </div>
  )
}

export default TopDeals
