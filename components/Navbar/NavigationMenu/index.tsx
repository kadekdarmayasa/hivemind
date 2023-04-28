import Link from "next/link";
import { useRouter } from "next/router";

type NavigationMenu = {
  href: string,
  name: string
}

export default function NavigationMenu({ href, name }: NavigationMenu): JSX.Element {
  const router = useRouter();

  const handleClick = () => { router.push(href) }

  return (
    <li className={`text-base font-regular relative text-brave-purple ml-10 nav-link ${router.asPath == href && 'active'}`}>
      <Link href={href} onClick={handleClick} className="block">{name}</Link>
      <div className="h-[1.2px] w-0 bg-palatinate-blue absolute -bottom-1 left-0 opacity-0 transition-all"></div>
    </li>
  );
}