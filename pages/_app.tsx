import { Outfit } from 'next/font/google';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/main.css';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';

const outfit = Outfit({
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${outfit.variable} font-outfit`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}