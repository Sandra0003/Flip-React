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
const MobileDetail = () => {
    const location =useLocation()
    const {img, name} =location.state || {}
  return (
    <div id='container'>
        <ProductHeader />
        <ItemsBar/>

        <div class="single-details">
            <div class="single-details-sub-div">
                <div class="single-img">
                    <div class="aboveBt-main">
                       <div class="aboveButton-img">
                        <div class="sidescroll-img">
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
                            <div class="downSelect">
                                <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ZpyMwK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class=""></path></svg>
                            </div>
                        </div>
                        <div class="sideimgss">
                            <img loading="eager" className="img-phn-des" alt="Samsung Galaxy A35 5G (Awesome Lilac, 128 GB)" src={img} fetchpriority="high" ></img>
                        <div class="aboveBT-heart">
                        <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="grey" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                       </div>
                        </div>
                       </div>
                       
                    </div>
                    <div class="belowbt">
                        <ul className='below-ul'>
                            <li className='below-li'>
                                <button className='add-BT'>
                                    <svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                                Add to cart
                                </button>
                            </li>
                            <li className='below-li'>
                                <button className='buyBt add-BT'>Buy Now</button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="single-des">
                    <div class="navgation">
                        <div class="navg-sub">
                            <div class="home">
                                <a href='/' className='home-a'>Home</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                             <div class="home">
                                <a href="/product" className='home-a'>Mobiles & Accessories</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                             <div class="home">
                                <a href="" className='home-a'>Mobiles</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                                      <div class="home">
                                <a href="" className='home-a'>{name}</a>
                                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="wMLTcO"></path></svg>
                            </div>
                        </div>
                        <div class="nav-comp">
                            <input type="checkbox" name="" id="" />
                        </div>     
                    </div>
                </div>
            </div>
        </div>



   
   

      
    </div>


  )
}

export default MobileDetail
