import { useEffect, useRef, useState } from 'react';
import RadarChart from '@/components/RadarChart';
import { skillsData, securityDomains } from '@/config';
import {
  Globe,
  Network,
  Monitor,
  Laptop,
  Cpu,
  Cloud,
  ShieldCheck,
  Bug,
  Fingerprint,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} className="text-[#00C3FF]" />,
  Network: <Network size={22} className="text-[#00C3FF]" />,
  Monitor: <Monitor size={22} className="text-[#00C3FF]" />,
  Laptop: <Laptop size={22} className="text-[#00C3FF]" />,
  Binary: <Bug size={22} className="text-[#00C3FF]" />,
  Fingerprint: <Fingerprint size={22} className="text-[#00C3FF]" />,
  Cloud: <Cloud size={22} className="text-[#00C3FF]" />,
  Cpu: <Cpu size={22} className="text-[#00C3FF]" />,
};

export default function Skills() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{ background: '#0A1929' }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text mb-4">
            Technical Arsenal
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)' }}
          />
        </div>

        {/* Radar Chart */}
        <div
          className={`flex justify-center mb-16 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full max-w-[400px]">
            <RadarChart skills={skillsData.radar} size={400} />
          </div>
        </div>

        {/* Tools Categories */}
        <div className="mb-12">
          <h3 className="text-[16px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.categories.map((cat, i) => (
              <div
                key={cat.title}
                className={`glass-card p-5 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {iconMap[cat.icon]}
                  <h4 className="text-[15px] font-semibold text-[#E6F1FF]">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-[0.04em] bg-[rgba(0,195,255,0.06)] text-[#5B7B9C] border border-[rgba(0,195,255,0.12)] hover:border-[rgba(0,195,255,0.4)] hover:text-[#00C3FF] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Domains */}
        <div>
          <h3 className="text-[16px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mb-6 text-center">
            Security Domains
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {securityDomains.map((domain, i) => (
              <div
                key={domain}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-500 ${
                  visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${800 + i * 50}ms`,
                  background: 'rgba(0, 195, 255, 0.05)',
                  border: '1px solid rgba(0, 195, 255, 0.12)',
                }}
              >
                <ShieldCheck size={12} className="text-[#00C3FF] shrink-0" />
                <span className="text-[12px] text-[#5B7B9C]">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
