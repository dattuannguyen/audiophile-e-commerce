import Header from "../component/Header.jsx";
import Products from "../component/products/Products.jsx";
import Blogs from "../component/Blogs.jsx";
import IntroductionSection from "../component/IntroductionSection.jsx";

export default function Homepage(){
    return(
        <>
            <Header/>
            <Products/>
            <Blogs/>
            <IntroductionSection />

        </>
    )
}