import { useEffect, useRef, useState } from 'react';
import { cvesData, hallOfFameData, achievementStats } from '@/config';
import { Bug, Trophy } from 'lucide-react';

function AnimatedCounter({ value, suffix = '', delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-[clamp(36px,5vw,56px)] font-bold leading-none tracking-[-0.02em] gradient-text">
        {count}{suffix}
      </div>
    </div>
  );
}

const severityColors: Record<string, string> = {
  Critical: '#FF2A6D',
  High: '#FF8C42',
  Medium: '#E0AF68',
};

const categoryColors: Record<string, string> = {
  'Automotive': '#FF2A6D',
  'Fintech': '#00FFE0',
  'Banking': '#00C3FF',
  'E-Commerce': '#9D4EDD',
  'Social Media': '#FF8C42',
  'Enterprise': '#5B7B9C',
  'Government': '#00C3FF',
  'Education': '#9D4EDD',
};

export default function Achievements() {
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

  // Filter stats that have numeric values for counter animation
  const numericStats = achievementStats.filter(s => s.value > 0);
  // Filter text-only stats
  const textStats = achievementStats.filter(s => s.value === 0);

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1929 0%, #020B13 100%)',
      }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text mb-4">
            Hall of Achievements
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)' }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {numericStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card p-5 text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={i * 200} />
              <p className="text-[11px] font-mono tracking-[0.06em] text-[#5B7B9C] uppercase mt-2 leading-[1.4]">
                {stat.label}
              </p>
            </div>
          ))}
          {textStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card p-5 text-center flex items-center justify-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(numericStats.length + i) * 100}ms` }}
            >
              <p className="text-[13px] font-mono tracking-[0.04em] text-[#00C3FF] leading-[1.5]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* CVE Showcase */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Bug size={20} className="text-[#00C3FF]" />
            <h3 className="text-[20px] font-semibold text-[#E6F1FF]">CVEs Discovered</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {cvesData.map((cve, i) => (
              <div
                key={cve.id}
                className={`glass-card p-5 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[14px] text-[#00C3FF] font-medium">{cve.id}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-mono tracking-[0.06em]"
                      style={{
                        backgroundColor: `${severityColors[cve.severity]}20`,
                        color: severityColors[cve.severity],
                        border: `1px solid ${severityColors[cve.severity]}40`,
                      }}
                    >
                      {cve.severity}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[18px] font-bold gradient-text">{cve.cvss}</span>
                  <span className="text-[10px] font-mono text-[#5B7B9C] uppercase">CVSS</span>
                </div>
                <p className="text-[13px] text-[#5B7B9C] leading-[1.5]">
                  {cve.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hall of Fame Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={20} className="text-[#00C3FF]" />
            <h3 className="text-[20px] font-semibold text-[#E6F1FF]">Hall of Fame</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {hallOfFameData.map((org, i) => (
              <div
                key={org.name}
                className={`glass-card p-4 flex items-center gap-3 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${600 + i * 75}ms` }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: categoryColors[org.category] || '#5B7B9C' }}
                />
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-[#E6F1FF] truncate">{org.name}</p>
                  <p
                    className="text-[10px] font-mono uppercase tracking-[0.06em]"
                    style={{ color: categoryColors[org.category] || '#5B7B9C' }}
                  >
                    {org.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
