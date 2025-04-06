import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - CodeAudit',
  description: 'Latest insights on source code security and best practices.',
};

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
}

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 'common-vulnerabilities-nodejs',
      title: 'Common Security Vulnerabilities in Node.js Applications',
      date: 'April 2, 2025',
      excerpt: 'Node.js has become one of the most popular platforms for building web applications. However, with its popularity comes increased security risks. In this post, we examine the most common security vulnerabilities found in Node.js applications during our code audits.',
      author: 'Rahul Kumar',
      category: 'Security'
    },
    {
      id: 'secure-coding-practices-java',
      title: 'Secure Coding Practices for Java Applications',
      date: 'March 25, 2025',
      excerpt: 'Java remains one of the most widely used programming languages for enterprise applications. Learn about the essential secure coding practices that every Java developer should follow to prevent common vulnerabilities.',
      author: 'Anisha Pradhan',
      category: 'Best Practices'
    },
    {
      id: 'automated-vs-manual-code-review',
      title: 'Automated vs. Manual Code Review: Which Is Better for Security?',
      date: 'March 15, 2025',
      excerpt: 'When it comes to code security, should you rely on automated tools or manual code review? We explore the pros and cons of each approach and explain why a combination of both yields the best results.',
      author: 'Suraj Karki',
      category: 'Methodology'
    },
    {
      id: 'owasp-top-10-code-examples',
      title: 'OWASP Top 10: Real-World Code Examples and Fixes',
      date: 'March 5, 2025',
      excerpt: 'The OWASP Top 10 lists the most critical security risks to web applications. In this post, we provide real-world code examples of these vulnerabilities and show you how to fix them in your applications.',
      author: 'Rahul Kumar',
      category: 'Security'
    },
    {
      id: 'securing-apis-best-practices',
      title: 'Securing Your APIs: Best Practices and Common Pitfalls',
      date: 'February 28, 2025',
      excerpt: 'APIs are the backbone of modern applications, but they also present unique security challenges. Learn about the best practices for securing your APIs and the common pitfalls to avoid.',
      author: 'Anisha Pradhan',
      category: 'API Security'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl font-bold text-logicaltrust-gray mb-2">
                Blog
              </h1>
              <p className="text-logicaltrust-lightgray text-xl mt-4">
                Insights on source code security and best practices
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="mb-12 pb-12 border-b border-gray-200 last:border-b-0"
                >
                  <h2 className="text-2xl font-bold text-logicaltrust-gray mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-logicaltrust-yellow transition duration-300">
                      {post.title}
                    </Link>
                  </h2>

                  <div className="flex items-center text-sm text-logicaltrust-lightgray mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-logicaltrust-lightyellow text-logicaltrust-gray px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>

                  <p className="text-logicaltrust-gray mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-logicaltrust-yellow hover:underline font-medium inline-flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
