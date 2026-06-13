import { useEffect } from 'react';
import { siteConfig } from '@/config';
import Navigation from '@/components/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Achievements from '@/sections/Achievements';
import BugBounty from '@/sections/BugBounty';
import Leadership from '@/sections/Leadership';
import Projects from '@/sections/Projects';
import Certifications from '@/sections/Certifications';
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function App() {
  useEffect(() => {
    document.title = siteConfig.title;
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = siteConfig.description;

    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <div className="relative" style={{ background: '#020B13' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <BugBounty />
        <Leadership />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
