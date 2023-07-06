import Link from 'next/link';
import Image from 'next/image';
import pageNotFoundIllustration from '../../public/images/page-not-found.svg';

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <Image src={pageNotFoundIllustration} alt="not found" width={300} />
      <h1 className="heading-3 mt-6">Page Not Found</h1>
      <Link
        href="/"
        className="flex justify-center items-center w-[210px] h-[60px] rounded-full bg-palatinate-blue shadow-purple-sm text-white hover:shadow-purple-md transition-all mt-10"
      >
        Back to homepage
      </Link>
    </div>
  );
}
