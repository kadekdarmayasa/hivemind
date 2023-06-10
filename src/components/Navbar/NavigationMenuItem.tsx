import { LegacyRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NavItemProps } from 'types/NavItem';

type NavigationMenuItemProps = NavItemProps & {
  lastMenuItemRef?: LegacyRef<HTMLLIElement>;
};

export default function NavigationMenuItem({
  path,
  name,
  lastMenuItemRef,
}: NavigationMenuItemProps) {
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
