'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ icon, title, description, link }: {
  icon: string,
  title: string,
  description: string,
  link: string
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="mb-4">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-logicaltrust-gray">{title}</h3>
      <p className="text-logicaltrust-lightgray mb-4 flex-grow">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-logicaltrust-gray hover:text-logicaltrust-yellow font-medium transition-colors duration-300"
      >
        Read more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
};

const Services = () => {
  const services = [
    {
      id: 'source-code-audit',
      icon: '/images/icon-01.svg',
      title: 'Source Code Audits',
      description: "By performing an audit of any application's source code, we will detect a greater number of vulnerabilities than during traditional blackbox-type tests.",
      link: '/services/source-code-audit'
    },
    {
      id: 'security-audits',
      icon: '/images/icon-02.svg',
      title: 'Security Audits & Compliance',
      description: 'We verify the compliance of information system safeguards in your company with determined requirements.',
      link: '/services/security-audits'
    },
    {
      id: 'security-awareness',
      icon: '/images/icon-03.svg',
      title: 'Security Awareness and Education',
      description: 'To effectively prevent information leaks, it is crucial to raise awareness and educate employees, providing them with necessary knowledge.',
      link: '/services/security-awareness'
    },
    {
      id: 'penetration-tests',
      icon: '/images/icon-c03.svg',
      title: 'Penetration Tests',
      description: 'In order to protect your applications, we will check their resistance to attacks and provide detailed reports.',
      link: '/services/penetration-tests'
    },
    {
      id: 'mobile-app-security',
      icon: '/images/icon-01.svg',
      title: 'Mobile App Security',
      description: 'We analyze mobile applications to find security flaws and vulnerabilities in both Android and iOS platforms.',
      link: '/services/mobile-app-security'
    },
    {
      id: 'cloud-testing',
      icon: '/images/icon-02.svg',
      title: 'Cloud Infrastructure Testing',
      description: 'We test the configuration of cloud services like AWS, Azure, Google Cloud to ensure they meet security best practices.',
      link: '/services/cloud-testing'
    }
  ];

  return (
    <section id="services" className="py-16 bg-logicaltrust-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl font-bold text-logicaltrust-gray mb-2">
            Our services:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
