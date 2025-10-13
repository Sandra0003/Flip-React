import Catogory from "./Components/category/Category";
import Header from "./Components/Header/Header";
import MainBody from "./Components/mainBody/MainBody";
import MobileFilter from "./Components/ProductPage/MobViewFilter/MobileFilter";
import ProductPage from "./Components/ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div id="container" >

    
        {/* <ProductPage /> */}
        <Routes>

          <Route path="/" element={<MainBody />}/>
          <Route path="product" element={<ProductPage />}/>
        {/* <MainBody /> */}
        </Routes>

       
        
    </div>
    </Router>
  );
}

export default App;
