import YX1Mobile from './assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';
import YX1Tablet from "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import YX1Desktop from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import YX1ProductMobile from "./assets/product-yx1-earphones/mobile/image-product.jpg";
import YX1ProductTablet from "./assets/product-yx1-earphones/tablet/image-product.jpg";
import YX1ProductDesktop from "./assets/product-yx1-earphones/desktop/image-product.jpg";

const Earphones = [
    {
        id:"yx1-earphones",
        name: "YX1 wireless earphones",
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        imageMobile: YX1Mobile,
        imageTablet: YX1Tablet,
        imageDesktop: YX1Desktop,
        imageProductMobile:YX1ProductMobile,
        imageProductTablet:YX1ProductTablet,
        imageProductDesktop:YX1ProductDesktop,
        price :"599",
        features:[
            "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
            "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
        ],
        inTheBox: [
            { quantity: "2x", item: "Earphone Unit" },
            { quantity: "6x", item: "Multi-size Earplugs" },
            { quantity: "1x", item: "User Manual" },
            { quantity: "1x", item: "USB-C Charging Cable" },
            { quantity: "1x", item: "Travel Pouch" },
        ]
    },
];

export default Earphones;
