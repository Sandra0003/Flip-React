import Ad from './Ad'
import MobProductdisplay from './MobProductdisplay'
import './MobView.css'
import MobViewHeader from './MobViewHeader'
import products from '../../../Products.json'
import TopDeals from './TopDeals'
import {Router,Route} from 'react-router-dom'
import MobileFilter from '../MobViewFilter/MobileFilter'
import { useState } from 'react'



const MobView = () => {
    const [sortType,setSortType] = useState("relevance")
    const [showFilter,setShowFilter]= useState(false)
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCount, setSelectedCount] = useState(0);

    const sortedPro = [...products].sort((a,b) => {
      if (sortType === "low") return a.price - b.price;
      if (sortType === "high") return b.price - a.price;
      if (sortType === "popularity") return b.popularity - a.popularity;
      if (sortType === "new") return new Date(b.date) - new Date(a.date)
    })

    const handleFilterChange = (filters) => {
    const count = Object.values(filters).reduce((acc, arr) => acc + arr.length, 0);
    setSelectedCount(count);
    };

      const applyFilters = (filters) => {
    let result = products.filter(product =>
      Object.entries(filters).every(([category, options]) => {
        if (!options || options.length === 0) return true;
        return options.includes(product[category]);
      })
    );
    setFilteredProducts(result);
  };



  return (
    <div id='MobContainer'>
      <div class="halfDiv all">
        <div class="halfDiv-sub">
          <Ad />
          {/* <MobProductdisplay products={sortedPro} /> */}
          <MobProductdisplay products={filteredProducts}/>
          {/* <MobProductdisplay products={products.slice(0,4)}/> */}
          <TopDeals products={products.slice(4,9)} />
          {/* <MobProductdisplay products={products.slice(5,9)} /> */}
          <Ad />
          <MobProductdisplay products={products.slice(7,)} />
          <TopDeals products={products.slice(1,6)} />



        </div>


      </div>
    
      <MobViewHeader onFilterToggle={setShowFilter} selectedCount={selectedCount}/>
      {showFilter &&(
        <div className='filter-overlay'>
          <MobileFilter onClose={() => setShowFilter(false)} onApply={applyFilters} />

        </div>
      ) }
                                                                                         


    </div>             
  )
}

export default MobView
