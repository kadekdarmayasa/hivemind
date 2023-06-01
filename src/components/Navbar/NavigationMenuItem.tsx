import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NavigationMenuProps } from 'types/NavigationMenu';

export default function NavigationMenuItem({ path, name }: NavigationMenuProps) {
  const router = useRouter();

  return (
    <li
      className={`
        z-50 mb-10 md:mb-0 text-white text-xl md:text-lg font-regular relative md:text-brave-purple md:ml-10 nav-link 
        ${router.asPath === path && 'active'}
      `}
    >
      <div>
        <Link href={path} onClick={() => router.push(path)} className="block">
          {name}
        </Link>
        <div className="custom-underline" />
      </div>
    </li>
  );
}
