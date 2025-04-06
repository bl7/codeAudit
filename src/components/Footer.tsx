'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-logicaltrust-gray text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/nepal-code-audit-logo.svg"
                alt="CodeAudit Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="text-sm">
            <p>
              copyright © {currentYear} - CodeAudit Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
