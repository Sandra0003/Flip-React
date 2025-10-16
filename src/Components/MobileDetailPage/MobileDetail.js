import ProductHeader from '../ProductPage/ProductHeader'
import ItemsBar from '../ProductPage/ItemsBar'
import { useLocation } from 'react-router-dom'
import './MobileDetail.css'

let imgs =[
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/v/o/d/-original-imahfvrmfkwybeyc.jpeg?q=70&crop=false",
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/t/m/s/-original-imahfvrmthekhzvy.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/c/j/x/-original-imahfvrmkwzfk8z6.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/n/z/-original-imahfvrmqdgzqjsh.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/m/a/-original-imahfvrmmcgyn2k8.jpeg?q=70&crop=false"

]
let offer=["5% cashback on Axis Bank Flipkart Debit Card up to ₹750","5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter","5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter"]
const MobileDetail = () => {
    const location =useLocation()
    const {img, name, price,og,discount} =location.state || {}
  return (
    <div id='container'>
        <ProductHeader />
        <ItemsBar/>

        <div className="single-details">
            <div className="single-details-sub-div">
                <div className="single-img">
                    <div className="aboveBt-main">
                       <div className="aboveButton-img">
                        <div className="sidescroll-img">
                            <ul className='side-ul'>
                                <li className='side-li'>
                                    <img src={img} alt="" className='_0DkuPH'/>
                                </li>
                                {imgs.map((item)=>( 
                                <li className='side-li'>
                                    <img className="_0DkuPH" src={item}></img>
                                </li>
                                ))}
                            </ul>
                            <div className="downSelect">
                                <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ZpyMwK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class=""></path></svg>
                            </div>
                        </div>
                        <div className="sideimgss">
                            <img loading="eager" className="img-phn-des" alt="Samsung Galaxy A35 5G (Awesome Lilac, 128 GB)" src={img} fetchpriority="high" ></img>
                        <div className="aboveBT-heart">
                        <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="grey" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                       </div>
                        </div>
                       </div>
                       
                    </div>
                    <div className="belowbt">
                        <ul className='below-ul'>
                            <li className='below-li'>
                                <button className='add-BT'>
                                    <svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                                Add to cart
                                </button>
                            </li>
                            <li className='below-li'>
                                <button className='buyBt add-BT'>
                                    <span className='buyNowSpan'></span>
                                    Buy Now</button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="single-des">
                    <div className="navgation">
                        <div className="navg-sub">
                            <div className="home">
                                <a href='/' className='home-a'>Home</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                             <div className="home">
                                <a href="/product" className='home-a'>Mobiles & Accessories</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                             <div className="home">
                                <a href="" className='home-a'>Mobiles</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                                      <div className="home">
                                <a href="" className='home-a'>{name}</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                        </div>
                        <div className="nav-comp">
                            <input type="checkbox" name="" id="" />
                        </div>     
                    </div>

                    <div className="phone-des-single">
                        <span className='phn-name-sin'>{name}</span>
                        <div>
                            <div className="single-rating">
                                <span className='rating-span'>4.5 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" class="Rza2QY"></img></span>
                                <span className='rating-word-single'>2,45,570 Ratings &  16,865 Reviews</span>
                                <img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" class="assured-single"></img>
                            </div>
                           
                        </div>
                        <div className="phone-price-sin">
                        
                            
                            <div class="sing-price">₹{price}</div>
                            <div className='single-og-price'>₹{og}</div>
                            <div className='single-discount'>{discount}</div>
                             <div className='aboutIc'><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="10" r="9" fill="#FCFCFC" stroke="grey" stroke-width="1"/> <text x="10" y="14" text-anchor="middle" font-family="Roboto, sans-serif" font-size="11" fill="#1D1D1D" opacity="0.6">i</text></svg></div>
                        </div>
                        <div className="deliverDet">
                            <div className="promiseDiv">+ ₹79 Protect Promise Fee <span className='learnMore'>Learn more</span></div>
                            <div className='deliveryDate'>Secure delivery by 19 Oct, Sunday</div>
                        </div>
                    </div>

                    <div class="availbleOffer">
                        <div className='avail'> Available Offers</div>
                        <div class="offerDet">
                            {offer.map((item,ind) => ( 
                            <span className='offers' key={ind}>
                                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="yNKwUY"></img>
                                <span className='bankOff'>Bank Offer</span><span>{item}</span>
                                <div className='t-c'>T&C</div>
                            </span>
                            ))}
                        
                            <span className='offers'>
                                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" class="yNKwUY"></img>
                                <strong>No cost EMI ₹4,000/month</strong>. Standard EMI also available
                                <div className='viewPoints'>
                                    <button className='viewPointsbt'><span className='viewPl'>View Plans</span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPjEwMzc0NDBFLTZGNDYtNDc5MS1CRkUxLTczQzczMEI2RTU0NTwvdGl0bGU+PHBhdGggZD0iTTEuMiAxTDQgNSAxIDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSIjMDI3Q0Q1IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" width="6" height="9"/></button>
                                </div>
                            </span>
                        </div>
                        <div class="viewMoreoff">View 4 more offers</div>

                    </div>    
                </div>    
            </div>
        </div>
     



    




     
   

      
    </div>


  )
}

export default MobileDetail
