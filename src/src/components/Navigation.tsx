import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Menu, X, LogOut, User } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Bug Bounty', href: '#bugbounty' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(2,11,19,0.85)] backdrop-blur-[20px]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand with Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5"
        >
          <img
            src="/favicon-32x32.png"
            alt="HCV"
            className="w-7 h-7 rounded-full"
          />
          <span className="font-mono text-sm tracking-[0.08em] text-[#00C3FF] hover:text-[#00FFE0] transition-colors">
            HCV
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-2.5 py-1.5 text-[12px] font-medium tracking-[0.08em] transition-all duration-300 rounded-md ${
                activeSection === link.href.slice(1)
                  ? 'text-[#00C3FF]'
                  : 'text-[#5B7B9C] hover:text-[#E6F1FF]'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#00C3FF] shadow-[0_0_8px_rgba(0,195,255,0.5)]" />
              )}
            </a>
          ))}

          {isAuthenticated && user && (
            <div className="flex items-center gap-2 ml-3 pl-3 border-l border-[rgba(0,195,255,0.15)]">
              <User size={14} className="text-[#00C3FF]" />
              <span className="text-[11px] text-[#5B7B9C] max-w-[80px] truncate">
                {user.name || 'User'}
              </span>
              <button
                onClick={logout}
                className="text-[#5B7B9C] hover:text-[#FF2A6D] transition-colors"
                title="Logout"
              >
                <LogOut size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#5B7B9C] hover:text-[#00C3FF] transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[rgba(2,11,19,0.95)] backdrop-blur-[20px] border-t border-[rgba(0,195,255,0.1)] max-h-[70vh] overflow-y-auto">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 text-sm font-medium tracking-[0.1em] transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#00C3FF]'
                    : 'text-[#5B7B9C]'
                }`}
              >
                {link.label}
              </a>
            ))}
            {isAuthenticated && user && (
              <div className="flex items-center gap-2 pt-2 border-t border-[rgba(0,195,255,0.1)]">
                <User size={14} className="text-[#00C3FF]" />
                <span className="text-xs text-[#5B7B9C]">{user.name || 'User'}</span>
                <button onClick={logout} className="text-[#5B7B9C] hover:text-[#FF2A6D]">
                  <LogOut size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
