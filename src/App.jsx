import './App.css'
import Homepage from "./page/Homepage.jsx";
import Navbar from "./component/Navbar.jsx";
import {Routes,Route} from "react-router-dom";
import CategoryPage from "./page/CategoryPage.jsx";
import ProductDetails from "./component/ProductDetails.jsx";
import Footer from "./component/Footer.jsx";
import IntroductionSection from "./component/IntroductionSection.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import Headphones from "./data/headphonesData.js"
import Speakers from "./data/speakersData.js";
import Earphones from "./data/earphonesData.js";
function App() {
  return (
    <>
        <CartProvider>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/headphones" element={<CategoryPage title="Headphones" product={Headphones}/>}/>
                <Route path="/speakers" element={<CategoryPage title="Speaker" product={Speakers}/>}/>
                <Route path="/earphones" element={<CategoryPage title="Earphones" product={Earphones}/>}/>
                <Route path="/product/:productId" element={<ProductDetails products={[...Headphones, ...Speakers, ...Earphones]}/>}/>
            </Routes>
            <IntroductionSection/>
            <Footer/>
        </CartProvider>

    </>
  )
}

export default App
