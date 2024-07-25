import './App.css'
import Homepage from "./Component/Homepage.jsx";
import Navbar from "./Component/Navbar.jsx";
import {Routes,Route} from "react-router-dom";
import Category from "./Component/Category.jsx";

import XX99Mark2Mobile from "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XX99Mark2Tablet from "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX99Mark2Desktop from "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XXMark1Mobile from "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import XXMark1Tablet from "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import XXMark1Desktop from "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59Mobile from "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import XX59Tablet from "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import XX59Desktop from "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import ZX9Mobile from './assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';
import ZX9Tablet from './assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import ZX9Desktop from './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import ZX7Mobile from './assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';
import ZX7Tablet from './assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import ZX7Desktop from "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import YX1Mobile from './assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';
import YX1Tablet from "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import YX1Desktop from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
import Footer from "./Component/Footer.jsx";
import IntroductionSection from "./Component/IntroductionSection.jsx";

const Headphones =[
    {
        name:"XX99 Mark II Headphones",
        description:"The new XX99 Mark II headphones is the pinnacle of pristine audio. " +
            "It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        imageMobile: XX99Mark2Mobile,
        imageTablet: XX99Mark2Tablet,
        imageDesktop: XX99Mark2Desktop
    },
    {
        name:"XX99 Mark I Headphones",
        description:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        imageMobile: XXMark1Mobile,
        imageTablet: XXMark1Tablet,
        imageDesktop: XXMark1Desktop
    },
    {
        name:"XX59 Headphones",
        description:"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        imageMobile: XX59Mobile,
        imageTablet: XX59Tablet,
        imageDesktop: XX59Desktop
    },
]

const Speakers =[
    {
        name:"ZX9 Speaker",
        description:"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        imageMobile: ZX9Mobile,
        imageTablet: ZX9Tablet,
        imageDesktop: ZX9Desktop
    },
    {
        name:"ZX7 Speaker",
        description:"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        imageMobile: ZX7Mobile,
        imageTablet: ZX7Tablet,
        imageDesktop: ZX7Desktop
    },
]

const Earphones =[
    {
        name:"YX1 wireless earphones",
        description:"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        imageMobile: YX1Mobile,
        imageTablet: YX1Tablet,
        imageDesktop: YX1Desktop
    },

]

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/headphones" element={<Category title="Headphones" product={Headphones}/>}/>
            <Route path="/speakers" element={<Category title="Speaker" product={Speakers}/>}/>
            <Route path="/earphones" element={<Category title="Earphones" product={Earphones}/>}/>
        </Routes>
        <IntroductionSection/>
        <Footer/>

    </>
  )
}

export default App
