import './App.css'
import Homepage from "./Component/Homepage.jsx";
import Navbar from "./Component/Navbar.jsx";
import {Routes,Route} from "react-router-dom";
import Category from "./Component/Category.jsx";
import ProductDetails from "./Component/ProductDetails.jsx";
import Footer from "./Component/Footer.jsx";
import IntroductionSection from "./Component/IntroductionSection.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";

import Headphones from "./headphonesData.js"
import Speakers from "./speakersData.js";
import Earphones from "./earphonesData.js";
function App() {
  return (
    <>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/headphones" element={<Category title="Headphones" product={Headphones}/>}/>
            <Route path="/speakers" element={<Category title="Speaker" product={Speakers}/>}/>
            <Route path="/earphones" element={<Category title="Earphones" product={Earphones}/>}/>
            <Route path="/product/:productId" element={<ProductDetails products={[...Headphones, ...Speakers, ...Earphones]}/>}/>
        </Routes>
        <IntroductionSection/>
        <Footer/>

    </>
  )
}

export default App
