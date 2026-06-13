import { useEffect, useRef, useState } from 'react';
import { personalData } from '@/config';
import { Mail, MapPin, Linkedin, Github, Instagram, BookOpen, Download } from 'lucide-react';
import Starfield from '@/components/Starfield';

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: personalData.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <Instagram size={18} />,
      href: personalData.instagram,
      label: 'Instagram',
    },
    {
      icon: <Github size={18} />,
      href: personalData.github,
      label: 'GitHub',
    },
    {
      icon: <BookOpen size={18} />,
      href: personalData.medium,
      label: 'Blog',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-[120px] overflow-hidden min-h-[60vh] flex items-center"
      style={{ background: '#020B13' }}
    >
      <Starfield opacity={0.2} speed={1.5} />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        {/* Title */}
        <div
          className={`mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-[16px] text-[#5B7B9C] leading-[1.7] max-w-[500px] mx-auto">
            I'm always open to discussing security research, vulnerability disclosures, or collaboration opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-10 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Email */}
          <a href={`mailto:${personalData.email}`} className="glass-card p-6 flex flex-col items-center gap-3 hover:border-[rgba(0,195,255,0.4)] transition-all">
            <Mail size={22} className="text-[#00C3FF]" />
            <div className="text-center">
              <p className="text-[10px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mb-1">Email</p>
              <p className="text-[12px] font-mono text-[#E6F1FF] break-all">{personalData.email}</p>
            </div>
          </a>

          {/* Location */}
          <div className="glass-card p-6 flex flex-col items-center gap-3">
            <MapPin size={22} className="text-[#00C3FF]" />
            <div className="text-center">
              <p className="text-[10px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mb-1">Location</p>
              <p className="text-[13px] font-mono text-[#E6F1FF]">{personalData.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-6 flex flex-col items-center gap-3">
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(0,195,255,0.08)] flex items-center justify-center text-[#5B7B9C] hover:text-[#00C3FF] hover:bg-[rgba(0,195,255,0.15)] transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-[10px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase">Connect</p>
            </div>
          </div>
        </div>

        {/* Download Resume CTA */}
        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-[#020B13] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,195,255,0.4)]"
            style={{
              background: 'linear-gradient(90deg, #00FFE0, #00C3FF)',
            }}
          >
            <Download size={16} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
