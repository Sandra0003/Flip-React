import Catogory from "./Catogory"
import HeaderMain from "./HeaderMain"
import MovingScroll from "./MovingScroll"
import SectionFour from "./SectionFour"
import CategoryItem from "./CategoryItem"
import OfferSection from "./OfferSection"
import Footer from "../ProductPage/Footer"
import SideDisplay from "./SideDisplay"
import FavSection from "./FavSection"



const smartphones =[
  {
    img:"https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=60",
    name:"iPhone 16 Pro",
    price:"From ₹72,999*"
  },
  {
     img:"	https://rukminim2.flixcart.com/image/100/100/xif0q/mobile/q/l/i/-original-imahegqhjqz38uks.jpeg?q=60",
    name:"Google Pixel 9",
    price:"Just ₹34,999*"

  },
  {
    img:"https://rukminim2.flixcart.com/image/100/100/xif0q/mobile/f/a/6/-original-imahfz2tnafhmagr.jpeg?q=60",
    name:"Galaxy S24 5G",
    price:"From ₹39,999"
  },
  {
    img:"https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/u/8/w/-original-imah4jz6qhwgukgt.jpeg?q=60",
    name:"iPhone 16 Pro Max",
    price:"From ₹99,999*"
  },
  {
    img:"https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/g/r/b/-original-imahd872ftjsb6xh.jpeg?q=60",
    name:"vivo T4 Lite 5G",
    price:"Just ₹8,999*"
  },
  {
    img:"https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/l/x/1/-original-imahdv5ttyhhyhg9.jpeg?q=60",
    name:"Moto G96 5G",
    price:"Just ₹14,999*"

  },
  {
    img:"https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/t/m/g/-original-imahcfwmrnwy9zgn.jpeg?q=60",
    name:"Galaxy S24 FE",
    price:"From ₹29,999"
  },
  {
    img:"	https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=60",
    name:"Realme P3x 5G",
    price:"From ₹29,999"
  }
]

const appliances =[
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/television/n/j/0/-original-imahcsfhhbnpzt5z.jpeg?q=90",
    name:"65 / 75 inch TVs",
    price:"From ₹30,849*"
  },
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/washing-machine-new/q/w/x/-original-imagx7qhyuxgsmfy.jpeg?q=90",
    name:"Trending deals",
    price:"Shop now!"
  },
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/refrigerator-new/q/5/g/-original-imahg65j3ryrsfyt.jpeg?q=90",
    name:"Best-selling Re",
    price:"From ₹9,999"
  },
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/microwave-new/s/x/b/-original-imahd82ez72afreh.jpeg?q=90",
    name:"Microwave Ovan",
    price:"From ₹4,999"
                     
  },
  {                  
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/air-conditioner-new/d/7/f/-original-imahdr4apzpuydyq.jpeg?q=90",
    name:"Lowest Price",
    price:"From ₹19,499"
  },
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/mixer-grinder-juicer/i/0/m/-original-imaghy69gbrjwkvz.jpeg?q=90",         
    name:"Kitchen Essentials",
    price:"From ₹1249"                                                         
  },
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/water-purifier/q/d/w/m2-needs-no-service-for-2-years-10-stage-filtration-native-by-original-imah2usukstmh2ru.jpeg?q=90",
    name:"Home Essentials",
    price:"Shop Now!"

  },
  {
    img:"https://rukminim2.flixcart.com/image/110/110/xif0q/water-geyser/j/x/y/-original-imagrty2vtc9gruj.jpeg?q=90",
    name:"Fans & Geysers",
    price:"From ₹799"
  }
]

const offerSectionOne = [
  {img:"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/c5d0453a8ad30643.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/58d6d6db07978e56.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/a62ef5d49f9735da.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/d81749f2b7369dfd.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/7f568f957d69c47e.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/520/280/image/c0381ba1a743d06f.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/150/80/image/1851521e1446cb04.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/150/80/image/54b27b91e1b00449.jpg?q=90"},
  {img:"https://rukminim1.flixcart.com/fk-p-flap/150/80/image/7fd6c110d38e5900.jpg?q=90"}
]

const favSec =[
  {
    img:"https://rukminim1.flixcart.com/image/190/190/xif0q/mobile/x/j/s/-original-imahg2z9zcwf6yyy.jpeg?q=90",
    name :"Redmi",
    des:"Best Selling Product"
  },

  {
    img:"https://rukminim1.flixcart.com/image/190/190/xif0q/mobile/n/k/r/-original-imahfhudssrdghcz.jpeg?q=90",
    name:"Top Collection",
    des:"Top Collection"
  },
  {
    img:"https://rukminim1.flixcart.com/image/190/190/xif0q/mobile/z/h/v/-original-imahgzhp9vgvyfkg.jpeg?q=90",
    name:"Top Rated",
    des:"4 Stars and Above"
  }
  ,
  {
    img:"https://rukminim1.flixcart.com/image/180/180/xif0q/mobile/6/a/9/-original-imahfw4vxaqmcsjp.jpeg?q=90",
    name:"Top Quality",
    des:"Plus - Products"
  },
  {
    img:"https://rukminim1.flixcart.com/image/180/180/xif0q/headphone/r/c/j/-original-imahae3ea2j4mhkt.jpeg?q=90",
    name:"True Wireless",
    des:"Special offer"
  },
  {
    img:"https://rukminim1.flixcart.com/image/180/180/xif0q/sari/h/p/f/free-stylish-looking-saree-pd-cloth-villa-unstitched-original-imahcrn5t83yztds.jpeg?q=90",
    name:"Women's Sarees",
    des:"Min. 50% Off"
  },
  {
    img:"https://rukminim1.flixcart.com/image/180/180/xif0q/shoe/l/f/y/10-trm2542-10-0-trm-black-original-imahf438dpg2w8y7.jpeg?q=90",
    name:"Mens's Casual Shoes",
    des:"Min. 70% Off"
  },
  {
    img:"https://rukminim1.flixcart.com/image/180/180/xif0q/suitcase/g/h/u/-original-imahfsmv7qcagrk8.jpeg?q=90",
    name:"Suitcases",
    des:"Min. 70% Off"
  }

]





const MainBody = () => {
  return (
     <div id='container'>
      <HeaderMain />
        <div className="hederb">
        <div className='belowHeader'>
        <div className='belowHeader-sub1'>
          <Catogory/>
          <MovingScroll/>
          <CategoryItem elements={smartphones} heading="Best deals on smartphones" nameOfclass="phone"/>
          <SectionFour/>
          <OfferSection item={offerSectionOne.slice(0,6)}/>    

          <CategoryItem elements={appliances} heading="Best deals on appliances" nameOfclass="orderSeven"/>
          <OfferSection item={offerSectionOne.slice(6,10)} nameOfclass="offersectTwo"/>  
        

          <FavSection  heading="Shop Your Favorites" nameOfclass="fav" elements={favSec.slice(0,4)}/>  
          <FavSection heading="Best Value Deals on Fashon" nameOfclass="best"  elements={favSec.slice(4,8)}/>
          <SideDisplay/>

           </div>

        </div> 
        <Footer />
           
        </div> 
  
      </div> 
  
  )
}

export default MainBody
