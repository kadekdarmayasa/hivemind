import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';

export default function NavigationMenu({ href, name }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  }

  return (
    <li className={`text-base font-regular text-brave-purple ml-10 nav-link ${router.asPath == href && 'active'}`}>
      <Link href={href} onClick={handleClick} className="block">{name}</Link>
    </li>
  );
}

NavigationMenu.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
