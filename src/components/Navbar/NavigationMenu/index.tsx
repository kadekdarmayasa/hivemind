import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { IoChevronForwardOutline } from 'react-icons/io5';
import type { NavigationMenuProps } from 'types/NavigationMenu';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { selectedState, toggle } from '@redux-slices/dropdownSlice';
import { AppDispatch } from 'store';

export default function NavigationMenu({ path, name, containSubMenu, subMenus }: NavigationMenuProps) {
  const dropdownState = useAppSelector(selectedState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return containSubMenu ? (
    <MenuWithSubMenu
      menu={{ name, path }}
      subMenus={subMenus}
      dispatch={dispatch}
      dropdownState={dropdownState}
      router={router}
    />
  ) : (
    <MenuWithoutSubMenu
      menu={{ name, path }}
      router={router}
    />
  );
}

function MenuWithSubMenu({
  menu,
  subMenus,
  dispatch,
  dropdownState,
  router,
}: {
  menu: {
    name: NavigationMenuProps['name'],
    path: NavigationMenuProps['path'],
  },
  subMenus: NavigationMenuProps['subMenus'],
  dispatch: AppDispatch,
  dropdownState: 'open' | 'close',
  router: NextRouter
}) {
  return (
    <li
      tabIndex={0}
      className={`
        z-50 text-base font-regular relative text-brave-purple ml-10 nav-link 
        ${dropdownState === 'open' || router.asPath.split('/')[1] === 'service' ? 'active' : ''}`
      }
      onBlur={() => dispatch(toggle('close'))}
      onFocus={() => dispatch(toggle('open'))}
      onMouseEnter={() => dispatch(toggle('open'))}
      onMouseLeave={() => dispatch(toggle('close'))}
    >
      <div className='flex items-center'>
        <span className='service-menu-name' data-testid='nav-menu-text'>{menu.name}</span>
        <div className='custom-underline'></div>
        <IconContext.Provider value={{ size: '1.2em', className: 'ms-1 mt-[2px]' }}>
          <IoChevronForwardOutline className="rotate-90" />
        </IconContext.Provider>
      </div>

      <ul
        className={`
          font-light absolute z-50 w-80 bg-white rounded-lg shadow-black-md mt-4 px-4 py-5 right-2/4 translate-x-2/4 
          transition-all origin-top ${dropdownState === 'open' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}
      >
        {subMenus.map((subMenu, index) => {
          const path = `${menu.path}${subMenu.path}`;

          return (
            <li
              key={index}
              className={`sub-menu ${index ? 'mt-2' : ''} ${router.asPath === path ? 'active' : ''}`}
            >
              <Link
                href={path}
                onClick={() => router.push(path)}
                className='block px-3 py-3 w-full h-full'
              >
                {subMenu.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </li>);
}

function MenuWithoutSubMenu({
  menu,
  router,
}: {
  menu: {
    name: NavigationMenuProps['name'],
    path: NavigationMenuProps['path'],
  },
  router: NextRouter,
}) {
  return (
    <li
      className={`
        z-50 text-base font-regular relative text-brave-purple ml-10 nav-link 
        ${router.asPath === menu.path && 'active'}
      `}
    >
      <div>
        <Link
          href={menu.path}
          onClick={() => router.push(menu.path)}
          className='block'
        >
          {menu.name}
        </Link>
        <div className='custom-underline'></div>
      </div>
    </li>
  );
}
