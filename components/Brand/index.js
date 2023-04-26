import Link from "next/link";

export default function Brand() {
  return (
    <Link href='/' className="text-palatinate-blue text-2xl font-bold flex items-center">
      <img src="/images/hivemind-logo.svg" alt="Hivemind Logo" height={40} width={40} className="mr-2" />
      <span>Hivemind</span>
    </Link>
  );
}
