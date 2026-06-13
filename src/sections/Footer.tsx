import { Linkedin, Github, Instagram, BookOpen } from 'lucide-react';
import { personalData } from '@/config';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Bug Bounty', href: '#bugbounty' },
];

const socialLinks = [
  { icon: <Linkedin size={16} />, href: personalData.linkedin, label: 'LinkedIn' },
  { icon: <Instagram size={16} />, href: personalData.instagram, label: 'Instagram' },
  { icon: <Github size={16} />, href: personalData.github, label: 'GitHub' },
  { icon: <BookOpen size={16} />, href: personalData.medium, label: 'Blog' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative py-12"
      style={{
        background: 'rgba(2, 11, 19, 0.95)',
        borderTop: '1px solid rgba(0, 195, 255, 0.1)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/favicon-32x32.png"
              alt="HCV"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-mono text-[16px] tracking-[0.08em] text-[#00C3FF]">
                HCV
              </p>
              <p className="text-[11px] text-[#5B7B9C]">
                Hack Cyber Verse
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <p className="text-[11px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mb-3">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-[13px] text-[#5B7B9C] hover:text-[#00C3FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <p className="text-[11px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mb-3">
              Connect
            </p>
            <div className="flex md:justify-end gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[rgba(0,195,255,0.06)] flex items-center justify-center text-[#5B7B9C] hover:text-[#00C3FF] hover:bg-[rgba(0,195,255,0.12)] transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgba(0,195,255,0.08)] text-center">
          <p className="text-[11px] font-mono text-[#3A5A7A] tracking-[0.06em]">
            &copy; {new Date().getFullYear()} {personalData.name} | Hack Cyber Verse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
