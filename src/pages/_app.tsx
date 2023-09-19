import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";

const outfitLocalFont = localFont({
  variable: "--font-outfit",
  src: "../../public/fonts/Outfit-VariableFont_wght.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${outfitLocalFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
