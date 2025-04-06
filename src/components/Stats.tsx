'use client';

import React from 'react';

const StatItem = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-logicaltrust-gray mb-2">{number}</div>
      <p className="text-sm md:text-base text-logicaltrust-lightgray">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-logicaltrust-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl font-bold text-logicaltrust-gray mb-2">
            Why should you choose CodeAudit?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <StatItem
            number="50+"
            label="security tests"
          />
          <StatItem
            number="10+"
            label="technical workshops and training sessions"
          />
          <StatItem
            number="25+"
            label="satisfied customers from Nepal and abroad"
          />
          <StatItem
            number="200+"
            label="vulnerabilities found in tested systems"
          />
          <StatItem
            number="50+"
            label="blog posts about security best practices"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
