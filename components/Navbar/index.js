import Brand from "../Brand";
import NavigationMenu from "./NavigationMenu";
export default function Navbar() {
  return (
    <nav className="flex h-[80px] justify-between items-center">
      <Brand />
      <ul className="flex items-center">
        <NavigationMenu href='/' name='Home' />
        <NavigationMenu href='/about' name='About' />
        <NavigationMenu href='/services' name='Services' />
        <NavigationMenu href='/portfolio' name='Portfolio' />
        <NavigationMenu href='/blog' name='Blog' />
        <NavigationMenu href='/contact' name='Contact' />
      </ul>
    </nav>
  );
}

