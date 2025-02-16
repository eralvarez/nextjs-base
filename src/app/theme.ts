'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: [ 'latin' ],
  display: 'swap'
});

// const montserrat = Montserrat({
//   subsets: [ 'latin' ],
//   display: 'swap'
// });
//
// const playfairDisplay = Playfair_Display({
//   subsets: [ 'latin' ],
//   display: 'swap'
// });
//
// const lora = Lora({
//   subsets: [ 'latin' ],
//   display: 'swap'
// });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    // fontFamily: lora.style.fontFamily,
    // h1: {
    //   fontFamily: playfairDisplay.style.fontFamily
    // },
    // h2: {
    //   fontFamily: playfairDisplay.style.fontFamily
    // },
    // h3: {
    //   fontFamily: playfairDisplay.style.fontFamily
    // },
    // h4: {
    //   fontFamily: playfairDisplay.style.fontFamily
    // },
    // h5: {
    //   fontFamily: playfairDisplay.style.fontFamily
    // },
    // h6: {
    //   fontFamily: playfairDisplay.style.fontFamily
    // },
    button: {
      // fontFamily: montserrat.style.fontFamily
      textTransform: 'none'
    }
  },
  components: {}
});

export default theme;