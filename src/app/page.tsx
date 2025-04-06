import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <WhyUs />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
