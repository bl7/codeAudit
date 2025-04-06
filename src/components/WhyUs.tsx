'use client';

import React from 'react';
import Image from 'next/image';

const WhyUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl font-bold text-logicaltrust-gray mb-2">
            What do we offer?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-logicaltrust-gray mb-6 text-lg">
              Our source code audit service focuses on identifying security vulnerabilities, code quality issues, and potential performance bottlenecks in your application.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 text-logicaltrust-yellow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-logicaltrust-gray mb-1">Deep Code Analysis</h3>
                  <p className="text-logicaltrust-lightgray">We conduct a thorough review of your source code to identify security issues before they become problems.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 text-logicaltrust-yellow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-logicaltrust-gray mb-1">Detailed Reports</h3>
                  <p className="text-logicaltrust-lightgray">Our audit reports include clear explanations of issues found, their severity, and specific recommendations for fixing them.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1 text-logicaltrust-yellow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-logicaltrust-gray mb-1">Remediation Support</h3>
                  <p className="text-logicaltrust-lightgray">We don't just identify issues - we provide clear guidance on how to fix them, with code examples when appropriate.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-logicaltrust-offwhite p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-logicaltrust-gray mb-6">Our Audit Process</h3>

            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-logicaltrust-yellow text-logicaltrust-gray font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-logicaltrust-gray mb-1">Initial Assessment</h4>
                  <p className="text-logicaltrust-lightgray">We evaluate your codebase scope and identify critical components for focused review.</p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-logicaltrust-yellow text-logicaltrust-gray font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-logicaltrust-gray mb-1">Automated & Manual Analysis</h4>
                  <p className="text-logicaltrust-lightgray">We combine automated tools with expert manual review to thoroughly inspect your code.</p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-logicaltrust-yellow text-logicaltrust-gray font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-logicaltrust-gray mb-1">Report & Recommendations</h4>
                  <p className="text-logicaltrust-lightgray">We deliver a comprehensive report with prioritized findings and actionable recommendations.</p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-logicaltrust-yellow text-logicaltrust-gray font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-logicaltrust-gray mb-1">Follow-up Support</h4>
                  <p className="text-logicaltrust-lightgray">We provide ongoing support to help implement our recommendations and verify fixes.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
