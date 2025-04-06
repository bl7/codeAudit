'use client';

import React from 'react';

const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title text-3xl font-bold text-logicaltrust-gray mb-2">
            Industries we serve:
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center rounded-full bg-logicaltrust-offwhite">
              <svg className="w-10 h-10 text-logicaltrust-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h3v-1.44c0-1.336 1.616-2.005 2.56-1.06A4.975 4.975 0 0116 10a4.975 4.975 0 01-1.94 3.94c-.944.945-2.56.276-2.56-1.06V11h-3v1.44c0 1.336-1.616 2.005-2.56 1.06A4.975 4.975 0 014 10a4.975 4.975 0 011.94-3.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-logicaltrust-gray font-medium">Finance</h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center rounded-full bg-logicaltrust-offwhite">
              <svg className="w-10 h-10 text-logicaltrust-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
            </div>
            <h3 className="text-logicaltrust-gray font-medium">Software & SaaS</h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center rounded-full bg-logicaltrust-offwhite">
              <svg className="w-10 h-10 text-logicaltrust-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-logicaltrust-gray font-medium">E-commerce</h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center rounded-full bg-logicaltrust-offwhite">
              <svg className="w-10 h-10 text-logicaltrust-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-logicaltrust-gray font-medium">Education</h3>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center rounded-full bg-logicaltrust-offwhite">
              <svg className="w-10 h-10 text-logicaltrust-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-logicaltrust-gray font-medium">Healthcare</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
