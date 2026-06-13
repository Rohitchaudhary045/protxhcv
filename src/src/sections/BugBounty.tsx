import { useEffect, useRef, useState } from 'react';
import { bugBountyData } from '@/config';
import { Bug, Target, FileSearch, Globe, ChevronRight } from 'lucide-react';

const highlights = [
  {
    icon: <Bug size={20} className="text-[#FF2A6D]" />,
    title: "40+ Hall of Fame",
    subtitle: "Recognitions",
  },
  {
    icon: <Target size={20} className="text-[#00FFE0]" />,
    title: "3 CVEs",
    subtitle: "Assigned",
  },
  {
    icon: <FileSearch size={20} className="text-[#00C3FF]" />,
    title: "100+",
    subtitle: "Vulnerabilities",
  },
  {
    icon: <Globe size={20} className="text-[#9D4EDD]" />,
    title: "Bugcrowd",
    subtitle: "Researcher",
  },
];

export default function BugBounty() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="bugbounty"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{ background: '#0A1929' }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text mb-4">
            Bug Bounty & Security Research
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)' }}
          />
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`glass-card p-5 text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-center mb-3">{h.icon}</div>
              <p className="text-[18px] font-bold text-[#E6F1FF] mb-0.5">{h.title}</p>
              <p className="text-[11px] font-mono tracking-[0.06em] text-[#5B7B9C] uppercase">
                {h.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Items */}
        <div className="max-w-[800px] mx-auto">
          {bugBountyData.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 py-4 border-b border-[rgba(0,195,255,0.08)] last:border-b-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <ChevronRight size={16} className="text-[#00C3FF] mt-1 shrink-0" />
              <p className="text-[14px] text-[#5B7B9C] leading-[1.6]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
