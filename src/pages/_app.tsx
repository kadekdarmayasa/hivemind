import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/globals.css';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import Loading from '@components/common/Loading';

const outfitLocalFont = localFont({
  variable: '--font-outfit',
  src: '../../public/fonts/Outfit-VariableFont_wght.ttf',
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', endLoading);
    router.events.on('routeChangeError', endLoading);

    return () => {
      router.events.on('routeChangeStart', startLoading);
      router.events.on('routeChangeComplete', endLoading);
      router.events.on('routeChangeError', endLoading);
    };
  }, [router]);

  if (isLoading) return <Loading />;

  return (
    <main className={`${outfitLocalFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
