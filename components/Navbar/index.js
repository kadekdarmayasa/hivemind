import Brand from "../Brand";
import NavigationMenu from "./NavigationMenu";
export default function Navbar() {
  return (
    <nav className="flex h-[80px] justify-between items-center">
      <Brand />
      <ul className="flex items-center">
        {[
          { href: '/', name: 'Home' },
          { href: '/about', name: 'About' },
          { href: '/services', name: 'Services' },
          { href: '/portfolio', name: 'Portfolio' },
          { href: '/blog', name: 'Blog' },
          { href: '/contact', name: 'Contact' },
        ].map((item, index) => (<NavigationMenu key={index} href={item.href} name={item.name} />))}
      </ul>
    </nav>
  );
}

