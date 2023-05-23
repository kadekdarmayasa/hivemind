import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { IconContext } from "react-icons";
import { IoArrowUpOutline } from "react-icons/io5";
import useSWR from 'swr';
import axios from "axios";
import type { NavigationMenuProps } from "types/NavigationMenu";

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function Layout({ children, title }: LayoutProps): JSX.Element | any {
  const { data, error, isLoading } = useSWR('/api/services', fetcher);

  if (error) return false;
  if (isLoading) return false;

  const menus: NavigationMenuProps[] = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    {
      path: '/service',
      name: 'Services',
      containSubMenu: true,
      subMenus: data
    },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contact' },
  ];


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Digital Agency" />
        <meta name="author" content="Darma Yasa" />
        <link rel="icon" type="image/x-icon" href="/images/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{title}</title>
      </Head>
      <div className="xl:container font-outfit mx-auto sm:px-8 xl:px-0">
        <Navbar menus={menus} />
        <main>
          {children}
          <ScrollToTop
            smooth
            component={
              <IconContext.Provider value={{ size: '1.2em' }}>
                <IoArrowUpOutline />
              </IconContext.Provider>
            }
            className="flex justify-center items-center"
          />
        </main>
        <Footer menus={menus} />
      </div>
    </>
  )
}

type LayoutProps = {
  children: React.ReactNode,
  title: string
}
