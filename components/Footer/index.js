import Brand from "../Brand";
import { IconContext } from "react-icons";
import Button from "components/Button";
import { SlSocialLinkedin, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="h-auto mt-32">
      <div className="mb-16 flex justify-between">
        <div>
          <Brand />
          <p className="text-brave-purple font-regular text-lg leading-9 mt-4">Providing a best service for business <br /> to grow on the digital market</p>
          <div className="flex mt-5">

            <IconContext.Provider value={{ size: '1.3em', color: '#2B3BE5' }}>
              <a href="https://www.instagram.com" target="_blank" className="bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4">
                <SlSocialInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" className="bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4">
                <SlSocialTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="bg-[#E8EAFF] h-[45px] w-[45px] flex items-center justify-center rounded-md mr-4">
                <SlSocialLinkedin />
              </a>
            </IconContext.Provider>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start">
          <h4 className="heading-4 mb-4">Browse</h4>
          {[
            { href: '/', name: 'Home' },
            { href: '/about', name: 'About' },
            { href: '/services', name: 'Services' },
            { href: '/portfolio', name: 'Portfolio' },
            { href: '/blog', name: 'Blog' },
            { href: '/contact', name: 'Contact' },
          ].map((item, index) => (
            <Button key={index} type="link" href={item.href} classNames="transition-all !text-brave-purple !text-lg mt-3 hover:!text-palatinate-blue">
              {item.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-col justify-start items-start">
          <h4 className="heading-4 mb-4">Services</h4>
          {[
            { href: '/service/web-design', name: 'Web Design' },
            { href: '/service/seo', name: 'SEO' },
            { href: '/service/smm', name: 'Social Media Marketing' },
            { href: '/service/content-creation', name: 'Content Creation' },
            { href: '/service/ec-solutions', name: 'E-commerce Solutions' },
            { href: '/service/mobiledev', name: 'Mobile App Dev' },
          ].map((item, index) => (
            <Button key={index} type="link" href={item.href} classNames="transition-all !text-brave-purple !text-lg mt-3 hover:!text-palatinate-blue">
              {item.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-col justify-start items-start">
          <h4 className="heading-4 mb-4">Subscribe to our newsteller</h4>

          <div>
            <small className="text-brave-purple font-regular text-base">Subscribe to get latest updates</small>
            <form action="" method="post" className="bg-white h-auto px-4 py-3 flex items-center rounded-lg mt-2">
              <input type="email" name="email" id="email" placeholder="Your email..." className="outline-none text-coarse-wool font-normal" />
              <Button type="submit" isPrimary classNames="!shadow-none py-2 px-4 rounded-md">Susbcribe</Button>
            </form>
          </div>
        </div>
      </div>

      <p className="text-brave-purple font-regular text-lg leading-9 text-center mb-10">&copy; 2023 Hivemind. All Rights Reserved.</p>
    </footer>
  )
}