import Link from 'next/link';
import { ChangeEvent, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { SlSocialLinkedin, SlSocialTwitter, SlSocialFacebook } from 'react-icons/sl';
import { fadeVariants, transformVariants, commonMotionProps } from '@utils/motion';
import type NavItemType from 'types/NavItem';
import Button from './Button';
import { Input } from './Form';
import Brand from './Brand';

const socialMediaIconProps = { size: '1.3em', color: '#2B3BE5' };

export default function Footer({ menus }: { menus: NavItemType[] }) {
  const [email, setEmail] = useState('');
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);
  const [isSuccessSubscribed, setIsSuccessSubscribed] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Mock database data email
    const userEmailDB = 'kadekdarmayasa@gmail.com';

    if (email === userEmailDB) {
      setIsAlreadySubscribed(true);
      setIsSuccessSubscribed(false);
    } else {
      // TODO: Input user email to Database
      setIsAlreadySubscribed(false);
      setIsSuccessSubscribed(true);
      setEmail('');
    }

    setTimeout(() => {
      setIsAlreadySubscribed(false);
      setIsSuccessSubscribed(false);
    }, 5000);

    event.preventDefault();
  };

  return (
    <footer className="h-auto mt-32">
      <div className="mb-16 flex lg:flex-row flex-col justify-between">
        <motion.div {...commonMotionProps} variants={fadeVariants('linear')} custom={0}>
          <Brand />
          <motion.p
            {...commonMotionProps}
            variants={transformVariants('linear')}
            custom={1}
            className="text-brave-purple font-regular text-lg leading-9 mt-4 lg:w-[350px]"
          >
            Providing a best service for business to grow on the digital market
          </motion.p>
        </motion.div>

        <div className="flex lg:flex-row flex-col mt-10 lg:mt-0">
          <motion.div
            {...commonMotionProps}
            variants={fadeVariants('linear')}
            className="flex flex-col justify-start items-start"
          >
            <motion.h4
              {...commonMotionProps}
              variants={transformVariants('linear')}
              custom={0}
              className="heading-4 mb-4"
            >
              Browse
            </motion.h4>
            {menus.map((menu, index) => (
              <motion.div
                key={menu.name}
                {...commonMotionProps}
                variants={transformVariants('linear')}
                custom={index + 1}
              >
                <Link
                  href={menu.path}
                  className="transition-all text-brave-purple text-lg mt-3 block hover:text-palatinate-blue"
                >
                  {menu.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...commonMotionProps}
            variants={fadeVariants('linear')}
            className="flex flex-col justify-start items-start lg:ms-20 mt-10 lg:mt-0"
          >
            <motion.h4
              {...commonMotionProps}
              variants={transformVariants('linear')}
              custom={0}
              className="heading-4 mb-4"
            >
              Subscribe to our newsteller
            </motion.h4>
            <motion.small
              {...commonMotionProps}
              variants={transformVariants('linear')}
              custom={1}
              className="text-brave-purple text-sm"
            >
              Subscribe to get latest updates
            </motion.small>

            <motion.form
              {...commonMotionProps}
              variants={fadeVariants('linear')}
              custom={0}
              action=""
              method="POST"
              className={`focus:outline-1 bg-white h-auto px-6 py-3 flex w-full
              items-center rounded-full mt-3 ${
                isInputFocused ? 'outline outline-2 outline-[#E8EAFF]' : ''
              }`}
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                name="email"
                placeHolder="Your email..."
                id="email"
                value={email}
                className="placeholder:text-brave-purple rounded-lg text-coarse-wool font-light outline-none w-full
                transition-all input-subscribe"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
              <Button type="submit" isPrimary className="!shadow-none py-2 px-4 rounded-full">
                Subscribe
              </Button>
            </motion.form>

            {isAlreadySubscribed && (
              <motion.small
                initial="hidden"
                animate="visible"
                variants={fadeVariants('anticipate')}
                className="text-red-400 block mt-2 font-medium text-base"
              >
                User is already subscribed!
              </motion.small>
            )}

            {isSuccessSubscribed && (
              <motion.small
                initial="hidden"
                animate="visible"
                variants={fadeVariants('anticipate')}
                className="text-green-400 block mt-2 font-medium text-base"
              >
                Thank you for subscribing!
              </motion.small>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        {...commonMotionProps}
        variants={fadeVariants('linear')}
        className="flex justify-center flex-col items-center mb-10"
      >
        <motion.p
          {...commonMotionProps}
          variants={fadeVariants('linear')}
          custom={0}
          className="text-brave-purple font-regular text-lg leading-9 text-center"
        >
          &copy; 2023 Hivemind. All Rights Reserved.
        </motion.p>
        <div className="flex mt-4 justify-center">
          <IconContext.Provider value={socialMediaIconProps}>
            <motion.div {...commonMotionProps} variants={fadeVariants('linear')} custom={0}>
              <Link
                href="https://www.facebook.com"
                className="!bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                <SlSocialFacebook />
              </Link>
            </motion.div>
            <motion.div {...commonMotionProps} variants={fadeVariants('linear')} custom={1}>
              <Link
                href="https://www.twitter.com"
                className="!bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                <SlSocialTwitter />
              </Link>
            </motion.div>
            <motion.div {...commonMotionProps} variants={fadeVariants('linear')} custom={2}>
              <Link
                href="https://www.linkedin.com"
                className="!bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                <SlSocialLinkedin />
              </Link>
            </motion.div>
          </IconContext.Provider>
        </div>
      </motion.div>
    </footer>
  );
}
