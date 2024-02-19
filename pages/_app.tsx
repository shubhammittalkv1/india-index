import React ,{ useEffect, useState }from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeContext  } from "../core/context/theme-context";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  )
}

export default MyApp
