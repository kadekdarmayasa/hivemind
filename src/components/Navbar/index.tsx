import Brand from "../Brand";
import NavigationMenu from "./NavigationMenu";
import type { NavigationMenuProps } from "types/NavigationMenu";
import Fade from 'react-reveal/Fade';

export default function Navbar({ menus }: { menus: NavigationMenuProps[] }): JSX.Element {
  return (
    <Fade>
      <nav className="flex h-[80px] justify-between items-center">
        <Brand />
        <ul className="flex items-center">
          {menus.map((menu, index) => (<NavigationMenu key={index} href={menu.href} name={menu.name} containSubMenu={menu.containSubMenu} subMenu={menu.subMenu} />))}
        </ul>
      </nav>
    </Fade>
  );
}


