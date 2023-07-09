import Image from 'next/image';
import hivemindLogo from '../../../public/images/hivemind-logo.svg';

export default function Loading() {
  return (
    <div className="h-screen w-screen bg-ghost-white flex justify-center items-center">
      <Image
        src={hivemindLogo}
        height={80}
        alt="Hivemind Logo"
        className="mr-5 mt-2 logo-hivemind--animate"
      />
      <h1 className="heading-1 !text-palatinate-blue">Hivemind</h1>
    </div>
  );
}
