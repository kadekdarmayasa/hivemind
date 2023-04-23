import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href='/' className="text-palatinate-blue text-2xl font-bold flex items-center">
      <Image src='/images/hivemind-logo.svg' height={40} width={40} alt="Hivemind Logo" className="mr-2" />
      <span>Hivemind</span>
    </Link>
  );
}
