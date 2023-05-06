import Brand from "../Brand";
import NavigationMenu from "./NavigationMenu";
import type { NavigationMenuProps } from "types/NavigationMenu";
import Fade from 'react-reveal/Fade';

export default function Navbar({ menu }: { menu: NavigationMenuProps[] }): JSX.Element {
  return (
    <Fade>
      <nav className="flex h-[80px] justify-between items-center">
        <Brand />
        <ul className="flex items-center">
          {menu.map((item, index) => (<NavigationMenu key={index} href={item.href} name={item.name} containSubMenu={item.containSubMenu} subMenu={item.subMenu} />))}
        </ul>
      </nav>
    </Fade>
  );
}


