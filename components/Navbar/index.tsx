import Brand from "../Brand";
import NavigationMenu from "./NavigationMenu";
import type { NavigationMenuProps } from "types/NavigationMenu";

export default function Navbar({ menu }: { menu: NavigationMenuProps[] }): JSX.Element {
  return (
    <nav className="flex h-[80px] justify-between items-center">
      <Brand />
      <ul className="flex items-center">
        {menu.map((item, index) => (<NavigationMenu key={index} href={item.href} name={item.name} containSubMenu={item.containSubMenu} subMenu={item.subMenu} />))}
      </ul>
    </nav>
  );
}

const menu: NavigationMenuProps[] = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  {
    href: '/services', name: 'Services', containSubMenu: true, subMenu: [
      { path: '/web-design', name: 'Web Design' },
      { path: '/seo', name: 'SEO' },
      { path: '/smm', name: 'Social Media Marketing' },
      { path: '/content-creation', name: 'Content Creation' },
      { path: '/ec-solutions', name: 'E-commerce Solutions' },
      { path: '/mobiledev', name: 'Mobile App Dev' },
    ]
  },
  { href: '/portfolio', name: 'Portfolio' },
  { href: '/blog', name: 'Blog' },
  { href: '/contact', name: 'Contact' },
];

