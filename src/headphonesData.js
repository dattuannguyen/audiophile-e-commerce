// src/data/headphonesData.js

import XX99Mark2Mobile from "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XX99Mark2Tablet from "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX99Mark2Desktop from "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XXMark1Mobile from "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import XXMark1Tablet from "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import XXMark1Desktop from "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59Mobile from "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import XX59Tablet from "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import XX59Desktop from "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

const Headphones = [
    {
        id: "xx99-mark-ii",
        name: "XX99 Mark II Headphones",
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. " +
            "It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        imageMobile: XX99Mark2Mobile,
        imageTablet: XX99Mark2Tablet,
        imageDesktop: XX99Mark2Desktop,
        new:"New Product",
        price: "2,999",
        features: [
            "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
            "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        ],
        inTheBox: [
            { quantity: "1x", item: "Headphone Unit" },
            { quantity: "2x", item: "Replacement Earcups" },
            { quantity: "1x", item: "User Manual" },
            { quantity: "1x", item: "3.5mm 5m Audio Cable" },
            { quantity: "1x", item: "Travel Bag" }
        ]
    },
    {
        id: "xx99-mark-i",
        name: "XX99 Mark I Headphones",
        description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        imageMobile: XXMark1Mobile,
        imageTablet: XXMark1Tablet,
        imageDesktop: XXMark1Desktop,
        price: "1,750",
        features: [
            "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. ",
            "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
        ],
        inTheBox: [
            { quantity: "1x", item: "Headphone Unit" },
            { quantity: "2x", item: "Replacement Earcups" },
            { quantity: "1x", item: "User Manual" },
            { quantity: "1x", item: "3.5mm 5m Audio Cable" },
        ]
    },
    {
        id: "xx59",
        name: "XX59 Headphones",
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        imageMobile: XX59Mobile,
        imageTablet: XX59Tablet,
        imageDesktop: XX59Desktop,
        price: "1500",
        features: [
            "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
            "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
        ],
        inTheBox: [
            { quantity: "1x", item: "Headphone Unit" },
            { quantity: "2x", item: "Replacement Earcups" },
            { quantity: "1x", item: "User Manual" },
            { quantity: "1x", item: "3.5mm 5m Audio Cable" },
        ]
    },
];

export default Headphones;
