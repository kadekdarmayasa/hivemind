import Brand from '../Brand';
import NavigationMenu from './NavigationMenu';
import type { NavigationMenuProps } from 'types/NavigationMenu';

export default function Navbar({ menus }: { menus: NavigationMenuProps[] }): JSX.Element {
  // TODO: using framer motion for animation
  return (
    <nav className='flex h-[80px] justify-between items-center'>
      <Brand />
      <ul className='flex items-center'>
        {menus.map((menu, index) => (
          <NavigationMenu 
            key={index} 
            path={menu.path} 
            name={menu.name} 
            containSubMenu={menu.containSubMenu} 
            subMenus={menu.subMenus} />))}
      </ul>
    </nav>
  );
}


