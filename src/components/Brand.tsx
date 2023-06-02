import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Brand() {
  return (
    <motion.div
      initial={{ translateY: -50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Link href="/" className="text-palatinate-blue text-3xl font-bold flex items-center">
        <Image
          src="/images/hivemind-logo.svg"
          alt="Hivemind Logo"
          height={40}
          width={40}
          className="mr-2"
        />
        <span>Hivemind</span>
      </Link>
    </motion.div>
  );
}
