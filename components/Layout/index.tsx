import Head from "next/head";
import Navbar from "../Navbar";
import { ReactNode } from "react";

export default function Layout({ children, title }: { children: ReactNode, title: string }): JSX.Element {
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
      <div className="xl:container font-outfit mx-auto sm:px-8 xl:px-0">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
