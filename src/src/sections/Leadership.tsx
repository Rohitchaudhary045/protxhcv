import { useEffect, useRef, useState } from 'react';
import { leadershipData } from '@/config';
import { Users, Award, Globe, Shield, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'WorldSkills Shanghai 2026': <Award size={22} className="text-[#00FFE0]" />,
  'Operation Black Trace, Cyber Secured Africa': <Globe size={22} className="text-[#00C3FF]" />,
  'TECHNIKI': <Shield size={22} className="text-[#9D4EDD]" />,
  'CSI Linux Cybersecurity For All Program': <GraduationCap size={22} className="text-[#FF8C42]" />,
};

export default function Leadership() {
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
      id="leadership"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{ background: '#020B13' }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users size={24} className="text-[#00C3FF]" />
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text">
              Leadership & Mentorship
            </h2>
          </div>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)' }}
          />
        </div>

        {/* Leadership Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {leadershipData.map((item, i) => (
            <div
              key={item.organization}
              className={`glass-card p-6 transition-all duration-700 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,195,255,0.06)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,195,255,0.12)] transition-colors">
                  {iconMap[item.organization] || <Users size={22} className="text-[#00C3FF]" />}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#E6F1FF] mb-1">
                    {item.role}
                  </h3>
                  <p className="text-[12px] font-mono text-[#00C3FF] tracking-[0.06em] mb-2">
                    {item.organization}
                  </p>
                  <p className="text-[13px] text-[#5B7B9C] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
