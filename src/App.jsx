import './App.css'
import Homepage from "./Component/Homepage.jsx";
import Navbar from "./Component/Navbar.jsx";
import {Routes,Route} from "react-router-dom";
import Category from "./Component/Category.jsx";

import Headphones from "./headphonesData.js"
import Speakers from "./speakersData.js";
import Earphones from "./earphonesData.js";
import Footer from "./Component/Footer.jsx";
import IntroductionSection from "./Component/IntroductionSection.jsx";

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/headphones" element={<Category title="HeadphonesData" product={Headphones}/>}/>
            <Route path="/speakers" element={<Category title="Speaker" product={Speakers}/>}/>
            <Route path="/earphones" element={<Category title="Earphones" product={Earphones}/>}/>
        </Routes>
        <IntroductionSection/>
        <Footer/>

    </>
  )
}

export default App
