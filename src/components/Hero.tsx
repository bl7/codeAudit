'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section pt-32 pb-24 md:pt-40 md:pb-32 text-logicaltrust-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              We&apos;ve been auditing source code<br/>
              for over 5 years.
            </h1>
            <p className="text-base md:text-lg mb-8">
              <strong>Our specialists find the weakest points in your source code</strong> and
              will show you how to fix them step-by-step, as well as how to improve your security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-logicaltrust-yellow hover:bg-opacity-90 text-logicaltrust-gray font-medium py-3 px-6 rounded transition duration-300 text-center"
              >
                Ask for quotation
              </Link>
              <Link
                href="#services"
                className="bg-transparent hover:bg-logicaltrust-gray hover:bg-opacity-10 text-logicaltrust-gray border border-logicaltrust-gray font-medium py-3 px-6 rounded transition duration-300 text-center"
              >
                Check the offer
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/responsive.png"
              alt="Source Code Audit Illustration"
              width={600}
              height={400}
              className="w-full max-w-md mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
