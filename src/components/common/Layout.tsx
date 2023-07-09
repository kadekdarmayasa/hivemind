import { ReactNode } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { IconContext } from 'react-icons';
import { IoArrowUpOutline } from 'react-icons/io5';
import { motion, useScroll } from 'framer-motion';
import type NavItemType from 'types/NavItem';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const metaTags = {
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
  description: 'Digital Agency',
  author: 'Darma Yasa',
};

const faviconLinks = [
  { rel: 'icon', type: 'image/x-icon', href: '/images/favicon_io/favicon.ico' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon_io/apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon_io/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon_io/favicon-16x16.png' },
];

const arrowUpIconProps: IconContext = { size: '1.2em' };

export default function Layout({ children, title }: LayoutProps) {
  const { scrollYProgress } = useScroll();

  const menus: NavItemType[] = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <>
      <Head>
        {Object.entries(metaTags).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}

        {faviconLinks.map(({ rel, type, sizes, href }) => (
          <link key={href} rel={rel} type={type} sizes={sizes} href={href} />
        ))}

        <link rel="manifest" href="/site.webmanifest" />
        <title>{title}</title>
      </Head>

      <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />

      <div className="xl:container font-outfit mx-auto px-4 sm:px-8 xl:px-0 overflow-x-hidden">
        <Navbar menus={menus} />
        <main>
          {children}
          <ScrollToTop
            smooth
            component={
              <IconContext.Provider value={arrowUpIconProps}>
                <IoArrowUpOutline />
              </IconContext.Provider>
            }
            className="flex justify-center items-center"
          />
        </main>
        <Footer menus={menus} />
      </div>
    </>
  );
}
