// import Ad from './Ad'
// import MobProductdisplay from './MobProductdisplay'
// import './MobView.css'
// import MobViewHeader from './MobViewHeader'
// import products from '../../../Products.json'
// import TopDeals from './TopDeals'
// import {Router,Route} from 'react-router-dom'
// import MobileFilter from '../MobViewFilter/MobileFilter'
// import { useState } from 'react'
// import MobileSort from '../MobViewSort/MobileSort'



// const MobView = () => {
//     const [sortType,setSortType] = useState("relevance")
//     // const [showSort, setShowSort] = useState(false);

//     const [showFilter,setShowFilter]= useState(false)
//     const [filteredProducts, setFilteredProducts] = useState(products);
//     const [selectedCount, setSelectedCount] = useState(0);

//     const handleSortChange = (newSortType) => setSortType(newSortType)

//     const sortedPro = [...filteredProducts].sort((a,b) => {
//       if (sortType === "low") return a.price - b.price;
//       if (sortType === "high") return b.price - a.price;
//       if (sortType === "popularity") return b.popularity - a.popularity;
//       if (sortType === "new") return new Date(b.date) - new Date(a.date)
//     })

//     const handleFilterChange = (filters) => {
//     const count = Object.values(filters).reduce((acc, arr) => acc + arr.length, 0);
//     setSelectedCount(count);
//     };

//       const applyFilters = (filters) => {
//     let result = products.filter(product =>
//       Object.entries(filters).every(([category, options]) => {
//         if (!options || options.length === 0) return true;
//         return options.includes(product[category]);
//       })
//     );
//     setFilteredProducts(result);
//   };



//   return (
//     <div id='MobContainer'>
//       <div class="halfDiv all">
//         <div class="halfDiv-sub">
//           <Ad />
//           <MobProductdisplay products={sortedPro} />
//           {/* <MobProductdisplay products={filteredProducts}/> */}
//           {/* <MobProductdisplay products={products.slice(0,4)}/> */}
//           <TopDeals products={products.slice(4,9)} />
//           {/* <MobProductdisplay products={products.slice(5,9)} /> */}
//           <Ad />
//           <MobProductdisplay products={products.slice(7,)} />
//           <TopDeals products={products.slice(1,6)} />



//         </div>


//       </div>
    
//       <MobViewHeader onFilterToggle={setShowFilter} selectedCount={selectedCount} onSortChange={handleSortChange}/>
//       {showSort && (  
//         <div className='mobsort-overlay'>
//         <MobProductdisplay products={sortedPro} />
//                 </div>

//         )}
      
//       {showFilter &&(
//         <div className='filter-overlay'>
//           <MobileFilter onClose={() => setShowFilter(false)} onApply={applyFilters} />

//         </div>
//       ) }
    

   

//     </div>             
//   )                                                
// }

// export default MobView


import Ad from './Ad'
import MobProductdisplay from './MobProductdisplay'
import './MobView.css'
import MobViewHeader from './MobViewHeader'
import products from '../../../Products.json'
import TopDeals from './TopDeals'
import MobileFilter from '../MobViewFilter/MobileFilter'
import { useState, useEffect } from 'react'

const MobView = () => {
  const [sortType, setSortType] = useState("relevance")
  const [showFilter, setShowFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCount, setSelectedCount] = useState(0)
  const [filters, setFilters] = useState({})

  // 🔹 Handle filtering
  const applyFilters = (newFilters) => {
    setFilters(newFilters)
    const count = Object.values(newFilters).reduce((acc, arr) => acc + arr.length, 0)
    setSelectedCount(count)
  }

  // 🔹 Recalculate filtered & sorted products whenever filters OR sortType change
  useEffect(() => {
    // 1️⃣ Apply filters
    let result = products.filter(product =>
      Object.entries(filters).every(([category, options]) => {
        if (!options || options.length === 0) return true
        return options.includes(product[category])
      })
    )

    // 2️⃣ Apply sorting
    if (sortType === "low") result.sort((a, b) => a.price - b.price)
    else if (sortType === "high") result.sort((a, b) => b.price - a.price)
    else if (sortType === "popularity") result.sort((a, b) => b.popularity - a.popularity)
    else if (sortType === "new") result.sort((a, b) => new Date(b.date) - new Date(a.date))

    // 3️⃣ Update state
    setFilteredProducts(result)
  }, [filters, sortType]) // 🔥 both filter and sort trigger updates

  return (
    <div id='MobContainer'>
      <div className="halfDiv all">
        <div className="halfDiv-sub">
          <Ad />
          <MobProductdisplay products={filteredProducts} />
          <TopDeals products={products.slice(4, 9)} />
          <Ad />
          <MobProductdisplay products={products.slice(7)} />
          <TopDeals products={products.slice(1, 6)} />
        </div>
      </div>

      {/* Header with Filter + Sort */}
      <MobViewHeader
        onFilterToggle={setShowFilter}
        selectedCount={selectedCount}
        onSortChange={setSortType}
      />

      {/* Filter overlay */}
      {showFilter && (
        <div className='filter-overlay'>
          <MobileFilter
            onClose={() => setShowFilter(false)}
            onApply={applyFilters}
          />
        </div>
      )}
    </div>
  )
}

export default MobView
