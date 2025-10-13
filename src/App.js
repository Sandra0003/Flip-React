import Catogory from "./Components/category/Category";
import Header from "./Components/Header/Header";
import MainBody from "./Components/mainBody/MainBody";
import MobileFilter from "./Components/ProductPage/MobViewFilter/MobileFilter";
import ProductPage from "./Components/ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div id="container" >

    
        <ProductPage />
        {/* <MainBody /> */}

       
                     
    </div>
  );
}

export default App;
