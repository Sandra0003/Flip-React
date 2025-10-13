import React, { useState } from 'react'
import './ProductPage.css'



const items=["Electronics","TVs & Appliances","Men","Women","Bady & Kids","Home & Furniture","Sports, Books & More"]


const ItemsBar = () => {

    const [activeWord,setActiveWord]=useState(null)

   

  return (
    <div className='itemsBar'>
        <div className="belowNavBar">
            {items.map((word) =>(
                <span className={`items ${activeWord === word? 'activeWord' : ''}`} onClick={ ()=> setActiveWord(activeWord=== word ? null : word)}>{word}  <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="moreIcon"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="grey" class="CPYntE"></path></svg></span>

            ))}
            <span class="itemss">Flights</span>
            <span class="itemss">Offer Zone</span>

            {activeWord && (
                <div className="itemsDescription " >
                <div class="des-one">    
                    <a href="" class=" firstitm">Mobiles</a>
                    <a href="" class="des-one-items">Mi</a>
                    <a href="" class="des-one-items">Realme</a>
                    <a href="" class="des-one-items">Samsung</a>
                    <a href="" class="des-one-items">Infinix</a>
                    <a href="" class="des-one-items">OPPO</a>
                    <a href="" class="des-one-items">Apple</a>
                    <a href="" class="des-one-items">Vivo</a>
                    <a href="" class="des-one-items">Honor</a>
                    <a href="" class="des-one-items">Asus</a>
                    <a href="" class="des-one-items">Poco X2</a>
                    <a href="" class="des-one-items">realme Narzo 10</a>
                    <a href="" class="des-one-items">Infinix Hot 9</a>
                    <a href="" class="des-one-items">IQOO 3</a>
                    <a href="" class="des-one-items">iPhone SE</a>
                    <a href="" class="des-one-items">Motorola razr</a>
                    <a href="" class="des-one-items">realme Narzo 10A</a>
                    <a href="" class="des-one-items">Motorola g8 power title</a>
                </div>
                <div class="des-one">
                    <a href="" class="firstitm">Mobile Accessories</a>
                    <a href="" class="des-one-items">Mobile Cases</a>
                    <a href="" class="des-one-items">Headphones & Headsets</a>
                    <a href="" class="des-one-items">Power Banks</a>
                    <a href="" class="des-one-items">Screenguards</a>
                    <a href="" class="des-one-items">Memory Cards</a>
                    <a href="" class="des-one-items">Smart Headphones</a>
                    <a href="" class="des-one-items">Mobile Cables</a>
                    <a href="" class="des-one-items">Mobile Charges</a>
                    <a href="" class="des-one-items">Mobile Holders</a>
                    <a href="" class="firstitm">Smart Wearable Tech</a>
                    <a href="" class="des-one-items">Smart Watches</a>
                    <a href="" class="des-one-items">Smart Glasses (VR)</a>
                    <a href="" class="des-one-items">Smart Bands</a>
                    <a href="" class="firstitm">Health Care Appliances</a>
                    <a href="" class="des-one-items">Bp Monitors</a>
                    <a href="" class="des-one-items">Weighing Scale</a>
                </div>
                <div class="des-one">
                    <a href="" class="firstitm">Laptops</a>
                    <a href="" class="des-one-items">Gaming Laptops</a>
                    <a href="" class="firstitm">Desktop PCs</a>
                    <a href="" class="firstitm">Gaming & Accessories</a>
                    <a href="" class="firstitm">Computer Accessories</a>
                    <a href="" class="des-one-items">External Hard Disks</a>
                    <a href="" class="des-one-items">Pendrives</a>
                    <a href="" class="des-one-items">Laptop Bags</a>
                    <a href="" class="des-one-items">Mouse</a>
                    <a href="" class="firstitm">Computer Peripherals</a>
                    <a href="" class="des-one-items">Printers & Ink Cartridges</a>
                    <a href="" class="des-one-items">Monitors</a>
                    <a href="" class="firstitm">Tablets</a>
                    <a href="" class="des-one-items">Apple iPads</a>
                </div>       
                <div class="des-one">
                    <a href="" class="des-one-items"> Televisions</a>
                    <a href="" class="firstitm">Speakers</a>
                    <a href="" class="des-one-items">Home Audio Speakers</a>
                    <a href="" class="des-one-items">Home Theatres</a>
                    <a href="" class="des-one-items">SoundBars</a>
                    <a href="" class="des-one-items"> Bluetooth Speakers</a>
                    <a href="" class="des-one-items">DTH set Top Box</a>
                    <a href="" class="firstitm">Smart Home Automation</a>
                    <a href="" class="des-one-items">Google Nest</a>
                    <a href="" class="firstitm">Camera</a>
                    <a href="" class="des-one-items">DSLR & Mirrorless</a>
                    <a href="" class="des-one-items">Compact & Bridge Cameras</a>
                    <a href="" class="des-one-items">Sports & Action</a>
                    <a href="" class="firstitm">Camera Accessories</a>
                    <a href="" class="des-one-items">Lens</a>
                    <a href="" class="des-one-items">Tripods</a>
                    <a href="" class="firstitm">Network Components</a>
                    <a href="" class="des-one-items">Routers</a>
                </div>
                <div class="des-one">
                    <a href="" class="firstitm">Featured</a>
                    <a href="" class="des-one-items">Google Assistant Store</a>
                    <a href="" class="des-one-items">Laptops on Buyback Guarantee</a>
                    <a href="" class="des-one-items">Flipkart SmartBuy</a>
                    <a href="" class="des-one-items">Li-Polymer Power Banks</a>
                    <a href="" class="des-one-items">Sony PS4 Pro & Slim</a>
                    <a href="" class="des-one-items">Apple Products</a>
                    <a href="" class="des-one-items">Microsoft Store</a>
                    <a href="" class="des-one-items">Lenovo Phab Series</a>
                    <a href="" class="des-one-items">JBL Speakers</a>
                    <a href="" class="des-one-items">Smartphones On Buyback  Guarantee</a>
                    <a href="" class="des-one-items">Philips</a>
                    <a href="" class="des-one-items">Dr. Morepen</a>
                    <a href="" class="des-one-items">Complete Mobile Protection</a>
                    <a href="" class="des-one-items">Mobiles No Cost EMI</a>
                    <a href="" class="des-one-items">Huawei Watch Gt 2e Smart Watch</a>
                </div>
            </div>


            )}
            

        </div> 


    
      
    </div>
  )
}

export default ItemsBar
