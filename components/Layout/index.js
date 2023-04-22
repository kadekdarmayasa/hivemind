import Head from "next/head";
import Navbar from "../Navbar";
import PropTypes from 'prop-types';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Digital Agency" />
        <meta name="author" content="Darma Yasa" />
        <title>{title}</title>
      </Head>
      <div className="xl:container font-outfit mx-auto sm:px-8 xl:px-0">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}