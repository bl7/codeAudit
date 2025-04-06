'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300">
            HOME
          </Link>
          <Link href="/#services" className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300">
            SERVICES
          </Link>
          <Link href="/blog" className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300">
            BLOG
          </Link>
          <Link href="/about" className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300">
            ABOUT US
          </Link>
          <Link href="/#contact" className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-logicaltrust-gray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4 py-2">
            <Link
              href="/"
              className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/#services"
              className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/blog"
              className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/about"
              className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/#contact"
              className="text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
