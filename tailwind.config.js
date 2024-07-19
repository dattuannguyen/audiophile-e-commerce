/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manropeBold:'Manrope-Bold',
        manropeRegular:'Manrope-Regular',
        manropeMedium:'Manrope-Medium'
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/home/desktop/image-hero.jpg')",
        'hero-tablet':"url('/src/assets/home/tablet/image-header.jpg')",
        'hero-mobile':"url('/src/assets/home/mobile/image-header.jpg')",
        'zx7':"url('/src/assets/home/desktop/image-speaker-zx7.jpg')",
        'zx7-tablet':"url('/src/assets/home/tablet/image-speaker-zx7.jpg')",
        'zx7-mobile':"url('src/assets/home/mobile/image-speaker-zx7.jpg')",
        'earphoneYx1':"url('/src/assets/home/desktop/image-earphones-yx1.jpg')",
        'earphoneYx1-mobile':"url('/src/assets/home/mobile/image-earphones-yx1.jpg')"

      },
      colors:{
        'darkOrange':'#D87D4A',
        'lightOrange':'#FBAF85',
        'matteBlack':'#101010',
        'matteGray':'#F1F1F1',
        'matteWhite':'#FAFAFA',
        'trueWhite':'#FFFFFF',
        'trueBlack':'#000000'
      },
    },
  },
  plugins: [],
}

