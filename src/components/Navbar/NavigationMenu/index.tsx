import Link from "next/link";
import { useRouter } from "next/router";
import { IconContext } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";
import type { NavigationMenuProps } from "types/NavigationMenu";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectedStatus, toggle } from 'slices/dropdownSlice';

export default function NavigationMenu({ href, name, containSubMenu, subMenu }: NavigationMenuProps): JSX.Element {
  const status = useAppSelector(selectedStatus);
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (containSubMenu) {
    return (
      <li tabIndex={0} className={`z-50 text-base font-regular relative text-brave-purple ml-10 nav-link ${status === 'open' || router.asPath.split('/')[1] === 'service' ? 'active' : ''}`} onBlur={() => dispatch(toggle('close'))} onFocus={() => dispatch(toggle('open'))} onMouseEnter={() => dispatch(toggle('open'))} onMouseLeave={() => dispatch(toggle('close'))}>
        <div className="flex items-center">
          <span className="service-menu-name">{name}</span>
          <div className="h-[1.2px] w-0 bg-palatinate-blue absolute -bottom-1 left-0 opacity-0 transition-all text-underline"></div>
          <IconContext.Provider value={{ size: '1.2em', className: 'ms-1 mt-[2px]' }}>
            <IoChevronForwardOutline className="rotate-90" />
          </IconContext.Provider>
        </div>

        <ul
          className={`font-light absolute z-50 w-80 bg-white rounded-lg shadow-black-md mt-4 px-4 py-5 right-2/4 translate-x-2/4 transition-all origin-top ${status === 'open' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        >
          {subMenu.map((item, index) => {
            const path = `${href}${item.path}`;

            return (
              <li key={index} className={`sub-menu ${index ? 'mt-2' : ''} ${router.asPath === path ? 'active' : ''}`}>
                <Link
                  href={path}
                  onClick={() => router.push(path)}
                  className="block px-3 py-3 w-full h-full"
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  } else {
    return (
      <li className={`z-50 text-base font-regular relative text-brave-purple ml-10 nav-link ${router.asPath == href && 'active'}`}>
        <div>
          <Link href={href} onClick={() => router.push(href)} className="block">{name}</Link>
          <div className="h-[1.2px] w-0 bg-palatinate-blue absolute -bottom-1 left-0 opacity-0 transition-all text-underline"></div>
        </div>
      </li>
    );

  }
}
