import  { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./page/Homepage.jsx";
import Navbar from "./component/Navbar.jsx";
import CategoryPage from "./page/CategoryPage.jsx";
import ProductsDetailsPage from "./page/ProductsDetailsPage.jsx";
import Footer from "./component/Footer.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import CartContext from "./context/CartContext.jsx";
import Headphones from "./data/headphonesData.js";
import Speakers from "./data/speakersData.js";
import Earphones from "./data/earphonesData.js";
import CartBox from './component/CartBox.jsx';
import CheckoutPage from "./page/CheckoutPage.jsx";

const AppContainer = () => {
    const { isCartOpen, toggleCart} = useContext(CartContext);

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
                    <Route path="/product/:productId" element={<ProductsDetailsPage products={[...Headphones, ...Speakers, ...Earphones]} />} />
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Routes>
            </div>
            <Footer />

            {isCartOpen && <CartBox />}

        </>
    );
};

export default AppContainer;
