import Catogory from "./Components/category/Category";
import Header from "./Components/Header/Header";
import MainBody from "./Components/mainBody/MainBody";
import MobileDetail from "./Components/MobileDetailPage/MobileDetail";
import MobileFilter from "./Components/ProductPage/MobViewFilter/MobileFilter";
import ProductPage from "./Components/ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div id="container" >

    
        <Routes>

          <Route path="/" element={<MainBody />}/>
          <Route path="product" element={<ProductPage />}/>
          <Route path="mobdetails" element={<MobileDetail />} />
        </Routes>

       
        
    </div>
    </Router>
  );
}

export default App;
