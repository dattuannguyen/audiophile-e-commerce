import  { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./page/Homepage.jsx";
import Navbar from "./component/Navbar.jsx";
import CategoryPage from "./page/CategoryPage.jsx";
import ProductDetails from "./component/ProductDetails.jsx";
import Footer from "./component/Footer.jsx";
import IntroductionSection from "./component/IntroductionSection.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import CartContext from "./context/CartContext.jsx";
import Headphones from "./data/headphonesData.js";
import Speakers from "./data/speakersData.js";
import Earphones from "./data/earphonesData.js";
import CartBox from './component/CartBox.jsx';

const AppContainer = () => {
    const { isCartOpen, toggleCart } = useContext(CartContext);

    return (
        <>
            <ScrollToTop />
            <Navbar toggleCart={toggleCart} />
            {isCartOpen && <div className="overlay active" onClick={toggleCart}></div>}
            <div className={isCartOpen ? "blur-background" : ""}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/headphones" element={<CategoryPage title="Headphones" product={Headphones} />} />
                    <Route path="/speakers" element={<CategoryPage title="Speaker" product={Speakers} />} />
                    <Route path="/earphones" element={<CategoryPage title="Earphones" product={Earphones} />} />
                    <Route path="/product/:productId" element={<ProductDetails products={[...Headphones, ...Speakers, ...Earphones]} />} />
                </Routes>
                <IntroductionSection />
                <Footer />
            </div>
            {isCartOpen && <CartBox />}
        </>
    );
};

export default AppContainer;
