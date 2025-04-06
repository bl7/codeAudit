import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Source Code Audit - CodeAudit',
  description: 'Our source code audit service helps identify security vulnerabilities, code quality issues, and potential performance bottlenecks in your application.',
};

const SourceCodeAuditPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl font-bold text-logicaltrust-gray mb-2">
                Source Code Audits
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <p className="text-logicaltrust-gray text-lg mb-6">
                  <strong>By performing an audit of your application's source code, we will detect a greater number of vulnerabilities than during traditional blackbox-type security tests and make your solutions safer.</strong>
                </p>

                <p className="text-logicaltrust-gray mb-6">
                  What distinguishes us is our programming experience gained over years in various projects - we've created software for web applications, mobile apps, databases, and more. During audits, we use tools for dynamic and static analysis that allow us to improve the effectiveness of the service.
                </p>

                <h2 className="text-2xl font-bold text-logicaltrust-gray mb-4 mt-10">How Our Source Code Audit Works</h2>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">1. Initial Assessment and Planning</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    We begin by understanding your application's architecture, technologies used, and business critical features. This helps us create a targeted audit plan focusing on high-risk areas.
                  </p>

                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">2. Automated Scanning</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    We use industry-leading static application security testing (SAST) tools to scan your codebase for common vulnerabilities, coding errors, and security misconfigurations.
                  </p>

                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">3. Manual Code Review</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    Our security experts manually review critical parts of your code, focusing on authentication, authorization, data validation, encryption, and other security-sensitive areas.
                  </p>

                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">4. Vulnerability Verification</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    We verify each potential vulnerability to eliminate false positives and determine the actual impact and exploitability in your specific environment.
                  </p>

                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">5. Comprehensive Reporting</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    You receive a detailed report with all findings categorized by severity, with clear explanations, affected code snippets, and specific recommendations for remediation.
                  </p>

                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">6. Remediation Support</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    We don't just identify problems - we help you fix them. Our team provides guidance and reviews your fixes to ensure vulnerabilities are properly addressed.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-logicaltrust-gray mb-4">Common Issues We Identify</h2>
                <ul className="list-disc list-inside space-y-2 text-logicaltrust-gray mb-8">
                  <li>Injection vulnerabilities (SQL, NoSQL, OS command, etc.)</li>
                  <li>Authentication and session management flaws</li>
                  <li>Sensitive data exposure and insecure data storage</li>
                  <li>Broken access control</li>
                  <li>Security misconfigurations</li>
                  <li>Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF)</li>
                  <li>Using components with known vulnerabilities</li>
                  <li>Cryptographic failures</li>
                  <li>Insecure deserialization</li>
                  <li>Insufficient logging and monitoring</li>
                </ul>

                <div className="mb-10 bg-logicaltrust-offwhite p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-3">Technologies We Cover</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-bold text-logicaltrust-gray mb-2">Languages</h4>
                      <ul className="text-logicaltrust-lightgray space-y-1">
                        <li>JavaScript/TypeScript</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>C#/.NET</li>
                        <li>Ruby</li>
                        <li>Go</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-logicaltrust-gray mb-2">Frameworks</h4>
                      <ul className="text-logicaltrust-lightgray space-y-1">
                        <li>React, Angular, Vue</li>
                        <li>Node.js, Express</li>
                        <li>Spring, Hibernate</li>
                        <li>Django, Flask</li>
                        <li>Laravel, Symfony</li>
                        <li>ASP.NET</li>
                        <li>Ruby on Rails</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-logicaltrust-gray mb-2">Mobile & More</h4>
                      <ul className="text-logicaltrust-lightgray space-y-1">
                        <li>iOS (Swift, Objective-C)</li>
                        <li>Android (Java, Kotlin)</li>
                        <li>React Native</li>
                        <li>Flutter</li>
                        <li>Xamarin</li>
                        <li>Ionic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-logicaltrust-offwhite p-6 rounded-lg mb-8 sticky top-32">
                  <h3 className="text-xl font-bold text-logicaltrust-gray mb-4">Request a Quote</h3>
                  <p className="text-logicaltrust-gray mb-6">
                    Interested in our source code audit service? Get in touch with us for a customized quote based on your project's size and requirements.
                  </p>
                  <Link
                    href="/#contact"
                    className="block w-full bg-logicaltrust-yellow hover:bg-opacity-90 text-logicaltrust-gray font-medium py-3 px-6 rounded text-center transition duration-300"
                  >
                    Contact Us
                  </Link>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-logicaltrust-gray mb-3">Why choose our code audit?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-logicaltrust-yellow mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-logicaltrust-gray">Experienced security professionals</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-logicaltrust-yellow mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-logicaltrust-gray">Comprehensive manual + automated analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-logicaltrust-yellow mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-logicaltrust-gray">Clear, actionable recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-logicaltrust-yellow mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-logicaltrust-gray">Post-audit remediation support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-logicaltrust-yellow mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-logicaltrust-gray">Competitive pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default SourceCodeAuditPage;
