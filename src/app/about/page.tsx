import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "About Us - CodeAudit",
  description: "Learn about our team of source code audit experts from Nepal.",
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl font-bold text-logicaltrust-gray mb-2">
                The CodeAudit Expert Team
              </h1>
              <p className="text-logicaltrust-lightgray text-xl mt-4">
                We&apos;ve been auditing source code security for over 5 years.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-logicaltrust-gray mb-6">
                We believe that the digital world can be a safe place. That's
                why we've been actively participating in projects related to
                security for over 5 years. We caution against digital threats
                through training workshops, and for many years we've been using
                our blog to educate on safer software development practices.
              </p>
              <p className="text-logicaltrust-gray mb-6">
                Our team of security experts brings a unique blend of
                development and cybersecurity skills to analyze source code from
                multiple perspectives, finding vulnerabilities that automated
                tools miss.
              </p>
              <p className="text-logicaltrust-gray">
                Based in Kathmandu, Nepal, our team works with clients both
                locally and internationally to ensure their applications are
                secure from the ground up.
              </p>
            </div>

            <div className="text-center mb-12">
              <h2 className="section-title text-3xl font-bold text-logicaltrust-gray mb-2">
                Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-logicaltrust-offwhite p-6 rounded-lg text-center">
                <div className="w-24 h-24 rounded-full bg-logicaltrust-yellow mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">RK</span>
                </div>
                <h3 className="text-xl font-bold text-logicaltrust-gray mb-1">
                  Biswash Lamichhane
                </h3>
                <p className="text-logicaltrust-yellow font-medium mb-3">
                  Chief Security Officer
                </p>
                <p className="text-logicaltrust-lightgray text-sm">
                  Expert in application security with 8+ years of experience in
                  secure code review and penetration testing.
                </p>
              </div>

              <div className="bg-logicaltrust-offwhite p-6 rounded-lg text-center">
                <div className="w-24 h-24 rounded-full bg-logicaltrust-yellow mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AP</span>
                </div>
                <h3 className="text-xl font-bold text-logicaltrust-gray mb-1">
                  Nischal Timalsina
                </h3>
                <p className="text-logicaltrust-yellow font-medium mb-3">
                  Lead Code Auditor
                </p>
                <p className="text-logicaltrust-lightgray text-sm">
                  Full-stack developer turned security specialist with expertise
                  in OWASP Top 10 vulnerabilities.
                </p>
              </div>

              <div className="bg-logicaltrust-offwhite p-6 rounded-lg text-center">
                <div className="w-24 h-24 rounded-full bg-logicaltrust-yellow mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SK</span>
                </div>
                <h3 className="text-xl font-bold text-logicaltrust-gray mb-1">
                  Suraj Karna
                </h3>
                <p className="text-logicaltrust-yellow font-medium mb-3">
                  Security Researcher
                </p>
                <p className="text-logicaltrust-lightgray text-sm">
                  Specializes in discovering zero-day vulnerabilities and
                  developing secure coding patterns.
                </p>
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

export default AboutPage;
