import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "components/Footer";
import useSWR from 'swr';
import axios from "axios";
import type { NavigationMenuProps } from "types/NavigationMenu";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { selectedStatus, toggle } from 'redux/slices/dropdownSlice';

const fetcher = (url: string) => axios.get(url).then(response => response.data);

export default function Layout({ children, title }: Layout): JSX.Element | any {
  const status = useAppSelector(selectedStatus);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useSWR('/api/services', fetcher);

  function handleClick(e) {
    if (!(e.target.classList.contains('service-menu-name'))) {
      if (status === 'open') dispatch(toggle('close'))
    }
  }

  if (error) return false;
  if (isLoading) return false;

  const menu: NavigationMenuProps[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    {
      href: '/services',
      name: 'Services',
      containSubMenu: true,
      subMenu: data
    },
    { href: '/portfolio', name: 'Portfolio' },
    { href: '/blog', name: 'Blog' },
    { href: '/contact', name: 'Contact' },
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
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
        <title>{title}</title>
      </Head>
      <div className="xl:container font-outfit mx-auto sm:px-8 xl:px-0" onClick={handleClick}>
        <Navbar menu={menu} />
        <main>{children}</main>
        <Footer menu={menu} />
      </div>
    </>
  )
}

type Layout = {
  children: React.ReactNode,
  title: string
}
