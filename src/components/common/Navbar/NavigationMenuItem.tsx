import { LegacyRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type NavItemType from 'types/NavItem';

type NavigationMenuItemProps = NavItemType & {
  lastMenuItemRef?: LegacyRef<HTMLLIElement>;
};

export default function NavigationMenuItem(props: NavigationMenuItemProps) {
  const { path, name, lastMenuItemRef } = props;
  const router = useRouter();
  const isNavActive = router.asPath === path;

  return (
    <li
      ref={lastMenuItemRef}
      className={`
          z-50 mb-10 md:mb-0 text-white text-xl md:text-lg font-regular relative md:text-brave-purple md:ml-10 nav-link 
          ${isNavActive && 'active'}
        `}
    >
      <Link href={path} onClick={() => router.push(path)} className="block">
        {name}
      </Link>
      <div className="custom-underline" />
    </li>
  );
}
