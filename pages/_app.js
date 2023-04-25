import { Outfit } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/main.css';

const outfit = Outfit({
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${outfit.variable} font-outfit`}>
      <Component {...pageProps} />
    </main>
  );
}