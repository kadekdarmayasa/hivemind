import Brand from '@components/Brand';
import React, {
  ChangeEvent,
  useState,
  useMemo,
  FormEvent,
} from 'react';
import { IconContext } from 'react-icons';
import Button from '@components/Button';
import { SlSocialLinkedin, SlSocialTwitter, SlSocialFacebook } from 'react-icons/sl';
import type { NavigationMenuProps } from 'types/NavigationMenu';
import { Input } from '@components/Form';

export default function Footer({ menus }: { menus: NavigationMenuProps[] }) {
  const [email, setEmail] = useState('');
  const [isAlreadySubcribed, setIsAlreadySubcribed] = useState(false);
  const [isSuccessSubcribed, setIsSuccessSubcribed] = useState(false);

  const socialMediaIconProps = useMemo(() => ({
    size: '1.3em',
    color: '#2B3BE5',
  }), []);

  const menuWithSubMenus = menus.filter((menu) => menu.containSubMenu);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Mock database data email
    const userEmailDB = 'kadekdarmayasa@gmail.com';

    if (email === userEmailDB) {
      setIsAlreadySubcribed(true);
      setIsSuccessSubcribed(false);
    } else {
      // TODO: Input user email to Database
      setIsAlreadySubcribed(false);
      setIsSuccessSubcribed(true);
      setEmail('');
    }

    setTimeout(() => {
      setIsAlreadySubcribed(false);
      setIsSuccessSubcribed(false);
    }, 5000);

    event.preventDefault();
  };

  // TODO: Using Framer Motion for Animation
  return (
    <footer className="h-auto mt-32">
      <div className="mb-16 flex justify-between">
        <div>
          <Brand />
          <p className="text-brave-purple font-regular text-lg leading-9 mt-4">
            Providing a best service for business
            <br />
            to grow on the digital market
          </p>
          <div className="flex mt-5">
            <IconContext.Provider value={socialMediaIconProps}>
              <Button
                type="link"
                isExternal
                href="https://www.facebook.com"
                className="!bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4"
              >
                <SlSocialFacebook />
              </Button>
              <Button
                type="link"
                isExternal
                href="https://www.twitter.com"
                className="!bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4"
              >
                <SlSocialTwitter />
              </Button>
              <Button
                type="link"
                isExternal
                href="https://www.linkedin.com"
                className="!bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4"
              >
                <SlSocialLinkedin />
              </Button>
            </IconContext.Provider>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start">
          <h4 className="heading-4 mb-4">Browse</h4>
          {menus.map((menu) => {
            if (menu.containSubMenu) return false;

            return (
              <Button
                key={menu.name}
                type="link"
                href={menu.path}
                className="transition-all !text-brave-purple !text-lg mt-3 hover:!text-palatinate-blue
              focus:!text-palatinate-blue"
              >
                {menu.name}
              </Button>
            );
          })}
        </div>

        {menuWithSubMenus.map((menuWithSubMenu) => (
          <div key={menuWithSubMenu.name} className="flex flex-col justify-start items-start">
            <h4 className="heading-4 mb-4">{menuWithSubMenu.name}</h4>
            {menuWithSubMenu.subMenus.map((subMenu) => (
              <Button
                key={subMenu.name}
                type="link"
                href={`${menuWithSubMenu.path}${subMenu.path}`}
                className="transition-all !text-brave-purple !text-lg mt-3 hover:!text-palatinate-blue
              focus:!text-palatinate-blue"
              >
                {subMenu.name}
              </Button>
            ))}
          </div>
        ))}

        <div className="flex flex-col justify-start items-start">
          <h4 className="heading-4 mb-4">Subscribe to our newsteller</h4>

          <div>
            <small className="text-brave-purple font-regular text-base">Subscribe to get latest updates</small>
            <form
              action=""
              method="POST"
              className="focus:outline-1 focus:outline focus:outline-blue-100 bg-white h-auto px-6 py-3 flex
              items-center rounded-full mt-2"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                name="email"
                placeHolder="Your email..."
                id="email"
                value={email}
                className="placeholder:text-brave-purple rounded-lg text-coarse-wool font-light outline-none
                transition-all"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                }}
              />
              <Button
                type="submit"
                isPrimary
                className="!shadow-none py-2 px-4 rounded-full"
              >
                Susbcribe
              </Button>
            </form>

            {isAlreadySubcribed && (
              <small className="text-red-400 block mt-2 font-medium text-base">User is already subscribed!</small>
            )}

            {isSuccessSubcribed && (
              <small className="text-green-400 block mt-2 font-medium text-base">Thank you for subscribing!</small>
            )}
          </div>
        </div>
      </div>

      <p className="text-brave-purple font-regular text-lg leading-9 text-center mb-10">
        &copy; 2023 Hivemind. All Rights Reserved.
      </p>
    </footer>
  );
}
