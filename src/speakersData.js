import ZX9Mobile from './assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';
import ZX9Tablet from './assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';
import ZX9Desktop from './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import ZX7Mobile from './assets/product-zx7-speaker/mobile/image-category-page-preview.jpg';
import ZX7Tablet from './assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';
import ZX7Desktop from "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

const Speakers = [
    {
        id:"zx9-speaker",
        name: "ZX9 Speaker",
        description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        imageMobile: ZX9Mobile,
        imageTablet: ZX9Tablet,
        imageDesktop: ZX9Desktop,
        new:"New Product",
        price: "4,500",
        features:[
            "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
            "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
        ],
        inTheBox: [
            { quantity: "2x", item: "Speaker Unit" },
            { quantity: "2x", item: "Speaker Cloth Panel" },
            { quantity: "1x", item: "User Manual" },
            { quantity: "1x", item: "3.5mm 10m Audio Cable" },
            { quantity: "1x", item: "10m Optical Cable" }
        ]

    },
    {
        id:"zx7-speaker",
        name: "ZX7 Speaker",
        description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        imageMobile: ZX7Mobile,
        imageTablet: ZX7Tablet,
        imageDesktop: ZX7Desktop,
        price: "3,500",
        features: [
            "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
            "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
        ],
        inTheBox: [
            { quantity: "2x", item: "Speaker Unit" },
            { quantity: "2x", item: "Speaker Cloth Panel" },
            { quantity: "1x", item: "User Manual" },
            { quantity: "1x", item: "3.5mm 7.5m Audio Cable" },
            { quantity: "1x", item: "7.5m Optical Cable" }
        ]

    },
];

export default Speakers;
