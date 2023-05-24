import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/main.css';
import localFont from 'next/font/local';
import { Provider } from 'react-redux';
import { setupStore } from 'store';
import type { AppProps } from 'next/app';

const outfitLocalFont = localFont({
  variable: '--font-outfit',
  src: '../../public/fonts/Outfit-VariableFont_wght.ttf',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <main className={`${outfitLocalFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
