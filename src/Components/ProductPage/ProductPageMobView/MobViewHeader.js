import React, { useEffect, useState } from 'react'
import './MobView.css'
import MobileSort from '../MobViewSort/MobileSort'
import MobileFilter from '../MobViewFilter/MobileFilter'


const MobViewHeader = ({onFilterToggle}) => {
    const [sortDetails,setSortDetails]=useState(false)

    const [filterDetails,setFilterDetails] =useState(false)


    useEffect(() => {
        if(sortDetails ){
            document.body.style.overflow= "hidden"
        }
        else{
            document.body.style.overflow ="auto"
        }
        
    },[sortDetails,filterDetails])

    ;

  return (      
    <div className="navBar1 all">
                <div className="topNav all">
                    <div className="topNav-sub1">
                        <a href="" className="back">
                            <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
                        </a>
                        <a href="" className="flipicon">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" className="flipkiconimg" />
                        </a>
                        <div className="catagory1">
                            <div className="samsung">
                                <h1>mobiles</h1>
                            </div>
                        </div>
                        <a href="" className="back">
                            <svg height="30" viewBox="0 0 32 32" width="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path><path d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z" stroke="#111112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9524 19.95L24.0024 24" stroke="#111112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </a>
                        <a href="" className="back"><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                        <a href="" className="back login1">
                            <span>Login</span>
                        </a>

                    </div>
                </div>
                <div className="middleNav all">
                    <div className="middleNav-sub1 all">
                        <div className="middleNav-sub2 all">
                            <div className="sort">
                                <div className="sortMain all" id="sort" onClick={() => setSortDetails((prev) => !prev)}>
                                    <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
                                    <div className="sortDiv">Sort</div>
                                </div>
                            </div>
                            <div className="separator"></div>
                            <div className="filter">
                                <div className="filterMain all" id="filter"  onClick={() => onFilterToggle(prev => !prev)}>
                                    <div className='all'>
                                       <svg width="20" height="20" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M148 172H40M216 172h-28"></path><circle cx="168" cy="172" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M84 84H40M216 84h-92"></path><circle cx="104" cy="84" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle></svg>
                                        <div class="notifyDiv"></div>
                                    </div>
                                    <div className="filterDiv"  >Filter</div>
                                </div>
                            </div>          
                        </div>    

                    </div>       

                </div>
                 <div className="lastNav all">
                    <div className="lastNav-Sub1 all">
                        <div className="lastNAv-Sub2 all">
                            <div className="lastNavMAin all">
                                <div className="lastNavMain-sub all">


                                    <div className="lastNav-one topDis">
                                        <div className="lastNav-one-main all">
                                            <div className="icon ">
                                               <div className="iconSub ">
                                                <img src="https://rukminim2.flixcart.com/www/64/64/promos/03/10/2025/fab7ebe1-ff85-4a7d-92d9-6219b369e69d.jpg?q=90" alt="" class="" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim2.flixcart.com/www/32/32/promos/03/10/2025/fab7ebe1-ff85-4a7d-92d9-6219b369e69d.jpg?q=80 1x, https://rukminim2.flixcart.com/www/64/64/promos/03/10/2025/fab7ebe1-ff85-4a7d-92d9-6219b369e69d.jpg?q=60 2x, " fetchpriority="auto" height="32" width="32"></img>
                                                               </div>
                                            </div>
                                        <div className="words all ">
                                            <span className="span1 ">Top Sale Discount</span>
                                        </div>
                                        </div>
                                
                                    </div>

                                    <div className="lastNav-one G5G">
                                        <div className="lastNav-one-main all">
                                            <div className="icon ">
                                               <div className="iconSub ">
                                                    <img src="https://rukminim1.flixcart.com/www/64/64/promos/13/10/2022/9f35831d-1207-45a3-8bff-808c06d045d3.png?q=90" alt="" class="" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim1.flixcart.com/www/32/32/promos/13/10/2022/9f35831d-1207-45a3-8bff-808c06d045d3.png?q=80 1x, https://rukminim1.flixcart.com/www/64/64/promos/13/10/2022/9f35831d-1207-45a3-8bff-808c06d045d3.png?q=60 2x, " fetchpriority="auto" height="32" width="32" />
                                               </div>
                                            </div>
                                        <div className="words all wd" >
                                            <span className="span1 ">5G</span>
                                        </div>
                                        </div>
                                
                                    </div>
                                    <div className="lastNav-one rs">
                                        <div className="lastNav-one-main all">
                                            <div className="icon ">
                                               <div className="iconSub ">
                                                <img src="https://rukminim2.flixcart.com/www/64/64/promos/31/05/2023/a8b4d164-3eaf-4156-acf5-44c9db07daa5.png?q=90" alt="" class="" aria-busy="false" data-highres-loaded="false" loading="lazy" srcset="https://rukminim2.flixcart.com/www/32/32/promos/31/05/2023/a8b4d164-3eaf-4156-acf5-44c9db07daa5.png?q=80 1x, https://rukminim2.flixcart.com/www/64/64/promos/31/05/2023/a8b4d164-3eaf-4156-acf5-44c9db07daa5.png?q=60 2x, " fetchpriority="auto" height="32" width="32" />
                                               </div>
                                            </div>
                                        <div className="words all " >
                                            <span className="span1 ">Rs. 15000 - Rs. 20000</span>
                                        </div>
                                        </div>
                                
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
             {sortDetails && <MobileSort /> }   


            

            
    </div>    
                




     
  )    
}

export default MobViewHeader