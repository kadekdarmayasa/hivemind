import { Outfit } from 'next/font/google';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/main.css';
import { Provider } from 'react-redux';
import { setupStore } from 'store';

const outfit = Outfit({
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  display: 'swap'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <main className={`${outfit.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}