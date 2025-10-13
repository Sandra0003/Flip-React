import React from 'react'
import './ProductPage.css'
import ProductHeader from './ProductHeader'
import ItemsBar from './ItemsBar'
import AllSection from './AllSection'
import Footer from './Footer'
import MobView from './ProductPageMobView/MobView'
import MobileFilter from './MobViewFilter/MobileFilter'

const ProductPage = () => {
  return (
    <div id='container'>
      <div className='desktop'>
        <ProductHeader />
        <ItemsBar />
        <AllSection/>
        <Footer />
        </div>
        <MobView />

        
      
    </div>
  )
}

export default ProductPage
