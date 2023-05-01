import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";
import { NavigationMenuProps } from "types/NavigationMenu";

export default function NavigationMenu({ href, name, containSubMenu, subMenu }: NavigationMenuProps): JSX.Element {
  const router = useRouter();
  const [showSubMenu, setShowSubMenu] = useState(false);

  if (containSubMenu) {
    return (
      <li className={`text-base font-regular relative text-brave-purple ml-10 nav-link ${showSubMenu && 'active'}`} onClick={() => setShowSubMenu(!showSubMenu)}>
        <div className="flex items-center">
          <span>{name}</span>
          <div className="h-[1.2px] w-0 bg-palatinate-blue absolute -bottom-1 left-0 opacity-0 transition-all text-underline"></div>
          <IconContext.Provider value={{ size: '1.2em', className: 'ms-1 mt-[2px]' }}>
            <IoChevronForwardOutline className="rotate-90" />
          </IconContext.Provider>
        </div>

        <ul
          className={`font-light absolute w-80 bg-white rounded-lg shadow-black-md mt-6 px-4 py-5 right-2/4 translate-x-2/4 transition-all origin-top ${showSubMenu ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        >
          {subMenu.map((item, index) => {
            const path = `${href}${item.path}`;

            return (
              <li key={index} className={`sub-menu ${index ? 'mt-2' : ''} ${router.asPath === path ? 'active' : ''}`}>
                <Link
                  href={path}
                  onClick={() => router.push(path)}
                  className="block"
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
      <li className={`text-base font-regular relative text-brave-purple ml-10 nav-link ${router.asPath == href && 'active'}`}>
        <div>
          <Link href={href} onClick={() => router.push(href)} className="block">{name}</Link>
          <div className="h-[1.2px] w-0 bg-palatinate-blue absolute -bottom-1 left-0 opacity-0 transition-all text-underline"></div>
        </div>
      </li>
    );

  }
}
